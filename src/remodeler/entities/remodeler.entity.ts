import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {Project} from "../../project/entities/project.entity";

@Entity()
export class Remodeler {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type:"varchar",length:150,nullable:false})
    public name: string;

    @Column({type:"varchar",length:200,nullable:false})
    public address: string;

    public specialties: string[];
    public projects: Project[];
}
