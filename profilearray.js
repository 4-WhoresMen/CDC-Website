const sdecomp = [
    amazon = {
        name:"Amazon",
        image: "amazon.png",
        site:"Amazon"
    },
    credit_suisse = {
        name:"Credit Suisse",
        image: "CS.png",
        site:"credit_suisse"
    },
    deshaw = {
        name: "DE Shaw",
        image: "de.jpg",
        site:"deshaw"
    }
    ,
    goldman_sachs = {
        name: "Goldman Sachs",
        image: "goldman.png",
        site:"goldman_sachs"
    },
    google = {
        name: "Google",
        image: "google.png",
        site:"google"
    },
    honeywell = {
        name: "Honeywell",
        image: "honeywell.png",
        site:"honeywell"
    },
    huawei = {
        name: "Huawei",
        image: "huawei.png",
        site:"huawei"
    },
    mastercard= {
        name: "Mastercard",
        image: "mastercard.png",
        site:"mastercard"
    },
    microsoft = {
        name: "Microsoft",
        image: "microsoft.png",
        site:"microsoft"
    },
    oracle = {
        name: "Oracle",
        image: "oracle.png",
        site: "oracle"
    },
    salesforce= {
        name: "Salesforce",
        image: "salesforce.png",
        site:"salesforce"
    },
    sprinklr = {
        name: "Sprinklr",
        image: "sprinklr.png",
        site:"sprinklr"
    },
    uber= {
        name: "Uber",
        image: "uber.png",
        site:"uber"
    },
    wells_fargo = {
        name: "Wells Fargo",
        image: "wells.png",
        site:"wells_fargo"
    }
    ];
    
    
    //  ..............
    
    
    const quantcomp = [
    deutsche_bank = {
        name: "Deutsche Bank",
        image: "deutsche.png",
        site: "deutsche_bank"
    },
    quadeye = {
        name: "Quadeye",
        image: "quadeye.png",
        site: "quadeye"
    }
    ];
    
    
    //  ..............
    
    
    
    const analyticscomp = [
    abinbev = {
        name: "Ab InBev",
        image: "ab.gif",
        site: "abinbev"
    },
    adobe = {
        name: "Adobe",
        image: "adobe.png",
        site: "adobe"
    },
    american_express = {
        name: "American Express",
        image: "american-express.png",
        site: "american_express"
    },
    citi = {
        name: "CITI",
        image: "citi.png",
        site: "citi"
    },
    goldman_sachs = {
        name: "Goldman Sachs",
        image: "goldman.png",
        site: "goldman_sachs"
    },
    microsoft = {
        name: "Microsoft",
        image: "microsoft.png",
        site: "microsoft"
    },
    tata = {
        name: "Tata AIG General Insurance",
        image: "tata.png",
        site: "tata"
    }
    ];
    
    
    //  ..............
    
    
    
    const corecomp = [
    analog_devices = {
        name : "Analog Devices",
        site: "analog_devices",
        image: "analog_devices.png"
    },
    bajaj = {
        name: "Bajaj Auto Ltd",
        image: "bajaj.png",
        site: "bajaj_auto"
    },
    piramal = {
        name: "Piramal Pharma Solutions",
        image: "piramal.webp",
        site: "piramal"
    },
    qualcomm= {
        name: "Qualcomm",
        image: "qualcomm.png",
        site: "qualcomm"
    },
    texas_instrument = {
        name: "Texas Instruments",
        site: "texas",
        image: "texas.png"
    }
    ];
    
    
    //  ..............
    
    
    
    const consultingcomp = [
    lek = {
        name: "L. E. K. Consulting",
        site:"lek_consulting",
        image: "lek.png"
    }
    ];
    
    
    //  ..............
    
    
    
    const financecomp = [
    deutsche_bank = {
        name:"Deutsche Bank",
        image: "deutsche.png",
        site: "deutsche_bank"
    },
    gartner = {
        name: "Gartner",
        image: "gartner-icon.jpg",
        site: "gartner"
    },
    jpmorgan = {
        name: "JP Morgan Chase",
        image: "jp.png",
        site: "jpmorgan"
    },
    png = {
        name: "P&G",
        site: "png",
        image: "png.png"
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