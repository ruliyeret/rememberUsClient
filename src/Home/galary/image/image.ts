
class ImageClass{
    id:number;
    source:string;
    description:string;
    location:string;
    tagArr:Array<Tag> = new Array<Tag>();
    personId:number;


    constructor(id,source,description,location,tagArr,personId){
        this.id=id;
        this.source = source;
        this.description = description;
        this.tagArr=tagArr;
        this.location = location;
        this.personId = personId;

    }
}

export class Tag {
    name:string;
    locationX:number;
    locationY:number;

    constructor(name: string, locationX: number, locationY: number) {
        this.name = name;
        this.locationX = locationX;
        this.locationY = locationY;
    }

}

export default ImageClass;