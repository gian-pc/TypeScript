// Función anónima autoinvocada
(()=>{

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    // isSuperman = (isBatman) ? 'ABC': 'XYZ'; // Error: Type 'string' is not assignable to type 'boolean'
    isSuperman = true && false;

    console.log({isSuperman});
})();