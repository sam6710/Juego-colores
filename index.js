window.onload = function(){
    new_colors = document.getElementById("new_colors");
    new_colors.addEventListener("click", () => {
        imgs = document.getElementsByTagName("img");
        for(i=0; i<imgs.length; i++){
            imgs[i].src = "";
            imgs[i].style.visibility = "hidden";
        }
        h2.innerHTML = "";
        elegir_y_comprobarColor();
    });

    elegir_y_comprobarColor();
};

function generarColor(){
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    color = "rgb(" + a + ", " + b + ", " + c + ")";
    return color;
}

function elegir_y_comprobarColor(){
    colores = [];
    divs_colores = document.getElementsByClassName("div_colores");
    for(i=0; i<divs_colores.length; i++){
        color = generarColor();
        divs_colores[i].style.opacity= "100%";
        divs_colores[i].style.backgroundColor = color;
        colores.push(color);
    }
    num_color = Math.floor(Math.random() * 6);
    color_correcto = colores[num_color];
    h1 = document.querySelector("h1");
    h1.innerHTML = color_correcto.toUpperCase();

    h2 = document.querySelector("h2");
    for (i=0; i<divs_colores.length; i++) {
        divs_colores[i].addEventListener("click", function(e){
            if(e.target.style.backgroundColor == color_correcto){
                img = e.target.querySelector("img");
                e.target.querySelector("img").src = "./imagenes/tick.png";
                img.style.visibility = "visible";
                h2.innerHTML = "Correcto!!!";
            }
            else{
                img = e.target.querySelector("img");
                e.target.querySelector("img").src = "./imagenes/x.png";
                img.style.visibility = "visible";
                h2.innerHTML = "Sigue intentandolo.";
            }
        });
    }
};