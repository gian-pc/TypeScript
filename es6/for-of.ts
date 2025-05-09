(()=>{

    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armor Suit'
    }
    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Hammer'
    }
    const avengers: Avenger[] = [ironman, captainAmerica, thor]
    
    // for of loop
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon)
    }

})();