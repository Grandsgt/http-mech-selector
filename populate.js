const { default: test } = require('node:test');
const {db} = require('./db')
const {BattleMechs, User, Armament, Manufacturer} = require('./define')
const {mechopedia, users, weapons, manufacturerList, productionList} = require('./seedData')

/*let populateMech = async () => {
    await db.sync({force: true});
    await Promise.all(mechopedia.map((c) => {BattleMechs.create(c)}));
};*/

let populate = async () => {
    await db.sync({force: true});
    await Promise.all(users.map((c) => {User.create(c)}));
    await Promise.all(mechopedia.map((c) => {BattleMechs.create(c)}));
    await Promise.all(weapons.map((c) => {Armament.create(c)}));
    await Promise.all(manufacturerList.map((c) => {Manufacturer.create(c)}));

};

let buildDB = async () => {
    await populate();
    const testUser = await User.findOne({where: {
        firstName:'Callum'}});
    const testMech = await BattleMechs.findOne({where: {
        model: 'UM-R60'
    }})
    const testWeapons = await Armament.findOne ({where: {
        model: 'UM-R60'
    }})
    const testManu = await Manufacturer.findOne ({where: {
        name: 'General Motors'
    }})
    await testMech.addManufacturer(testManu)
    await testMech.addUser(testUser)
    await testMech.setArmament(testWeapons)
    console.log(testUser)
    console.log(testMech)
    
}
buildDB()

module.exports = {buildDB}