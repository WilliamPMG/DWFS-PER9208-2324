// Obtenemos el boton
  document.addEventListener("DOMContentLoaded", () => {
    btnObtenerChiste = document.getElementsByName("btnObtenerChiste");
  });
  
  //Agregamos el evento clic
  btnObtenerChiste.addEventListener("click", obtenerDatos);
  
  //Definimos la función obtenerDatos
  async function obtenerDatos() {
    document.getElementById("resultado").placeholder = "obteniendo chiste...";
    let url = "https://api.chucknorris.io/jokes/random";
      const response = await fetch(url);
      const result = await response.json();
      document.getElementById("resultado").value = result.value;
  }
  
  