function mixcolors(){
    const changeBackColor = document.body.style
    const changeDivColor = document.getElementById("login")

    let colorIndex = 0
    
    
    const mixOfColors = []
    const mixOfColors2 = []
    let numeroIndex2 = 0

    for(let x = 0; x<100;x++){

        

            const color = `rgb(${x}, ${x}, ${x})`
            const color2 = `rgb(${100-x}, ${100-x}, ${100-x})`
            mixOfColors.push(color)
            mixOfColors2.push(color2)
        
        
    }
    for(let x = 100; x>=1;x--){

        

        const color = `rgb(${x}, ${x}, ${x})`
        const color2 = `rgb(${numeroIndex2}, ${numeroIndex2}, ${numeroIndex2})`
        mixOfColors.push(color)
        mixOfColors2.push(color2)
        numeroIndex2++
    
    
}

    setInterval(() => {
        
        changeBackColor.backgroundImage = `linear-gradient(to bottom, ${mixOfColors[colorIndex]}, ${mixOfColors2[colorIndex]})`
    
        
        colorIndex = (colorIndex + 1) % mixOfColors.length
    }, 48)

}

mixcolors() 

