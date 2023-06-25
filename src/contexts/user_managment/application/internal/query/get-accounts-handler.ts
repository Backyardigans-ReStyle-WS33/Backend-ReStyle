import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetAccountsQuery} from "../../../domain/model/queries/get-accounts.query";
import {Inject} from "@nestjs/common";
import {AccountRepository} from "../../../infraestructure/repositories/account.repository";

@QueryHandler(GetAccountsQuery)
export class GetAccountsHandler implements IQueryHandler<GetAccountsQuery> {
    constructor(
        @Inject('ACCOUNT_REPOSITORY')
        private readonly repository: AccountRepository,
    ) {}

    async execute(query: GetAccountsQuery) {
        return await this.repository.findAll();
    }
}
