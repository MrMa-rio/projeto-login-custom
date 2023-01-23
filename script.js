function mixcolors(){
    const changeBackColor = document.body.style
    const changeDivColor = document.getElementById("login")

    let colorIndex = 0
    
    
    const mixOfColors = []
    const mixOfColorsSecond = []
    let numeroIndexSecond = 0

    for(let x = 0; x<200;x++){

        

            const color = `rgb(${x}, ${x}, ${x})`
            const colorSecond = `rgb(${200-x}, ${200-x}, ${200-x})`
            mixOfColors.push(color)
            mixOfColorsSecond.push(colorSecond)
        
        
    }
    for(let x = 200; x>=1;x--){

        

        const color = `rgb(${x}, ${x}, ${x})`
        const colorSecond = `rgb(${numeroIndexSecond}, ${numeroIndexSecond}, ${numeroIndexSecond})`
        mixOfColors.push(color)
        mixOfColorsSecond.push(colorSecond)
        numeroIndexSecond++
    
    
}

    setInterval(() => {
        
        changeBackColor.backgroundImage = `linear-gradient(to bottom, ${mixOfColors[colorIndex]}, ${mixOfColorsSecond[colorIndex]})`
    
        
        colorIndex = (colorIndex + 1) % mixOfColors.length
    }, 48)

}

mixcolors() 

