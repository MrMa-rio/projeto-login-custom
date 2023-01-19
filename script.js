const changeBackColor = document.body;
const changeDivColor = document.getElementById("login")

let colorIndex = 0;
const colors = ["#750706a8", "#02111B","grey"];

setInterval(() => {
    if(colorIndex == 1){
        //fazer com que as letras mudem junto com base na sua cor
        // salvar essa versao no modo customizado 
    }
    changeBackColor.style.backgroundImage = `linear-gradient(to bottom, ${colors[colorIndex]}, black)`;
    
    changeDivColor.style.backgroundColor = colors[colorIndex]
    colorIndex = (colorIndex + 1) % colors.length;
}, 1500);

