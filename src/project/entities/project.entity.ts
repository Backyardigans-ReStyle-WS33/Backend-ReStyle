import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {ProjectStatus} from "../enums/project.status";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type:"int",nullable:false})
    public user_id: number;

    @Column({type:"int",nullable:false})
    public remodeler_id: number;

    @Column({
        type: 'enum',
        enum: ProjectStatus,
        default: ProjectStatus.NotStartedYet,
    })
    public status: ProjectStatus;
}
