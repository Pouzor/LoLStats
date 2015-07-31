'use strict';

var champions = require('../controllers/champions');


module.exports = function (Champions, app, auth) {

    app.route('/api/champions')
        .get(champions.all)
       // .post(auth.requiresLogin, champions.create);
;



    app.param('eventId', champions.champion);
};
