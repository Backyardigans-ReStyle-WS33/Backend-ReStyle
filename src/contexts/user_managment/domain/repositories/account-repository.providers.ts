import {DataSource} from "typeorm";
import {Account} from "../model/aggregates/account.entity";

export const accountRepositoryProviders = [
    {
        provide: 'ACCOUNT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Account),
        inject: ['DATA_SOURCE'],
    },
];
