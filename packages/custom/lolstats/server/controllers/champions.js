'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Champion = mongoose.model('Champion'),
    _ = require('lodash'),
    https = require('https');

var config = require('../config/config');

/**
 * Find champion by id
 */
exports.champion = function (req, res, next, id) {
    Champion.load(id, function (err, champion) {
        if (err) return next(err);
        if (!champion) return next(new Error('Failed to load champion ' + id));
        req.champion = champion;
        next();
    });
};


/**
 * Create an champion
 */
exports.create = function (req, res) {
    var champion = new Champion(req.body);
    // event.user = req.user;

    champion.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the champion ' + err
            });
        }
        res.json(champion);

    });
};

/**
 * Show an champion
 */
exports.show = function (req, res) {
    res.json(req.champion);
};


/**
 * Update an champion
 */
exports.update = function (req, res) {
    var champion = req.champion;

    champion = _.extend(champion, req.body);


    champion.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the champion'
            });
        }
        res.json(champion);

    });
};

/**
 * List of champion
 */
exports.all = function (req, res) {
    //TODO find bette way to do this
    if (req.query.reload) {

        var options = {
            host: 'global.api.pvp.net',
            port: 443,
            path: '/api/lol/static-data/euw/v1.2/champion?api_key='+config.lolApiKey
        };

        https.get(options, function (resp) {
            var body = '';
            resp.on('data', function (chunk) {
                //do something with chunk
                body += chunk;
            });

            resp.on("end", function (e) {

                var data = JSON.parse(body);
                for (var champ in data.data) {

                    var c = {
                       id :  data.data[champ].id,
                        name :  data.data[champ].name,
                        title :  data.data[champ].title,
                        key :  data.data[champ].key
                    };

                    var champion = new Champion(c);

                    champion.save(function (err) {
                        if (err) {
                            console.log("Can't save : "+champ+", err : "+err);
                        }

                        console.log("Champion saved : "+champ);
                    });

                }

                res.json({status: "ok"});
            });
            resp.on("error", function (e) {
                console.log("Got error: " + e.message);
            });
        });

    } else if (req.query.count) {
        Champion.count().exec(function (err, nb) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the champion ' + err
                });
            }

            res.json({count: nb});
        })

    } else {

        Champion.find().sort('-created').exec(function (err, champions) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the champions ' + err
                });
            }
            res.json(champions);

        });
    }
};
