import { User } from '../entity/User';
import {IProcessor} from 'typeorm-fixtures-cli';

export default class UserProcessor implements IProcessor<User> {
    postProcess(name: string, object: { [key: string]: any }): void {
        object.name = `${object.firstName} ${object.lastName}`;
    }
}
