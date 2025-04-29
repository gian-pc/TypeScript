(()=>{
    let avengers;
    console.log(avengers)

    const villians: number = 20;

    if (avengers < villians) { // Error: avengers is not defined
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }
})();
