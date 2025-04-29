"use strict";
// Función anónima autoinvocada
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? 'ABC' : 'XYZ'; // Error: Type 'string' is not assignable to type 'boolean'
    isSuperman = true && false;
    console.log({ isSuperman });
})();
