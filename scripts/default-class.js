export default class {
    constructor(name) {
        this.name = name;
    }

    sayHi(namaPanggilan) {
        console.info(`Hi, my name is ${this.name}, my short name ${namaPanggilan}`);
    } 
}