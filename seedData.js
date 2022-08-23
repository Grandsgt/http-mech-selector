const mechopedia = [
    {
        title: 'UrbanMech',
        tonnage: 30,
        class: 'Light',
        maxSpeed: 32.4,
        origin: 'Inner Sphere',
        model: 'UM-R60',
        manufacturer: 'Orguss Industries, Hellespont Industrial, Phoenix Heavy Industries',
        chassis: 'Republic-R',
        armor: 'Durallex Medium',
        engine: 'Leenex 60',
        heatsinks: 11,
        comms: 'Dalban Interact',
        targeting: 'Dalban Urban',
        jumpJets: 'Pitban 6000',
        armament: 'Autocannon/10 1, Small Laser 1',
        design: '"Extended Torso Twist" + "Narrow/Low Profile" + "No/Minimal Arms"',
        circa: 2675,
        cost: 1471925,
        variants: "'UM-R50', 'UM-R60L', 'UM-R63', 'UM-R68', 'UM-R69', 'UM-R70', 'UM-R80', 'UM-AIV', 'UM-R90 SuburbanMech', 'UM-R93', 'UM-R96', 'UM-R100 SuburbanMech'",
        uniques: "'UM-K9', 'UM-SC Street Cleaner'",
        description: 'A failed amubusher due to its low speed, it was found to be better suited to urban warfare due to its low profile and excellent torso rotation',
    },
    {
        title: 'Blackjack',
        tonnage: 45,
        class: 'Medium',
        maxSpeed: 64.8,
        origin: 'Inner Sphere',
        model: 'BJ-1',
        manufacturer: "'General Motors', 'Ceres Metals Industries'",
        chassis: 'GM BJ-I',
        armor: 'Durallex Medium',
        engine: 'GM 180',
        heatsinks: 11,
        comms: 'Dalban Micronics',
        targeting: 'Dalban AQ',
        jumpJets: 'Whitworth Jetlift',
        armament: "'Autocannon/2, 2', 'Medium Laser, 4'",
        design: 'Bad Reputation',
        circa: 2757,
        cost: 3147225,
        variants: "'BJ-1X', 'BJ-1DB', 'BJ-1DC', 'BJ-2', 'BJ-2r', 'BJ-3', 'BJ-3X', 'BJ-4', 'BJ-5', 'Blackjack C'",
        uniques: 'BJ-A "Arrow"',
        description: 'Well rounded mech with an unsubstatiated bad reputation leading to its lack of adoption outside of the Federated Suns'
    },
    {
        title: 'Marauder',
        tonnage: 70,
        class: 'Heavy',
        maxSpeed: 64.8,
        origin: 'Inner Sphere',
        model: 'MAD-3R',
        manufacturer: "'General Motors', 'Ceres Metal Industries', 'Bowie Industries', 'Gibson Federated BattleMechs', 'Ibuki Robotics & Manufacturing', 'Independence Weaponry', 'Majesty Metals and Manufacturing', 'Ronin Incorporated', 'Taurus Territorial Industries', 'Vandenberg Mechanized Industries', 'Pinard Protectorates Limited'",
        chassis: 'GM Marauder',
        armor: 'Valiant Lamellor',
        engine: 'Vlar 300',
        heatsinks: 16,
        comms: 'Dalban Micronics',
        targeting: 'Dalban HiRez',
        jumpJets: 'N/A',
        armament: "'PPC, 2', 'Medium Laser, 2', 'Autocannon/5, 1'",
        design: "'Command BattleMech', 'Directional Torso Mount (RT)', 'Hyper-Extending Actuators', 'Narrow/Low Profile', 'Exposed Weapon Linkage (AC/5)'",
        circa: 2819,
        cost: 6635125,
        variants: "'MAD-1R', 'MAD-2R', 'MAD-2T', 'MAD-3D', 'MAD-3L', 'MAD-3M', 'MAD-3R (C)', 'MAD-4X', 'MAD-5CS', 'MAD-5D', 'MAD-5D-DC', 'MAD-5L', 'MAD-5M', 'MAD-5R', 'MAD-5S', 'MAD-5T', 'MAD-6L', 'MAD-7C', 'MAD-7D', 'MAD-7M', 'MAD-7R', 'MAD-7S', 'MAD-9D', 'MAD-9M', 'MAD-9M2', 'MAD-9S', 'MAD-9W', 'MAD-9W2', 'MAD-11D', 'MAD-BR-O OmniMarauder'",
        uniques: "'MAD-SD Marauder Douglass', 'MAD-7D Marauder Von Staskov', 'Bounty Hunter Model (3015)', 'Bounty Hunter Model (3044)', 'Bounty Hunter Model (3138)', 'Red Hunter (3146)'",
        description: 'Tremendous firepower that punches at the top of its class, often able to stand toe-to-toe with even Assualt mechs'
    },
    {
        title: 'Cyclops',
        tonnage: 90,
        class: 'Assault',
        maxSpeed: 64.8,
        origin: 'Inner Sphere',
        model: 'CP-10-Z',
        manufacturer: "'Grumium', 'Stormvanger Assemblies, Unlimited'",
        chassis: 'Stormvanger HV-7',
        armor: 'Starshield Special',
        engine: 'Hermes 360',
        heatsinks: 12,
        comms: 'Olmstead 840',
        targeting: 'Tacticon Tracer 280',
        jumpJets: 'N/A',
        armament: "'Autocannon/20, 1', 'LRM-10, 1', 'Medium Laser, 2', 'SRM-4, 1'",
        design: "'Battle Computer', 'Cowl', 'Weak Head Armor', 'Difficult Ejection'",
        circa: 2710,
        cost: 9217660,
        variants: "'CP-10-HQ', 'CP-10-Q', 'CP-11-A', 'CP-11-A-DC', 'CP-11-B', 'CP-11-C', 'CP-11-C2', 'CP-11-C3', 'CP-11-G', 'CP-11-H', 'CP-12-K', 'Cyclops C'",
        uniques: "'CP-S Sleipnir', 'CP-10-P', 'CP-11-P'",
        description: 'Designed as both a multirole Assualt mech with additional battle computer systems to act as a mobile headquarters unit.'
    },
]


const users = [
    {
        callSign: 'Calgor',
        firstName: 'Callum',
        lastName: 'Waimwright',
        password: 'mechatengu'
    }
]

const weapons = [
    {
        model: 'UM-R60',
        SmallLaser: 1,
        AutoCannon10: 1

    },
    {

    }
]

const manufacturerList = [
    {
        name: 'General Motors'
    },
]


const productionList=  [
    {
        model:'UM-R60',
        OrgussIndustries: true,
        HellespontIndustrial: true,
        PhoenixHeavyIndustries: true
    }
]
module.exports = {
    mechopedia,
    users,
    weapons,
    manufacturerList,
    productionList
}