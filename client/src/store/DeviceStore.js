import { makeAutoObservable } from "mobx";
import SamsungS21_64jpg from '../img/SamsungS21_64jpg.jpg'
import SamsungS21_128jpg from '../img/SamsungS21_128jpg.jpg'
import Iphone13_64 from '../img/Iphone13_64.jpg'
import Iphone13_128 from '../img/Iphone13_128.jpg'
import Iphone13_256 from '../img/Iphone13_256.jpg'

export default class DeviceStore {

    constructor() {
        this._types = [
            {id: 1, name: 'Смартфон'},
            {id: 2, name: 'Планшет'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices =[
            {id:1, name:'Iphone 13 64gb', state: 'New', img: Iphone13_64, price: '70000'},
            {id:2, name:'Iphone 13 128gb', state: 'New', img: Iphone13_128, price: '77000'},
            {id:3, name:'Iphone 13 256gb', state: 'New', img: Iphone13_256, price: '85000'},
            {id:4, name:'Samsung S21 64gb', state: 'New', img: SamsungS21_64jpg, price: '73000'},
            {id:5, name:'Samsung S21 128gb', state: 'New', img: SamsungS21_128jpg, price: '80000'}

        ]
        this._selectedType ={}
        this._selectedBrand ={}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setBrands(brands) {
        this._brands = brands
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setDevices(devices) {
        this._devices = devices
    }

    get devices() {
        return this._devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}