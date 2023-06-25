import {Inject} from "@nestjs/common";
import {Repository} from "typeorm";
import {Proposal} from "../../domain/model/aggregates/proposal.entity";

export class ProposalRepository{
    constructor(
        @Inject('PROPOSAL_REPOSITORY') private readonly proposalRepository: Repository<Proposal>
    ){}

    async findAll(): Promise<Proposal[]>{
        return await this.proposalRepository.find();
    }

    async persist(proposal: Proposal): Promise<Proposal>{
        return await this.proposalRepository.save(proposal);
    }

    async findOneById(id: string): Promise<Proposal>{
        return await this.proposalRepository.findOneBy({id: id});
    }

    async findOneByNameAndLastName(name: string, lastname:string): Promise<Proposal>{
        return await this.proposalRepository.findOneBy({name: {firstName: name, lastName: lastname}});
    }

}