import { UserModel } from "./user.model";

export class LoggedUserModel{
    token:string ='';
    user: UserModel = {
        id:'',
        name:'',
        email:'',
        role:'',
        isLogged: false
    }
}