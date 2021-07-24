const sdecomp = [
    amazon = {
        name:"Amazon",
    },
    credit_suisse = {
        name:"Credit Suisse",
    },
    deshaw = {
        name: "DE Shaw",
    }
    ,
    goldman_sachs = {
        name: "Goldman Sachs",
    },
    google = {
        name: "Google",
    },
    honeywell = {
        name: "Honeywell",
    },
    huawei = {
        name: "Huawei",
    },
    mastercard= {
        name: "Mastercard",
    },
    microsoft = {
        name: "Microsoft",
    },
    salesforce= {
        name: "Salesforce",
    },
    sprinklr = {
        name: "Sprinklr",
    },
    uber= {
        name: "Uber",
    },
    wells_fargo = {
        name: "Wells Fargo",
    }
    ];
    
    
    //  ..............
    
    
    const quantcomp = [
    deutsche_bank = {
        name: "Deutsche Bank",
    },
    quadeye = {
        name: "Quadeye",
    }
    ];
    
    
    //  ..............
    
    
    
    const analyticscomp = [
    abinbev = {
        name: "Ab InBev",
    },
    adobe = {
        name: "Adobe",
    },
    american_express = {
        name: "American Express",
    },
    citi = {
        name: "CITI",
    },
    goldman_sachs = {
        name: "Goldman Sachs",
    },
    microsoft = {
        name: "Microsoft",
    },
    tata = {
        name: "Tata AIG General Insurance",
    }
    ];
    
    
    //  ..............
    
    
    
    const corecomp = [
    analog_devices = {
        name : "Analog Devices",
    },
    bajaj = {
        name: "Bajaj Auto Ltd",
    },
    piramal = {
        name: "Piramal Pharma Solutions",
    },
    qualcomm= {
        name: "Qualcomm",
    },
    texas_instrument = {
        name: "Texas Instrument",
    }
    ];
    
    
    //  ..............
    
    
    
    const consultingcomp = [
    lek = {
        name: "L.E.K Consulting",
    }
    ];
    
    
    //  ..............
    
    
    
    const financecomp = [
    deutsche_bank = {
        name:"Deutsche Bank",
    },
    gartner = {
        name: "Gartner",
    },
    jpmorgan = {
        name: "JP Morgan Chase",
    },
    png = {
        name: "P&G",
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