import {Injectable} from "@nestjs/common";
import {CommandBus} from "@nestjs/cqrs";
import {CreateAccountDto} from "../../../interfaces/rest/dto/create-account.dto";
import {CreateAccountCommand} from "../../../domain/model/commands/create-account.command";

@Injectable()
export class AccountCommandService {
    constructor(private commandBus: CommandBus) {}

    async createAccount(createAccountDto: CreateAccountDto) {
        return this.commandBus.execute(
            new CreateAccountCommand(
                createAccountDto.name,
                createAccountDto.lastName,
                createAccountDto.phone
            )
        )
    }
}