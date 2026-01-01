interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        price: number;
    };
    smartWatch: T;
    bike?: X;
}

interface PoorSmartWatch {
    heartRate: boolean;
    stopWatch: boolean;
}

interface RichSmartWatch {
    heartRate: boolean;
    call: boolean;
    camera: boolean;
    calculator: boolean;
    AI: boolean;
}

interface PoorBike {
    brand: string;
    model: string;
}

const poorDeveloper: Developer<PoorSmartWatch, PoorBike> = {
    name: "MR. Poor",
    salary: 20000,
    device: {
        brand: "HP",
        model: '245 G7',
        price: 42000
    },
    smartWatch: {
        heartRate: true,
        stopWatch: true
    },
    bike: {
        brand: "YAMAHA",
        model: "V4"
    }
}


const RichDeveloper: Developer<RichSmartWatch> = {
    name: "MR. Rich",
    salary: 85000,
    device: {
        brand: "HP",
        model: '245 G7',
        price: 42000
    },
    smartWatch: {
        heartRate: true,
        call: true,
        camera: true,
        calculator: true,
        AI: true,
    },
    bike: null
}
