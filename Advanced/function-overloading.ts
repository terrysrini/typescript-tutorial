/**
 * Function overloading
 */

function add(a:string, b:string):string {
    return a.concat(b)
}

function add(a:number, b:number): number {
    return a+b;
}

function add(a: any, b:any): any {
    return a + b;
}



