(() => {

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Gian';
    console.log(typeof myCustomVariable) // string

    myCustomVariable = 12;
    console.log(typeof myCustomVariable) // number

    myCustomVariable = {
        name: 'Gian',
        age: 12,
        powers: [1, 2, 3],
        getName: () => 'Gian'
    }
    console.log(typeof myCustomVariable) // object

})();