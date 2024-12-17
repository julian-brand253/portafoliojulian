
 let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
};

// Seleccionamos el checkbox y el video
const darkModeCheckbox = document.getElementById('t');
const videoPlayer = document.getElementById('videoPlayer');

// Función que cambia el video según el estado del checkbox
darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        // Si está activado (Dark Mode), cambiamos el video
        videoPlayer.src = 'img/video2.mp4';  // Cambia a video2.mp4
    } else {
        // Si no está activado (Light Mode), volvemos al video original
        videoPlayer.src = 'img/videito.mp4';  // Vuelve a videito.mp4
    }
    videoPlayer.load();  // Recargamos el video para que se actualice
    videoPlayer.play();  // Reproducimos el video cambiado
});

// Obtener las secciones que se van a modificar
// Obtener las secciones que se van a modificar
const curriculumSection = document.getElementById('curriculum');
const contactoSection = document.getElementById('contacto');

// Función para cambiar el fondo de las secciones
function cambiarFondo() {
    // Comprobar si el checkbox está marcado (modo oscuro)
    if (darkModeCheckbox.checked) {
        // Cambiar el fondo a negro en las secciones
        curriculumSection.style.backgroundColor = "#000";
        
        // Cambiar la imagen de fondo en la sección contacto (de prueba4 a prueba3)
        contactoSection.style.backgroundImage = "url('img/prueba3.jpg')";
    } else {
        // Restaurar el fondo original de la sección curriculum
        curriculumSection.style.backgroundColor = "";
        
        // Cambiar la imagen de fondo de la sección contacto a prueba4
        contactoSection.style.backgroundImage = "url('img/prueba4.jpg')";
    }
}

// Event listener para detectar cambios en el checkbox (modo oscuro)
darkModeCheckbox.addEventListener('change', cambiarFondo);

// Llamar a la función al cargar la página para asegurar el estado correcto del fondo
cambiarFondo();
