"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageClass = /** @class */ (function () {
    function ImageClass(id, source, description, location, tagArr, personId) {
        this.tagArr = new Array();
        this.id = id;
        this.source = source;
        this.description = description;
        this.tagArr = tagArr;
        this.location = location;
        this.personId = personId;
    }
    return ImageClass;
}());
var Tag = /** @class */ (function () {
    function Tag(name, locationX, locationY) {
        this.name = name;
        this.locationX = locationX;
        this.locationY = locationY;
    }
    return Tag;
}());
exports.Tag = Tag;
exports.default = ImageClass;
