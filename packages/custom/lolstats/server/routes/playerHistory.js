'use strict';

var champions = require('../controllers/playerHistory');


module.exports = function (PlayerHistory, app, auth) {

    app.route('/api/playerHistory/refresh')
        .get(playerHistory.refresh)
        // .post(auth.requiresLogin, champions.create);
    ;

    app.route('/api/playerHistory')
        .get(playerHistory.all)
        // .post(auth.requiresLogin, champions.create);
    ;


   // app.param('eventId', champions.champion);
};
