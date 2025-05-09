(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.1256
    }

    const { poder, vision } = avengers;
    //console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ( {ironman, ...resto}: Avengers ) =>{
        console.log(ironman, resto);
    }

    //printAvenger(avengers);


    const avengerArr: [string, boolean, number] = ['Thor', true, 1500.1256];
    const [thor, isAvenger, power] = avengerArr;
    console.log(thor, isAvenger, power);



})();