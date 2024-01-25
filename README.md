## En caso de descargar el proyecto de Github , realiza lo siguiente : 

npm install



# Instalación de Angular : 

1º --> Realizamos un npm install -g @angular/cli para realizar la instalación de angular


## Creación de un nuevo proyecto



2º --> Para crear un proyecto deberemos usar ng new "nombre del proyecto"


## Desplegar web

3º --> Para desplegar la web necesitaremos uasr ng serve -o

## Imagen Principal

4º --> Insertamos el enlace de la página que no será cambiada de forma aleatoria : <img src="https://prod-media.beinsports.com/image/1696111251535_f53fafe6-816f-4e88-aafb-d992b8867849.jpg" alt="Foto principal">

## Imagenes Aleatorias


En el archivo app.component.ts , crearemos la funcion que nos permitirá generar la imagen aleatoria.

5º --> Realizamos un diccionario que recoge los elementos de la carpeta assets , que en este caso son las imagenes que serán generadas de forma aleatoria : 'images = [
    'assets/cr7.jpg',
    'assets/mbappe.jpg',
    'assets/davies.jpg',
    'assets/jude.jpg',
  ];'

 6º --> Una vez tenemos el diccionario , vamos a crear una función para que cada vez que se haga un f5 a la web , esta cambié la imagen : 

  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  } 


 ## Inserción de la imagen aleatoria : 

 7º --> Es muy importante el uso de la doble llave ya que por asi decirlo , establece la conexión del TypeScript con la plantilla HTML : <img src="{{ randomImage }}" alt="Foto aleatoria">

 Si desea más información,pongase en contacto conmigo : daniel.melerovilches.23@campusfp.es. 


