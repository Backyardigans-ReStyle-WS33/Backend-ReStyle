import {Inject, Injectable} from "@nestjs/common";
import {CommandBus} from "@nestjs/cqrs";
import {CreateProposalDto} from "../../../interfaces/rest/dto/create-proposal.dto";
import {CreateProposalCommand} from "../../../domain/model/commands/create-proposal.command";

@Injectable()
export class ProposalCommandService {
    constructor(private commandBus: CommandBus) {}

    async createProposal(createProposalDto: CreateProposalDto) {
        return this.commandBus.execute(
            new CreateProposalCommand(
                createProposalDto.name,
                createProposalDto.description,
                createProposalDto.price
            )
        )
    }
}