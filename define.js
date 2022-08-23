const {db} = require('./db');
const {Sequelize, DataTypes, ForeignKeyConstraintError} =  require('sequelize');


const BattleMechs = db.define('BattleMechs', {
    title: {
        type: DataTypes.STRING
    },
    tonnage: {
        type: DataTypes.INTEGER
    },
    class: {
        type: DataTypes.STRING
    },
    maxSpeed: {
        type: DataTypes.NUMBER
    },
    origin: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    //manufacturer: {
    //    type: DataTypes.STRING
    //},
    chassis: {
        type: DataTypes.STRING
    },
    armor: {
        type: DataTypes.STRING
    },
    engine: {
        type: DataTypes.STRING
    },
    heatsinks: {
        type: DataTypes.INTEGER
    },
    comms: {
        type: DataTypes.STRING
    },
    targeting: {
        type: DataTypes.STRING
    },
    jumpJets: {
        type: DataTypes.STRING
    },
    //armament: {
    //    type: DataTypes.STRING
    //},
    //design: {
    //    type: DataTypes.STRING
    //},
    circa: {
        type: DataTypes.INTEGER
    },
    cost: {
        type: DataTypes.INTEGER
    },
    //variants: {
    //    type: DataTypes.STRING
    //},
    uniques: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
});

const User = db.define('User', {
    callSign: {
        type: DataTypes.STRING,
        primaryKey:true
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }

});

const Armament = db.define('Armament', {
    model: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    SmallLaser:{
        type: DataTypes.INTEGER
    },
    MediumLaser:{
        type: DataTypes.INTEGER
    },
    LargeLaser: {
        type: DataTypes.INTEGER
    },
    AutoCannon2: {
        type: DataTypes.INTEGER
    },
    AutoCannon5: {
        type: DataTypes.INTEGER
    },
    AutoCannon10: {
        type: DataTypes.INTEGER
    },

})

const Manufacturer = db.define('Manufacturer', {
    name: {
        type: DataTypes.STRING,
        primaryKey: true
    },
   

})

Manufacturer.belongsToMany(BattleMechs, {through: 'Production', as: 'Producer'})
BattleMechs.belongsToMany(Manufacturer, {through: 'Production'})

User.belongsToMany(BattleMechs, {through: 'ownership', as: 'owner'})
BattleMechs.belongsToMany(User, {through: 'ownership'})

BattleMechs.hasOne(Armament)
Armament.belongsTo(BattleMechs)



module.exports = {BattleMechs, User, Armament, Manufacturer};