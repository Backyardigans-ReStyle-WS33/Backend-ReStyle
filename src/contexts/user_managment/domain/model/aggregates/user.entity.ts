import {AggregateRoot} from '@nestjs/cqrs';
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UserCreatedEvent} from '../events/user-created.event';
import {EmailAddress} from "../value-objects/email-address.value-object";
import {JoinColumn} from "typeorm/browser";
import {Account} from "./account.entity";

@Entity('users')
export class User extends AggregateRoot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({unique: true})
  email: EmailAddress;

  @Column()
  status: string;


  @OneToOne(() => Account)
  @JoinColumn()
  account:Account

  constructor(){
    super();
  }

  onCreation() {
    this.apply(new UserCreatedEvent(this.id));
  }

}