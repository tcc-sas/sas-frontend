export interface ILogin {
    username: string;
    password: string;
}

export interface IUserLoginData {
    id: number;
    name: string;
    roles: Array<string>
    token: string;
    type: string;
    username: string;
}