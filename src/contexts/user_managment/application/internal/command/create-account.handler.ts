import {CommandHandler, EventPublisher, ICommandHandler} from "@nestjs/cqrs";
import {CreateAccountCommand} from "../../../domain/model/commands/create-account.command";
import {Inject} from "@nestjs/common";
import {AccountRepository} from "../../../infraestructure/repositories/account.repository";
import {Account} from "../../../domain/model/aggregates/account.entity";

@CommandHandler(CreateAccountCommand)
export class CreateAccountHandler implements ICommandHandler<CreateAccountCommand> {
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private repository: AccountRepository,
        private publisher: EventPublisher,
    ) {}

    async execute(command: CreateAccountCommand) {
        const { name, lastName, phone } = command;
        let account = new Account();
        account.name = name;
        account.lastname = lastName;
        account.numberPhone = phone;
        account = this.publisher.mergeObjectContext(
            await this.repository.persist(account),
        );
        account.onCreation();
        account.commit();
    }
}