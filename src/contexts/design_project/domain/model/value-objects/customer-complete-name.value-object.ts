import {Column} from "typeorm";

export class CustomerCompleteName {
    @Column({name: 'first_name'})
    firstName: string;
    @Column({name: 'last_name'})
    lastName: string;
}