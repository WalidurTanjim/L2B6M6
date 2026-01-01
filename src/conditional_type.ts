// Conditional Type: 
type A = null;
type B = undefined;

type C = A extends undefined ? true : B extends number ? true : false;











type RichPeopleVehicles = {
    bike: string;
    car: string;
    cng: string;
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? true : false;

type HasBike = CheckVehicle<"bike">;