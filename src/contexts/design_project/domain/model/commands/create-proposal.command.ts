export class CreateProposalCommand{
    constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly price:number,

    ) {
    }
}