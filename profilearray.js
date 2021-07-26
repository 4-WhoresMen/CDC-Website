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
    salesforce= {
        name: "Salesforce",
        image: "salesforce.png",
        site:"salesforce"
    },
    sprinklr = {
        name: "Sprinklr",
        image: "amazon.png",
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
        image: "deutsche.png"
    },
    quadeye = {
        name: "Quadeye",
        image: "Quadeye.jpg"
    }
    ];
    
    
    //  ..............
    
    
    
    const analyticscomp = [
    abinbev = {
        name: "Ab InBev",
        image: "ab.gif"
    },
    adobe = {
        name: "Adobe",
        image: "adobe.png"
    },
    american_express = {
        name: "American Express",
        image: "american-express.png"
    },
    citi = {
        name: "CITI",
        image: "citi.png"
    },
    goldman_sachs = {
        name: "Goldman Sachs",
        image: "goldman.png"
    },
    microsoft = {
        name: "Microsoft",
        image: "microsoft.png"
    },
    tata = {
        name: "Tata AIG General Insurance",
        image: "tata.png"
    }
    ];
    
    
    //  ..............
    
    
    
    const corecomp = [
    analog_devices = {
        name : "Analog Devices",
    },
    bajaj = {
        name: "Bajaj Auto Ltd",
        image: "bajaj.png"

    },
    piramal = {
        name: "Piramal Pharma Solutions",
        image: "qualcomm.png"
    },
    qualcomm= {
        name: "Qualcomm",
        image: "piramal.svgs"
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
        image: "deutsche.png"
    },
    gartner = {
        name: "Gartner",
        image: "gartner-icon.jpg"
    },
    jpmorgan = {
        name: "JP Morgan Chase",
        image: "jp.png"
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