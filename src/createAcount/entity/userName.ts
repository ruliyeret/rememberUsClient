import {Deceased} from "./deceeased";

export class User{

    public setDeceased(deceased:Deceased){
        this.deceased = deceased;
    }
    constructor(name:string,password:string,email:string,deceased,priority,gender?,birthday?,  phone? ){
        this.id = 0;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.deceased = deceased;
        this.priority = priority;
        this.password = password;
        this.phone = phone;
    }
    id;
    name:string;
    gender:string;
    birthday:Date;
    email:string;
    deceased:Deceased;
    priority:number;
    password:string;
    phone:string;

}