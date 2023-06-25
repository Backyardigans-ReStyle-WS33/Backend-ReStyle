import {AggregateRoot} from "@nestjs/cqrs";
import {Column,Entity,PrimaryGeneratedColumn} from "typeorm";
import {CustomerCompleteName} from "../value-objects/customer-complete-name.value-object";

@Entity('projects_information')
export class ProjectInformation extends AggregateRoot {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column(()=>CustomerCompleteName)
    customerName:CustomerCompleteName;
    @Column()
    customerEmail: string;
    @Column()
    customerPhone: string;

    constructor() {
        super();
    }
}

