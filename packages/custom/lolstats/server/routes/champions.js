'use strict';

var champions = require('../controllers/champions');


module.exports = function (Champions, app, auth) {

    app.route('/api/champions')
        .get(champions.all)
        .post(auth.requiresLogin, champions.create);

    app.route('/api/events/:eventId')
        .get(auth.isMongoId, champions.show)
        .put(auth.isMongoId, auth.requiresLogin, champions.update);


    app.param('eventId', champions.champion);
};
