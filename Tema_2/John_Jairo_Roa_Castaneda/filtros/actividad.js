const ImageHandler = require('./ImageHandler.js')

let path = 'input/tucan.jpg';
let handler = new ImageHandler(path);

/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

  let outputPath = 'output/ejemplo.jpg';
  let pixeles = [];
  let filas = 2;
  let columnas = 2;
  for (let i = 0; i < filas; i++) {
    let nuevaFila = [];
    console.log("Fila: " + i);
    for (let j = 0; j < columnas; j++) {
      console.log("Columna:" + j)
      let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
      if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
        pixel = [255, 255, 255];
      }
      console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
      nuevaFila.push(pixel);
    }
    console.log(nuevaFila)
    pixeles.push(nuevaFila);
  }
  console.log(pixeles);
  handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala del color deseado.
 *@param {any[]} pixels - Representa el tamaño de la imagen en pixeles.
 *@param {number} agR - Representa el valor del pixel R (Red) en la escala de colores.
 *@param {number} agG - Representa el valor del pixel G (Green) en la escala de colores.
  *@param {number} agB - Representa el valor del pixel B(Blue) en la escala de colores.
 */
function fnConvertImageTOColor(agpixels, agR = -1, agG = -1, agB = -1) {
  for (let row of agpixels) {
    for (let pixel of row) {
      if(agR >= 0)
        pixel[0] = agR;
      if(agG  >= 0)
        pixel[1] = agG;
      if(agB  >= 0)
        pixel[2] = agB;
    }
  }
  return agpixels
}
/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */

function redConverter() {
  let outputPath = 'output/tucan_red.jpg';
  let pixels = handler.getPixels();
  //Aqui tu codigo
  handler.savePixels(fnConvertImageTOColor(pixels, agR = -1, agG =0, agB = 0), outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
  let outputPath = 'output/tucan_green.jpg';
  let pixels = handler.getPixels();
  //Aqui tu codigo
  handler.savePixels(fnConvertImageTOColor(pixels, agR = 0, agG = -1, agB = 0), outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
  let outputPath = 'output/tucan_blue.jpg';
  let pixels = handler.getPixels();
  //Aqui tu codigo
  handler.savePixels(fnConvertImageTOColor(pixels, agR = 0, agG = 0, agB = -1), outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
  let outputPath = 'output/tucan_grey.jpg';
  let pixels = handler.getPixels();
  //Aqui tu codigo
  for (let row of pixels) {
    for (let pixel of row) {
      let average = Math.floor((pixel[0] + pixel[1] + pixel[2]) / 3);
      pixel[0] = average;
      pixel[1] = average;
      pixel[2] = average;
    }
  }
  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
  let outputPath = 'output/tucan_black_and_white.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (let row of pixels) {
    for (let pixel of row) {
      let average = Math.floor((pixel[0] + pixel[1] + pixel[2]) / 3);
      pixel[0] = average < 128 ? 0 : 255;
      pixel[1] = average < 128 ? 0 : 255;
      pixel[2] = average < 128 ? 0 : 255;
    }
  }
  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
  let outputPath = 'output/tucan_scale_down.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  handler.savePixels(
    pixels.filter((_, index) => index % 2 === 0).map((rowOfPixels) => rowOfPixels.filter((_, index) => index % 2 === 0)),
    outputPath,
    handler.getShape()[0] / 2,
    handler.getShape()[1] / 2
  );
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro que recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
  let outputPath = 'output/tucan_dimed.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  for (const row of pixels) {
    for (const pixel of row) {
      pixel[0] = pixel[0] / dimFactor;
      pixel[1] = pixel[1] / dimFactor;
      pixel[2] = pixel[2] / dimFactor;
    }
  }
  handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
  let outputPath = 'output/tucan_inverse.jpg';
  let pixels = handler.getPixels();

  //Aqui tu codigo
  pixels.forEach((row)=>{
    row.forEach((pixel) => {
      pixel[0] = 255 - pixel[0];
      pixel[1] = 255 - pixel[1];
      pixel[2] = 255 - pixel[2];
    });
  });
  handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, habiéndolo multiplicado antes por el factor de fusión correspondiente.
 * @param alphaFirst - Factor de fusion para la primera imagen
 * @param alphaSecond - Factor de fusion para la segunda imagen
 */
function merge(alphaFirst, alphaSecond) {
  let catHandler = new ImageHandler('input/cat.jpg');
  let dogHandler = new ImageHandler('input/dog.jpg');
  let outputPath = 'output/merged.jpg';

  let catPixels = catHandler.getPixels();
  let dogPixels = dogHandler.getPixels();

  let pixels = [];

  //Aqui tu codigo
  for (const i in catPixels) {
    const rowOfPixels = catPixels[i];
    pixels[i] = [];
    for (const j in rowOfPixels) {
      pixels[i][j] = [];
      const dogPixel = dogPixels[i][j];
      const catPixel = rowOfPixels[j];
      const pixel = pixels[i][j];
      pixel[0] = catPixel[0] * alphaSecond + dogPixel[0] * alphaFirst;
      pixel[1] = catPixel[1] * alphaSecond + dogPixel[1] * alphaFirst;
      pixel[2] = catPixel[2] * alphaSecond + dogPixel[2] * alphaFirst;
    }
  }
  dogHandler.savePixels(pixels, outputPath);
}


/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */
let optionN = 9;

switch (optionN) {
  case 1: redConverter(); break;
  case 2: greenConverter(); break;
  case 3: blueConverter(); break;
  case 4: greyConverter(); break;
  case 5: blackAndWhiteConverter(); break;
  case 6: scaleDown(); break;
  case 7: dimBrightness(2); break;
  case 8: invertColors(); break;
  case 9: merge(0.3, 0.7); break;
  default: ejemplo();
}