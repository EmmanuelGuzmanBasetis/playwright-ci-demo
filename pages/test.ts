/* eslint-disable no-console */
/* eslint-disable no-undef */
class Persona {
  nombre: string
  edad: number

  constructor(nombre: string, edad: number) {
    this.nombre = nombre
    this.edad = edad
  }

  presentarse() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
  }
}

const ana = new Persona('Ana', 28)
ana.presentarse()
// Output: Hola, soy Ana y tengo 28 años.
