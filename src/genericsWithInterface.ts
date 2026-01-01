interface Developer<T, X = null> {
    name: string;
    age: number;
    salary: number;
    device: {
        brand: string;
        model: string;
        price: number;
    };
    smartWatch: T;
    bike?: X;
}

interface RichDevSmartWatch {
    AI: boolean;
    camera: boolean;
    record: boolean;
    heartRate: boolean;
    time_date: boolean;
    stopWatch: boolean;
}

interface PoorDevSmartWatch {
    heartRate: boolean;
    time_date: boolean;
    stopWatch: boolean;
}

interface PoorDevBike {
    brand: string;
    model: string;
    price: number;
    engineCapacity: string;
}

const richDeveloper: Developer<RichDevSmartWatch> = {
    name: "Walidur Tanjim",
    age: 25,
    salary: 100000,
    device: {
        brand: "ASUS",
        model: "TUF Gaming A15 FA506N",
        price: 94000
    },
    smartWatch: {
        AI: true,
        camera: true,
        record: true,
        heartRate: true,
        time_date: true,
        stopWatch: true
    }
};


const poorDeveloper: Developer<PoorDevSmartWatch, PoorDevBike> = {
    name: "Walidur Tanjim",
    age: 25, 
    salary: 65000,
    device: {
        brand: "HP",
        model: "245 G7",
        price: 42000
    },
    smartWatch: {
        heartRate: true,
        time_date: true,
        stopWatch: true
    },
    bike: {
        brand: "Apache",
        model: "RTR",
        engineCapacity: "150CC",
        price: 150000
    }
}