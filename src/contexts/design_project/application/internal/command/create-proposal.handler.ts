import {CommandHandler, EventPublisher, ICommandHandler} from "@nestjs/cqrs";
import {CreateProposalCommand} from "../../../domain/model/commands/create-proposal.command";
import {Inject} from "@nestjs/common";
import {ProposalRepository} from "../../../infraestructure/repositories/proposal-repository.providers";
import {Proposal} from "../../../domain/model/aggregates/proposal.entity";

@CommandHandler(CreateProposalCommand)
export class CreateProposalHandler implements ICommandHandler<CreateProposalCommand> {
    constructor(
        @Inject('PROPOSAL_REPOSITORY')
        private repository: ProposalRepository,
        private publisher: EventPublisher,
    ) {}

    async execute(command: CreateProposalCommand) {
        const { name, description,price } = command;
        let proposal = new Proposal();
        proposal.name = name;
        proposal.description = description;
        proposal.price = price;
        proposal = this.publisher.mergeObjectContext(
            await this.repository.persist(proposal),
        );
        proposal.onCreation();
        proposal.commit();
    }
}