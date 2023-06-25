import {QueryBus} from "@nestjs/cqrs";
import {GetAccountsQuery} from "../../../domain/model/queries/get-accounts.query";

export class AccountQueryService {
    constructor(private queryBus: QueryBus) {}

    async getAccounts() {
        return this.queryBus.execute(new GetAccountsQuery());
    }
}