import {Body, Controller, Get, Inject, Post} from "@nestjs/common";
import {AccountCommandService} from "../application/internal/services/account-command.services";
import {AccountQueryService} from "../application/internal/services/account-query.service";
import {CreateAccountDto} from "./rest/dto/create-account.dto";

@Controller('/api/v1/accounts')
export class AccountsController {
    @Inject()
    private readonly accountCommandService: AccountCommandService;

    @Inject()
    private readonly accountQueryService: AccountQueryService;

    @Get()
    async getAccounts() {
        return await this.accountQueryService.getAccounts();
    }

    @Post()
    async createAccount(@Body() dto: CreateAccountDto) {
        return this.accountCommandService.createAccount(dto);
    }
}