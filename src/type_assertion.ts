const fullName: string = 'MD. Walidur Rahman Tanjim';
const age: number = 25;
const isStudent: boolean = true;
let anything: any;
anything = 25;
(anything as number)




let myValue: any = 'Hello TypeScript';
const valueLength = (myValue as string).length;
// console.log(valueLength)


const kgToGMConvertor = (input: string | number): string | number | undefined => {
    return typeof input === 'number' ? input*1000 : typeof input === 'string' ? (
        () => {
            const [value] = input.split(' ');
            return `Converted to GM: ${Number(value)*1000}`
        }
    )() : 'Enter any valid number';
}

const result1 = kgToGMConvertor(5) as number;
const result2 = kgToGMConvertor('5 kg') as string;
// console.log(result1)
// console.log(result2)


// custom error
type CustomError = {
    message: 'Here is an error. Try again!';
};

// try{
    
// }catch(err){
//     console.error((err as CustomError)?.message);
// }