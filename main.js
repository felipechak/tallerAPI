document.addEventListener("DOMContentLoaded",()=>{
    let pageBody = document.getElementsByTagName('body')[0]
    let quoteh4 = document.getElementById("quote")
    let author = document.getElementById("author")
    
    const getNewQuote = async () => {
        let apiResponse = await fetch('https://api.quotable.io/random')
        return await apiResponse.json()
    }
    const refreshQuote = () => {
        getNewQuote().then((response)=>{
            console.log(response.content)
            quoteh4.style.opacity = 0;
            author.style.opacity = 0;
            setTimeout(function(){
                quoteh4.innerText = response.content
                author.innerText = response.author
                quoteh4.style.opacity = 1;
                author.style.opacity = 1;
            },500)
            setTimeout(()=>{
                refreshQuote();
            },4000)
        })
    }
    const bgFiles = ['bg.jpg' ,'bg2.png','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg']
    setInterval(()=>{
        let newBgImageName =  bgFiles[Math.floor(Math.random()*bgFiles.length)] 
        var image = new Image();
          // Image for transition
        image.src = `img/${newBgImageName}`;
        image.onload = function () {
            pageBody.style.backgroundImage = `url(${image.src})`
        };
    },3500)
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