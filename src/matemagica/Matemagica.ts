import {ErrorMessages} from "../errors/ErrorMessages.enum"

export class Matemagica {
    public x: number
    public y: number

    public getSum() {
        return this.Sum()
    }

    public getSub() {
        return this.Sub()
    }

    public getMultiply() {
        return this.Multiply()
    }

    public getDivision() {
        return this.Division()
    }

    public setX(x: Number) {
        if (typeof x != 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.x = x
    }

    public setY(y: Number) {
        if (typeof y != 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.y = y
    }

    public getX() {
        return console.log(this.x)
    }

    public getY() {
        return console.log(this.y)
    }

    private Sum() {
        return this.x + this.y
    }

    private Sub() {
        return this.x - this.y
    }

    private Multiply() {
        return this.x * this.y
    }

    private Division() {
        return this.x / this.y
    }
}

export default Matemagica