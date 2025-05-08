(()=>{

    const addNumbers = (a: number, b: number) =>  a + b;
    const greet = (name: string) => `Hello ${name}`;
    const saveTheWorld = () => `The world is saved!`;

    // let myFunction: Function;
    // let myFunction: (a: number, b: number) => number;
    // let myFunction: (name: string) => string;
    // let myFunction: () => string;

    // myFunction = 10; // Error: Type '10' is not assignable to type 'Function'
    // console.log(myFunction);

    /** 
    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction = greet;
    console.log(myFunction('Goku'));

    myFunction = saveTheWorld;
    console.log(myFunction());
    */

})();