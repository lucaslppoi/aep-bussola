import {describe, expect, test} from '@jest/globals';
import {ErrorMessages} from '../src/errors/ErrorMessages.enum'
import {Matemagica} from '../src/matemagica/Matemagica'


describe('Operações matematicas', () => {

    test('Deve somar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(1)

        expect(matemagica.getSum()).toBe(2)
    })

    test('Deve subtrair dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(1)
        matemagica.setY(1)

        expect(matemagica.getSub()).toBe(0)
    })


    test('Deve multiplicar dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(2)
        matemagica.setY(3)

        expect(matemagica.getMultiply()).toBe(6)
    })

    test('Deve dividir dois numeros', () => {
        const matemagica = new Matemagica()
        matemagica.setX(4)
        matemagica.setY(2)

        expect(matemagica.getDivision()).toBe(2)
    })

    test('Deve retornar um erro ao informar string no lugar de numero', () => {
        const matemagica = new Matemagica()

        //@ts-ignore
        expect(matemagica.setX('teste1')).toBe(ErrorMessages.INVALID_OPERATION)
        //@ts-ignore
        expect(matemagica.setY('teste2')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})