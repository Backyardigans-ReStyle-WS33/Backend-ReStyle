import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {AccountCreatedEvent} from "../../../domain/model/events/account-created.event";

@EventsHandler(AccountCreatedEvent)
export class AccountCreatedHandler implements IEventHandler<AccountCreatedEvent> {
    handle(event: AccountCreatedEvent) {
        console.log(`AccountCreatedHandler: ${event}`);
    }

}