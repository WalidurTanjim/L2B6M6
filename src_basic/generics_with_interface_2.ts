interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X
}

interface PoorSmartWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface RichSmartWatch {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
    calculator: boolean;
    AIFeature: boolean;
}

interface PoorBike {
    model: string;
    engineCapacity: string;
}

const poorDeveloper: Developer<PoorSmartWatch, PoorBike> = {
    name: "MR. Poor",
    salary: 20000,
    device: {
        brand: "Lenovo",
        model: "G512 R72",
        releasedYear: "2020"
    },
    smartWatch: {
        heartRate: '120',
        stopWatch: true
    },
    bike: {
        model: 'V4',
        engineCapacity: '165'
    }
}

const richDeveloper: Developer<RichSmartWatch> = {
    name: "MR. Rich",
    salary: 75000,
    device: {
        brand: "ASUS",
        model: "TUF Gaming A15",
        releasedYear: "2024"
    },
    smartWatch: {
        heartRate: '120',
        stopWatch: true,
        callSupport: true,
        calculator: true,
        AIFeature: true
    },
    bike: null
}