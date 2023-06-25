export class CreateAccountCommand {
    constructor(
        public readonly name: string,
        public readonly lastName: string,
        public readonly phone: string,
    ) {}
}