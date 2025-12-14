export type Geo = {
    lat: number;
    lng: number;
}
export type Company = {
    name: string;
    catchPhrase?: string;
    bs?: string;
}
export type Address = {
    street: string;
    suite?: string;
    city?: string;
    zipcode: string;
    geo?: Geo;
}
export type UserType = {
    id: number;
    name: string;
    username: string;
    address: Address;
    email: string;
    phone: string;
    website?: string;
    company: Company;
}


