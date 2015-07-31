'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Champion Schema
 */
var PlayerHistorySchema = new Schema({
    mapId: {
        type: Number
    },
    matchCreation: {
        type: Number
    },
    matchDuration: {
        type: Number
    },
    matchId: {
        type: Number
    },
    matchMode: {
        type: String
    },
    matchType: {
        type: String
    },
    platformId: {
        type: String
    },
    queueType: {
        type: String
    },
    season: {
        type: String
    },
    championId: {
        type: Number
    },
    playerId: {
        type: Number
    },
    assists: {
        type: Number
    },
    champLevel: {
        type: Number
    },
    deaths: {
        type: Number
    },
    doubleKills: {
        type: Number
    },
    firstBloodAssist: {
        type: Number
    },
    firstBloodKill: {
        type: String
    },
    firstInhibitorAssist: {
        type: String
    },
    firstInhibitorKill: {
        type: String
    },
    firstTowerAssist: {
        type: String
    },
    firstTowerKill: {
        type: String
    },
    goldEarned: {
        type: Number
    },
    goldSpent: {
        type: Number
    },
    inhibitorKills: {
        type: Number
    },
    item0: {
        type: Number
    },
    item1: {
        type: Number
    },
    item2: {
        type: Number
    },
    item3: {
        type: Number
    },
    item4: {
        type: Number
    },
    item5: {
        type: Number
    },
    item6: {
        type: Number
    },
    killingSprees: {
        type: Number
    },
    kills: {
        type: Number
    },
    largestCriticalStrike: {
        type: Number
    },
    largestKillingSpree: {
        type: Number
    },
    largestMultiKill: {
        type: Number
    },
    magicDamageDealt: {
        type: Number
    },
    magicDamageDealtToChampions: {
        type: Number
    },
    magicDamageTaken: {
        type: Number
    },
    minionsKilled: {
        type: Number
    },
    neutralMinionsKilled: {
        type: Number
    },
    neutralMinionsKilledEnemyJungle: {
        type: Number
    },
    neutralMinionsKilledTeamJungle: {
        type: Number
    },
    pentaKills: {
        type: Number
    },
    physicalDamageDealt: {
        type: Number
    },
    physicalDamageDealtToChampions: {
        type: Number
    },
    physicalDamageTaken: {
        type: Number
    },
    quadraKills: {
        type: Number
    },
    sightWardsBoughtInGame: {
        type: Number
    },
    totalDamageDealt: {
        type: Number
    },
    totalDamageDealtToChampions: {
        type: Number
    },
    totalDamageTaken: {
        type: Number
    },
    totalHeal: {
        type: Number
    },
    totalPlayerScore: {
        type: Number
    },
    totalScoreRank: {
        type: Number
    },
    totalTimeCrowdControlDealt: {
        type: Number
    },
    totalUnitsHealed: {
        type: Number
    },
    towerKills: {
        type: Number
    },
    tripleKills: {
        type: Number
    },
    trueDamageDealt: {
        type: Number
    },
    trueDamageDealtToChampions: {
        type: Number
    },

    trueDamageTaken: {
        type: Number
    },

    unrealKills: {
        type: Number
    },

    visionWardsBoughtInGame: {
        type: Number
    },

    wardsKilled: {
        type: Number
    },

    wardsPlaced: {
        type: Number
    },
    winner: {
        type: String
    }





});

/**
 * Statics
 */
PlayerHistorySchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('PlayerHistory', PlayerHistorySchema);
