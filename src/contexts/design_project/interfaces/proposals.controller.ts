import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {ProposalCommandService} from "../application/internal/services/proposal-command.service";
import {ProposalQueryService} from "../application/internal/services/proposal-query.service";
import {CreateProposalDto} from "./rest/dto/create-proposal.dto";

@Controller('/api/v1/proposals')
export class ProposalsController {
    @Inject()
    private readonly proposalCommandService: ProposalCommandService;

    @Inject()
    private readonly proposalQueryService: ProposalQueryService;

    @Get()
    async getProposals() {
        return await this.proposalQueryService.getProposals();
    }

    @Post()
    async createProposal(@Body() dto: CreateProposalDto) {
        return this.proposalCommandService.createProposal(dto);
    }
}