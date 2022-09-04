export class Personne {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    path: string;
    cin: string;
    job: string;

    constructor(
        id: number = 0,
        firstName: string = '',
        lastName: string = '',
        age: number = 0,
        path: string = '',
        cin: string = '',
        job: string = ''
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.path = path
        this.cin = cin
        this.job = job
    }




}