export interface User{
    name: Name;
    email: string;
    picture : Picture;
    dob :  Dob;
    gender : string;
    registred : Registred;
    coordinates : Coordinates;
    city : string;
    state : string;
    country : string;
    postcode : Number;
    login : Login;
    timezone:Timezone;
    phone : Number;
    cell : Number ;
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


export interface Registred{
    date : number; 
    age : number;
}

export interface Coordinates{
    latitude : string;
    longitude : string;
}

export interface Login{
    uuid : string; 
    username : string;

}
export interface Timezone{
    offset: string;
    description : string;

}
export interface Result {
    results: User[];
}