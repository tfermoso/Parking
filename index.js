"use strict"
/**
 * @file Aplicación para la gestión de un parking
 * @author Tomás Fermoso
 * @version 0.1
 */

/**
 * @class Parking
 * @property {number} capacidad Número de coches que puede haber en el parking
 * @prop {Array} tunelLavado Lista de coches para lavar
 * @prop {Array} coches Lista de coches en el parking
 */
class Parking{
    /**
     * @param {number} capacidad Número de coches que entrar en el parking 
     */
    constructor(capacidad){
        this.capacidad=capacidad;
        this.tunelLavado=[];
        this.coches=[];
    }
    /**
     * @description Método para meter un coche en el parking
     * @param {Object} coche coche que metemos en el parking
     * @returns {number} -1 parking lleno, 0 ok 
     */
    meterCoche(coche){
        if(this.capacidad>0){
            this.capacidad--;
            if(coche.lavado==true){
                this.tunelLavado.push(coche.matricula);
            }else{
                this.coches.push(coche.matricula)
            }
            return 0;
        }else{
            return -1;
        }
       
    }

}

let parking = new Parking(2);
let coche1={
    matricula:"G3456745",
    lavado: true
}
console.log(parking.meterCoche(coche1));
console.log(parking)