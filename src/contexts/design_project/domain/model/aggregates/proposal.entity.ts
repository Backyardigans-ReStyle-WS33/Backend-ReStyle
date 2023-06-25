import {AggregateRoot} from "@nestjs/cqrs";
import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";
import {ProposalCreatedEvent} from "../events/proposal-created.event";
import {CustomerCompleteName} from "../value-objects/customer-complete-name.value-object";

@Entity('proposals')
export class Proposal extends AggregateRoot {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: CustomerCompleteName;
    @Column()
    description: string;
    @Column()
    price: number;
    @Column()
    status: string;
    @Column()
    creationDate: Date;

    constructor() {
        super();

    }
    onCreation() {
        this.creationDate = new Date();
        this.status = 'In progress';
        this.apply(new ProposalCreatedEvent(this.id));
    }
}