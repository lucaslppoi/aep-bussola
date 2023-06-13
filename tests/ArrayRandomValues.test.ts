import {describe, expect, test} from '@jest/globals';
import {Produto} from '../src/arrayRand/Produto'
import {ArrayRandomValues} from '../src/arrayRand/ArrayRandomValues'

const produtos:Array<Produto> = [
    new Produto('Caneca', 10, 3),
    new Produto('Cabo', 27.39, 10),
    new Produto('Tenis', 399, 2),
    new Produto('Celular', 1999.89, 0)
]

describe('Array random values', () => {

    test('Adicionar produto ao array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        const produto = new Produto('Oculos', 429.00, 1)
        arrayRandomValues.addProductToArray(produto)

        const procutsArrayLength = arrayRandomValues.getProductsArrayLength()
        expect(procutsArrayLength).toBeGreaterThan(0)
    })

    test('Gerar numero aleatorio', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomNumber = arrayRandomValues.generateRandomNumber()
        expect(typeof randomNumber).toBe('number')
    })

    test('Pegar produto aleatorio do array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomProduct = arrayRandomValues.getRandomProductFromArray()
        expect(randomProduct).toBeInstanceOf(Produto)
    })
})