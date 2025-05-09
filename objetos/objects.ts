(()=>{

    let flash:{name: string, age?: number, powers: string[]} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Súper velocidad', 'Viajar en el tiempo'],
    }

    flash = {
        name: 'Clark Kent',
        //age: 60,
        powers: ['Súper fuerza']
    }

    console.log(flash);
        
})();