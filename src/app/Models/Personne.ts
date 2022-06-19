export class Personne {
    id: string;
    firstName: string;
    lastName: String;
    age: number;
    path: string;
    cin: string;
    job: string;

    constructor(
        id: string = '',
        firstName: string = '',
        lastName: String = '',
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