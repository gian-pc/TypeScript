(()=>{
    
    const fullName = ( firstName: string, lastName: string ): string =>{
        return `${firstName} ${lastName}`;
    }

    const name = fullName("Gian", "Paucar");
    console.log(name); // Gian Paucar

})();