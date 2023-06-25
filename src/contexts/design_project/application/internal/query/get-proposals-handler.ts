import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetProposalQuery} from "../../../domain/model/queries/get-proposal.query";
import {Inject} from "@nestjs/common";
import {ProposalRepository} from "../../../infraestructure/repositories/proposal-repository.providers";

@QueryHandler(GetProposalQuery)
export class GetProposalHandler implements IQueryHandler<GetProposalQuery> {
    constructor(
        @Inject('PROPOSAL_REPOSITORY')
        private readonly repository: ProposalRepository,
    ) {}

    async execute(query: GetProposalQuery) {
        return await this.repository.findAll();
    }
}