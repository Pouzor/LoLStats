'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Lolstats = new Module('lolstats');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Lolstats.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Lolstats.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Lolstats.menus.add({
    title: 'lolstats example page',
    link: 'lolstats example page',
    roles: ['authenticated'],
    menu: 'main'
  });

    Lolstats.menus.add({
        title: 'Admin page',
        link: 'admin page',
     //   roles: ['authenticated'],
        menu: 'main'
    });
  
  Lolstats.aggregateAsset('css', 'lolstats.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Lolstats.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Lolstats.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Lolstats.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Lolstats;
});
