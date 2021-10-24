export interface ILogin {
    username: string;
    password: string;
}

export interface IUserData {
    id: number;
    name: string;
    roles: Array<string>
    token: string;
    type: string;
    username: string;
}