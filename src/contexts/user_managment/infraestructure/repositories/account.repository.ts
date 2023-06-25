import {Injectable,Inject} from "@nestjs/common";
import { FindManyOptions } from 'typeorm';
import {Account} from "../../domain/model/aggregates/account.entity";
import {Repository} from "typeorm";

@Injectable()
export class AccountRepository {
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private accountRepository: Repository<Account>,
    ) {}

    async findAll(): Promise<Account[]> {
        return await this.accountRepository.find();
    }

    async persist(account: Account): Promise<Account> {
        return await this.accountRepository.save(account);
    }

    async findAllByStatus(status: string): Promise<Account[]> {
        const options: FindManyOptions<Account> = {
            where: {
                status: status,
            }
        }
        return await this.accountRepository.find(options);
    }

    async findOneById(id: number): Promise<Account> {
        return await this.accountRepository.findOneBy({ id: id });
    }
}