export interface User{
    name: Name;
    email: string;
    picture : Picture;
    dob :  Dob;
    gender : string;
    registred : registred;
    coordinates : coordinates;
    city : string;
    state : string;
    country : string;
    postcode : number;
}
export interface Name{
    title: string;
    first: string;
    last: string;
}
export interface Picture{
    thumbnail: string;
    medium : string;
    large : string;
}
export interface Dob{
    date: number;
    age: number;
}


export interface registred{
    date : number; 
    age : number;
}

export interface coordinates{
    latitude : string;
    longitude : string;
}

export interface Result {
    results: User[];
}