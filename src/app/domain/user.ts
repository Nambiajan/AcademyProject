import { Profile } from './profile';

export class User {
    userName: string;
    gender: string;
    profile: Profile = null;
    isTCAccepted: boolean;
    constructor() {
    }
}
