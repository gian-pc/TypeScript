"use strict";
(() => {
    let myCustomVariable = 'Gian';
    console.log(typeof myCustomVariable);
    myCustomVariable = 12;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Gian',
        age: 12,
        powers: [1, 2, 3],
        getName: () => 'Gian'
    };
    console.log(typeof myCustomVariable);
})();
