import {QueryBus} from "@nestjs/cqrs";
import {GetUsersQuery} from "../../../domain/model/queries/get-users.query";

export class UserQueryService {
    constructor(private queryBus: QueryBus) {}

    async getUsers() {
        return this.queryBus.execute(new GetUsersQuery());
    }
}