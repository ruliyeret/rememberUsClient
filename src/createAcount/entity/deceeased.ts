
export class Deceased{

    id;
    name;
    birthday = null;
    demiseDate =null;
    gender = null;

    constructor(name?,birthday?,demiseDate?,gender?){
        this.name = name;
        this.birthday = new Date();
        this.demiseDate = "";
        this.gender = gender;
        this.id =0;
    }
}