import {IQueryHandler, QueryHandler} from "@nestjs/cqrs";
import {GetUsersQuery} from "../../../domain/model/queries/get-users.query";
import {Inject} from "@nestjs/common";
import {UserRepository} from "../../../infraestructure/repositories/user.repository";

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly repository: UserRepository,
    ) {}

    async execute(query: GetUsersQuery) {
        return await this.repository.findAll();
    }
}