# Ratatouille App

Esta es una aplicación web llamada Ratatouille que te permite administrar y visualizar recetas de cocina. La aplicación cumple con los siguientes requisitos y características:

## Requisitos

1. Utiliza el hook useState para controlar el contenido del formulario de la página.
2. Utiliza el hook useEffect para guardar los datos del formulario en el almacenamiento local (localStorage) cada vez que cambien.
3. Utiliza los métodos reduce y map para renderizar una lista de características de la página de manera dinámica.
4. Utiliza el almacenamiento local (localStorage) para almacenar los datos del formulario de manera persistente.

## Estructura de la página

La página cuenta con la siguiente estructura:

1. Un encabezado con el título "Ratatouille" que muestra el nombre de la aplicación.
2. Un formulario de contacto que consta de los siguientes campos:
   - Nombre: Permite al usuario ingresar su nombre.
3. Una lista de características de la página que se generan dinámicamente a partir de un array de características.
4. Un botón de envío para enviar el formulario.
5. Una alerta en pantalla que se muestra después de enviar el formulario, mostrando los datos ingresados por el usuario.

![image](https://github.com/RichyRed/AppRecetasReact/assets/84047015/925c12cd-974e-4751-b0f1-97415642c520)


## Componentes

La aplicación se compone de los siguientes componentes:

1. **Header**: Componente que muestra el encabezado de la página con el título "Ratatouille".
2. **Formulario**: Componente que contiene el formulario de contacto y maneja el estado de los campos del formulario utilizando el hook useState. Al enviar el formulario, los datos se guardan en el almacenamiento local utilizando el hook useEffect.
3. **RecetaCard**: Componente que muestra una tarjeta de receta con una imagen y un texto descriptivo. No se utiliza en esta aplicación, pero puede ser útil en futuras actualizaciones.
4. **Modal**: Componente que muestra una tarjeta blanca en la parte inferior de la página con el número total de recetas. Utiliza el método reduce para calcular el total de recetas a partir de un array de recetas.
5. **App**: Componente principal que renderiza todos los demás componentes y gestiona el estado global de la aplicación utilizando el hook useState. Renderiza la lista de características utilizando el método map y utiliza el almacenamiento local (localStorage) para guardar y recuperar los datos del formulario.

## Instalación y ejecución

1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias necesarias:

* npm install
  
4. Una vez finalizada la instalación, ejecuta el siguiente comando para iniciar la aplicación:

* npm run dev

5. Abre tu navegador y  para ver la aplicación en funcionamiento.

¡Disfruta de tu experiencia culinaria con Ratatouille!

## Link del video 
* https://drive.google.com/drive/folders/166LmS1vwZ6rUglZci7b4hykii-6cbRCy?usp=sharing





