import {AggregateRoot} from "@nestjs/cqrs";
import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity('proposals')
export class Proposal extends AggregateRoot {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
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
        this.creationDate = new Date();
        this.status = 'In progress';
    }
}