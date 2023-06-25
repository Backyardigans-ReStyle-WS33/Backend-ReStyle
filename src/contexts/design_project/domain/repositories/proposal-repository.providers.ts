import {DataSource} from "typeorm";
import {Proposal} from "../model/aggregates/proposal.entity";

export const proposalRepositoryProviders = [
    {
        provide: 'PROPOSAL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Proposal),
        inject: ['DATA_SOURCE'],
    },
];