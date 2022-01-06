function add1(n1: number, n2: number, res: boolean , str: string ) {
    if (typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
}

const number1 = 5;
const number2 = 98.30;
const printResult = true;
const resultStr = 'Result is: ';

const res = add1(number1, number2, printResult, resultPhrase);

console.log(res);
