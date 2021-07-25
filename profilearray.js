const sdecomp = [
    amazon = {
        name:"Amazon",
        site: "amazon"
    },
    credit_suisse = {
        name:"Credit Suisse",
        site: "credit_suisse"
    },
    deshaw = {
        name: "DE Shaw",
        site: "deshaw"
    },
    goldman_sachs = {
        name: "Goldman Sachs",
        site: "goldman_sachs"
    },
    google = {
        name: "Google",
        site: "google"
    },
    honeywell = {
        name: "Honeywell",
        site: "honeywell"
    },
    huawei = {
        name: "Huawei",
        site: "huawei"
    },
    mastercard= {
        name: "Mastercard",
        site: "mastercard"
    },
    microsoft = {
        name: "Microsoft",
        site: "microsoft"
    },
    salesforce= {
        name: "Salesforce",
        site: "salesforce"
    },
    sprinklr = {
        name: "Sprinklr",
        site: "sprinklr"
    },
    uber= {
        name: "Uber",
        site: "uber"
    },
    wells_fargo = {
        name: "Wells Fargo",
        site: "wells_fargo"
    }
    ];
    
    
    //  ..............
    
    
    const quantcomp = [
    deutsche_bank = {
        name: "Deutsche Bank",
        site: "deutsche_bank"
    },
    quadeye = {
        name: "Quadeye",
        site: "quadeye"
    }
    ];
    
    
    //  ..............
    
    
    
    const analyticscomp = [
    abinbev = {
        name: "Ab InBev",
        site: "abinbev"
    },
    adobe = {
        name: "Adobe",
        site: "adobe"
    },
    american_express = {
        name: "American Express",
        site: "american_express"
    },
    citi = {
        name: "CITI",
        site: "citi"
    },
    goldman_sachs = {
        name: "Goldman Sachs",
        site: "goldman_sachs"
    },
    microsoft = {
        name: "Microsoft",
        site: "microsoft"
    },
    tata = {
        name: "Tata AIG General Insurance",
        site: "tata"
    }
    ];
    
    
    //  ..............
    
    
    
    const corecomp = [
    analog_devices = {
        name : "Analog Devices",
        site: "analog_devices"
    },
    bajaj = {
        name: "Bajaj Auto Ltd",
        site: "bajaj"
    },
    piramal = {
        name: "Piramal Pharma Solutions",
        site: "piramal"
    },
    qualcomm= {
        name: "Qualcomm",
        site: "qualcomm"
    },
    texas_instrument = {
        name: "Texas Instrument",
        site: "texas_instrument"
    }
    ];
    
    
    //  ..............
    
    
    
    const consultingcomp = [
    lek = {
        name: "L.E.K Consulting",
        site: "lek"
    }
    ];
    
    
    //  ..............
    
    
    
    const financecomp = [
    deutsche_bank = {
        name:"Deutsche Bank",
        site: "deutche_bank"
    },
    gartner = {
        name: "Gartner",
        site: "gartner"
    },
    jpmorgan = {
        name: "JP Morgan Chase",
        site: "jpmorgan"
    },
    png = {
        name: "P&G",
        site: "png"
    }
    ];

const array = [
    sde = {
        para: "sde",
        name: "SDE",
        about: "Some large about for this sde.",
        resources: "link",
        companies: sdecomp
    },
    quant = {
        para: "quant",
        name: "Quant",
        about: "Some large about for this sde.",
        resources: "link",
        companies: quantcomp
    },
    analytics = {
        para: "analytics",
        name: "Analytics",
        about: "Some large about for this sde.",
        resources: "link",
        companies: analyticscomp
    },
    finance = {
        para: "finance",
        name: "Finance",
        about: "Some large about for this sde.",
        resources: "link",
        companies: financecomp
    },
    consulting = {
        para: "consulting",
        name: "Consulting",
        about: "Some large about for this sde.",
        resources: "link",
        companies: consultingcomp
    },
    core = {
        para: "core",
        name: "Core",
        about: "Some large about for this sde.",
        resources: "link",
        companies: corecomp
    },
]

module.exports = { array};