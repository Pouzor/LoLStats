'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Lolstats, app, auth, database) {

  app.get('/lolstats/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/lolstats/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/lolstats/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/lolstats/example/render', function(req, res, next) {
    Lolstats.render('index', {
      package: 'lolstats'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
