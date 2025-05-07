(()=>{
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    console.log(avenger.charAt(0)); // D

    // Casting como string
    console.log((avenger as string).charAt(1)); // r
    
    avenger = 123.456;
    console.log(avenger.toFixed(2)); // 123.46
    // Casting como number - otra forma
    console.log(<number>avenger.toFixed(1)); // 123.4
    

    console.log(exists); // undefined
    console.log(power); // undefined

})();