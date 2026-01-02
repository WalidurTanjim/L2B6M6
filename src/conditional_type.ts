// Conditional Type: 
type A = null;
type B = undefined;

type C = A extends undefined ? true : B extends number ? true : false;




/**
    * undefined is not a subtype of null & number is not a subtype of number. thats why this is false.
    * Subtype: Each Dog is a animal. But each animal is not a dog.
    * That's why 'Dog is a subtype of animal'.
    * 
    * 
    * type Person = {
    *   name: string;
    * }
    * 
    * type Student = {
    *   name: string;
    *   role: number;
    * }
    * Here each property of person has student type. That's why "Person type is a subtype of Student type".
 */ 







type RichPeopleVehicles = {
    bike: string;
    car: string;
    cng: string;
};

type CheckVehicle<T> = T extends keyof RichPeopleVehicles ? true : false;

type HasBike = CheckVehicle<"bike">;