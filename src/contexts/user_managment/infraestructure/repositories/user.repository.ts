import {Injectable,Inject} from "@nestjs/common";
import {User} from "../../domain/model/aggregates/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async persist(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOneBy({ email: { address: email } });
    }

    async findOneById(id: string): Promise<User> {
        return await this.userRepository.findOneBy({ id: id });
    }
}