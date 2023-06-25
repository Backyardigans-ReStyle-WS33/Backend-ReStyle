import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {UserCommandService} from "../application/internal/services/user-command.services";
import {UserQueryService} from "../application/internal/services/user-query.service";
import {CreateUserDto} from "./rest/dto/create-user.dto";

@Controller('/api/v1/users')
export class UsersController {
    @Inject()
    private readonly userCommandService: UserCommandService;

    @Inject()
    private readonly userQueryService: UserQueryService;

    @Get()
    async getUsers() {
        return await this.userQueryService.getUsers();
    }

    @Post()
    async createUser(@Body() dto: CreateUserDto) {
        return this.userCommandService.createUser(dto);
    }
}