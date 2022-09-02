//const express = require('express') FORMA VIEJA DE IMPORTAR
import express from 'express' //Forma moderna

//TRAIGO LIBRERIA QUE CONTROLA VARIABLES DE ENTORNO
import * as dotenv from 'dotenv'
import { Console } from 'console'
dotenv.config()
console.log(process.env.PORT)

//app es la variable que almacena todas las funcionalidades de express
const app = express()

//ATENDIENDO PETICIONES Y RESPONDIENDO

//1. PETICION DE TIPO GET para buscar todas las habitaciones
app.get('/hoteles/habitaciones', function (req, res) {
  res.send('Estoy budcando todas las habitaciones')
})


//2. PETICIÓN DE TIPO GET para buscar habitación por ID
app.get('/hoteles/habitacion/:id', function (req, res) {
    res.send('Estoy buscando habitación por id')
  })


//3. PETICIÓN DE TIPO POST para agregar habitacion en BD
  app.post('/hoteles/habitacion', function (req, res) {
    res.send('Estoy agregando una habitación')
  })


//4. PETICIÓN DE TIPO PUT para editar una habitación
  app.put('/hoteles/modificarhabitacion', function (req, res) {
    res.send('Estoy editando la información de la habitación')
  })

//ENCENDIENDO EL SERVIDOR EN EL PUERTO 3000
app.listen(process.env.PORT,function(){
    console.log("SERVIDOR ENCENDIDO")
})