import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {AggregateRoot} from "@nestjs/cqrs";
import {AccountCreatedEvent} from "../events/account-created.event";

@Entity('accounts')
export class Account extends AggregateRoot {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    creationDate: Date;

    @Column()
    status: string;

    @Column()
    numberPhone: string;

    onCreation() {
        this.creationDate = new Date();
        this.status = 'active';
        this.apply(new AccountCreatedEvent(this.id));
    }

}
