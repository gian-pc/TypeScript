(()=>{


    const fullName = (firstName: string, ...restArgs: string[]): string =>{
        return `${firstName} ${restArgs.join(' ')}`;
    }


    // La idea es que el primer argumento sea obligatorio y el resto opcional
    const superman = fullName('Clark','Joseph', 'Kent');

    console.log({superman}); // Clark Joseph Kent


})();