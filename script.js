function toggleMode(){
    const html = document.documentElement      // REPRESENTAÇÃO DO DOCUMENTO EM FORMATO DE OBJETO JS// 

    // if(html.classList.contains("light")) { // AQUI VERIFICA NO HTML SE A "lISTA DE CLASSE" CONTÉM, o IF é condicional (true or false)//
    //    html.classList.remove("light")
    //} else{  // else é a contradição, no caso, se não conter light //
    //   html.classList.add("light")
    // }

    html.classList.toggle("light") // ESSA FUNÇÃO TOGGLE RESUME TODA A ESTRUTURA DE CONDICIONAL JÁ FEITA ACIMA//
    const img = document.querySelector("#perfil img")  //AQUI SE CHAMA A CONSTANTE IMG, puxando a função document.querySelector, que seleciona ou direciona de acordo com //
                                                      // a imagem que se colocou de parâmetro, nesse caso, o source da imagem de perfil //

    if(html.classList.contains("light")){ 
        img.setAttribute("src", "./assets/avatar2lm.png") //AQUI SE CHAMA A IMAGEM ALTERNATIVA//
        img.setAttribute("alt", "Foto do Enzo Nava na frente do espelho com sua bolsa de carteiro e camisa listrada") //AQUI A DESCRIÇÃO DE CADA IMAGEM//
    }else{
        
        img.setAttribute("src", "./assets/Avataarr.png") //AQUI SE CHAMA A OUTRA IMAGEM ALTERNATIVA//
        img.setAttribute("alt", "Foto do Enzo Nava na frente do espelho de seu banheiro com a sua linda pulseira de prata.") //AQUI A DESCRIÇÃO DESSA OUTRA IMAGEM ALTERNATIVA//
    }                                   

   

}