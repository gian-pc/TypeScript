(()=>{

    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio: AudioLevel = AudioLevel.max;


    console.log(currentAudio) // 2
    console.log(AudioLevel) // { '0': 'min', '1': 'medium', '2': 'max', min: 0, medium: 1, max: 2 }

})();