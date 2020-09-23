type healthType = 'Good' | 'Moderate' | 'Bad'; 
export interface petConfig {
    petFamily:string,
    country: string;
    age: number;
    health: healthType;
    color: string;
};

export class Availability{
    pets:Array<petConfig>;
    
    constructor(){
        this.pets=[];
    }

    storePetDetails(petObj: petConfig){
        this.pets.push(petObj);
    }

    getPetDetails() :Array<petConfig>{
        return this.pets;
    }

}

export interface requestConfig{
    petType:string,
    petCount: number
}

export class PetRequest{
    enquiries:Array<requestConfig>

    constructor(){
        this.enquiries = [];
    }

    addEnquiry(enqObj:requestConfig){
        this.enquiries.push(enqObj);
    }

    getEnquiry():Array<requestConfig>{
        return this.enquiries;
    }
}