"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, password, email, deceased, priority, gender, birthday, phone) {
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
    User.prototype.setDeceased = function (deceased) {
        this.deceased = deceased;
    };
    return User;
}());
exports.User = User;
