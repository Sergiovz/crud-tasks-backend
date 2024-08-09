# Practica de BACK-END utilizando Node.js y su framework Express junto con una Base de Datos Mysql para  realizar operaciones CRUD de Tareas

## Instalar las dependencias del proyecto
```bash
npm install
```
tambien puede usar

```bash
npm i
```

---

## Este es un apartador para enseñar a contruir tu primer proyecto desde cero
 
**Iniciar el Proyecto** 

```bash
npm init --yes
```
tambien puede usar

```bash
npm init -y
```
* El comando iniciara un proyecto con datos rellenados por defecto.
* Si desea rellenarlo usted, introduzca el comando `npm init` y complete los datos.

* Luego de iniciarlo tendremos acceso al archivo `package.json`.

---

**Instalar el modulo Express**

```
npm install express
```

* Al intalar el modulo express tenemos acceso a la carpeta `node-modules` y al archivo `package-lock.json`.

---

**Instalar las dependencias del Proyecto**
```
npm install [Nombre de las Dependencias]

Ejemplo:
npm install morgan helmet cors  
```
* Con este comando de ejemplo instalamos las dependencias morgan, helmet y cors al proyecto.

---

**Instalar `dotenv` para poder utilizar variables de entorno**
```bash
npm install dotenv
```

---

**Configurar las variables de entorno del Proyecto**
```
PORT =
DB_HOST =
DB_USER =
DB_PORT =
DB_PASSSWORD =
DB_DATABASE =
```
---

**Instalar la dependencia de nodemon para ejecutar con el Servidor**
```
npm install nodemon -D
```
* Nodemon es una dependencia que escucha los cambios en nuestro archivo principal del servidor.
* Al instalar la dependencia, podremos configurar el servidor para que se reinicie automaticamente, al hacer cambios en el archivo principal de Servidor `index.js`.
* El comando `-D` sirve para guardarlo como una dependencia de desarrollador, al momento de instalar la dependencia de nodemon.

* Ejemplo desde el package.json: `devDependencies: { "nodemon": "[version]"}`

---

**Configurar el Script para ejecurtar el Servidor**

* Dentro del archivo `package.json` configurar el Script.
```javascript
"scripts" {
    "start":"node index.js",
    "dev": "nodemon index.js"
}
```
---

**Si no usa Nodemon: Configurar el siguiente comando en el Script del package.json**
```javascript
"scripts": {
    "start": "node index.js",
    "dev": " node --watch app.js"
}
``` 

- Esto le permitira utilizar dentro del `Visual Studio Code` una herramienta incorporada para que escuche los cambios del servidor, sin necesidad de instalar otras dependencias.

---

**Ejecutar el Servidor como desarrollador**
```
npm run dev
```
* Al ejecutar el comando, el servidor se ejecutara como desarrollo.
