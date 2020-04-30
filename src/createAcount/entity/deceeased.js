"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deceased = /** @class */ (function () {
    function Deceased(name, birthday, demiseDate, gender) {
        this.birthday = null;
        this.demiseDate = null;
        this.gender = null;
        this.name = name;
        this.birthday = new Date();
        this.demiseDate = "";
        this.gender = gender;
        this.id = 0;
    }
    return Deceased;
}());
exports.Deceased = Deceased;
