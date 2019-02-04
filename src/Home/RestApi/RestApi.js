
export class RestApi{

    static onSubmitEditInfo(id,description){
        fetch('http://192.168.0.125:3000/description', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                photoId: id,
                photoDescription: description,
            }),
        });

    }


    static getGalleryFromDb(personId){
        return(  fetch('http://192.168.0.125:3000/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personId: personId
            })
        }).then((response) => response.json())
            .then((responseJson) => {return responseJson}));
    }

    static forgetUser(email){
        return(fetch('http://192.168.0.125:3000/login/forgetUser/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: "ff",
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("this is the respone from db: " + responseJson);
            })
            .catch((error) =>{
                console.error(error);
            }));
    }

    static insertNewCostumer(user, deceased){
        console.log( " insert new costumner nfunction");
        return(fetch('http://192.168.0.125:3000/newUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: user,
                deceased: deceased,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log("this is the respone from db: " + responseJson);
                return responseJson;

            })
            .catch((error) =>{

                console.error(error);
            }));
        return [];

    }
    static userLogin(username,password){
      return(fetch('http://192.168.0.125:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {

                console.log("this is the respone from db: " + responseJson);
                return responseJson;

            })
            .catch((error) =>{

                console.error(error);
            }));
        return [];
    }
    static onSubmitLocation(id,location){
        fetch('http://192.168.0.125:3000/city', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                photoId: id,
                photoLocation: location,
            }),
        });
    }

    static onSubmitTags(id,person,locationX,locationY){
        fetch('http://192.168.0.125:3000/addTagPerson', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                photoId: id,
                person: person,
                locationX:locationX,
                locationY:locationY
            }),
        });

    }


    static uploadImage(image){
        fetch('http://192.168.0.125:3000/addImage', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: image,
            }),
        });

    }
}