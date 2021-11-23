module.exports = class Account{
    constructor(id, name, number){
        this.id = id;
        this.name = name;
        this.number = number;
    }

    toDisplayString(){
        var ds = this.id + " --- " + this.name + " --- " + this.number;
        console.log(ds);
        return ds;
    }
}