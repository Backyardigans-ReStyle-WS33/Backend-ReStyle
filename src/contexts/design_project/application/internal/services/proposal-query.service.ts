import {QueryBus} from "@nestjs/cqrs";
import {GetProposalQuery} from "../../../domain/model/queries/get-proposal.query";

export class ProposalQueryService {
    constructor(private queryBus: QueryBus) {}

    async getProposals() {
        return this.queryBus.execute(new GetProposalQuery());
    }
}