'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    PlayerHistory = mongoose.model('PlayerHistory'),
    _ = require('lodash'),
    https = require('https');

var config = require('../config/config');


/**
 * Find champion by id
 */
exports.playerHistory = function (req, res, next, id) {
    PlayerHistory.load(id, function (err, playerHistory) {
        if (err) return next(err);
        if (!playerHistory) return next(new Error('Failed to load playerHistory ' + id));
        req.playerHistory = playerHistory;
        next();
    });
};


/**
 * List of playerHistory
 */
exports.refresh = function (req, res) {

    //var options = {
    //    host: 'global.api.pvp.net',
    //    port: 443,
    //    path: '/api/lol/static-data/euw/v1.2/champion?api_key='+config.lolApiKey
    //};
    //
    //https.get(options, function (resp) {
    //    var body = '';
    //    resp.on('data', function (chunk) {
    //        //do something with chunk
    //        body += chunk;
    //    });
    //
    //    resp.on("end", function (e) {
    //
    //        var data = JSON.parse(body);
    //        for (var champ in data.data) {
    //
    //            var c = {
    //                id :  data.data[champ].id,
    //                name :  data.data[champ].name,
    //                title :  data.data[champ].title,
    //                key :  data.data[champ].key
    //            };
    //
    //            var champion = new Champion(c);
    //
    //            champion.save(function (err) {
    //                if (err) {
    //                    console.log("Can't save : "+champ+", err : "+err);
    //                }
    //
    //                console.log("Champion saved : "+champ);
    //            });
    //
    //        }
    //
    //        res.json({status: "ok"});
    //    });
    //    resp.on("error", function (e) {
    //        console.log("Got error: " + e.message);
    //    });
    //});
};



/**
 * List of playerHistory
 */
exports.all = function (req, res) {

    PlayerHistory.find().sort('-matchCreation').exec(function (err, playerHistory) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the history ' + err
                });
            }
            res.json(playerHistory);
        });
};
