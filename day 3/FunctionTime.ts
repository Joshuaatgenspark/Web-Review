//explicit return
function something(): number {
    return new Date().getTime();
}

//void
function printer(): void {
    console.log('Hi');
}

//Parameters
function params(a: number, b: number, c?: number, d: number= 10) {
    return a + b;
}

//Rest parameters
function restparams(a: number, b: number, rest: number[]) {
    return a + b + rest.reduceRight((p,c) => p+c, 0);
}

//Type Alias
type  mask = (value: number) => number;

const  maskFunction: mask = (value) => value * -1;
