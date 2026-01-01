// Type Assertion / Type Narrowing
let anything: any;
anything = 25;
// (anything as number).toFixed(2);


anything = "Walidur Tanjim";
// (anything as string).charAt(1);






// KG to GM convertor function
const kgToGMConvertor = (input: string | number): string | number | undefined => {
    if(typeof input === "number"){
        return input * 1000;
    }else if(typeof input === "string"){
        const [value] = input.split(' ');
        return `Converted output is: ${Number(value) * 1000}`
    }
}

const result1 = kgToGMConvertor(2) as number;
// console.log(result1.toFixed(1));
// console.log(result1);
const result2 = kgToGMConvertor('5.3 KG') as string;
// console.log(result2.charAt(1));
// console.log(result2);




// how to get error message using custom error message
type CustomError = {
    message: string;
}

try{

}catch(err){
    console.error((err as CustomError)?.message);
}