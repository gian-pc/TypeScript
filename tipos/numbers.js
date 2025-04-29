"use strict";
(() => {
    let avengers;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) { // Error: avengers is not defined
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
})();
