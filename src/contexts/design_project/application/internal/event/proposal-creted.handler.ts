import {EventsHandler,IEventHandler} from "@nestjs/cqrs";
import {ProposalCreatedEvent} from "../../../domain/model/events/proposal-created.event";

@EventsHandler(ProposalCreatedEvent)
export class ProposalCreatedHandler implements IEventHandler<ProposalCreatedEvent> {
    handle(event: ProposalCreatedEvent) {
        console.log(`ProposalCreatedHandler: ${event}`);
    }
}