'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Champion Schema
 */
var ChampionSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String
    },
    key: {
        type: String
    }
});

/**
 * Statics
 */
ChampionSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Champion', ChampionSchema);
