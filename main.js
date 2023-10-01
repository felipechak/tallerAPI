document.addEventListener("DOMContentLoaded",()=>{
    let bgaudio = document.getElementById("bgaudio")
    bgaudio.volume = 0.25
    const utterThis = new SpeechSynthesisUtterance()
    let finishedQuote = false
    let quoteh4 = document.getElementById("quote")
    const getNewQuote = async () => {
        let apiResponse = await fetch('https://api.kanye.rest/')
        return await apiResponse.json()
    }
    const refreshQuote = () => {
        getNewQuote().then((response)=>{
            console.log(response.quote)
            quoteh4.style.opacity = 0;
            setTimeout(function(){
                quoteh4.innerText = response.quote
                quoteh4.style.opacity = 1;
                const synth = window.speechSynthesis
                console.log(synth.getVoices())
                utterThis.text = response.quote
                utterThis.pitch = 1.2;
                utterThis.rate = 1.3;

                utterThis.onend = function() {
                    console.log("finish")
                    refreshQuote();
                };
                synth.speak(utterThis);
            },500)
        })
    }
    refreshQuote()
    /* while(true){
        getNewQuote().then((response)=>{
            const synth = window.speechSynthesis
            quoteh4.style.opacity = 0;
            setTimeout(()=>{
                quoteh4.innerText = response.quote
                quoteh4.style.opacity = 1;
                const utterThis = new SpeechSynthesisUtterance(response.quote)
            utterThis.pitch = 0.2;
            synth.speak(utterThis);
            },500)
        })
    } */
    /* getNewQuote().then((response)=>{
        console.log(response.quote)
        quoteh4.style.opacity = 0;
        quoteh4.innerText = response.quote
        quoteh4.style.opacity = 1;
        const synth = window.speechSynthesis
        const utterThis = new SpeechSynthesisUtterance(response.quote)
        utterThis.pitch = 0.2;
        synth.speak(utterThis);
        while (synth.speaking) {
            console.log("hola")
        }
    }) */

})