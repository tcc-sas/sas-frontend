import { IConstants } from "./models/constants.models";

export class Constants {

    public static funcionarios: IConstants = {
        name: 'Funcionarios',
        route: '',
        fields: [
            {id: 1, name: 'ID', apiObjectField: 'userId', genericType: 'number', isTableField: false, isFilterField: false, isObject: false, idObject: '', fieldObject: ''},
            {id: 1, name: 'Nome', apiObjectField: 'name', genericType: 'string', isTableField: true, isFilterField: true, isObject: false, idObject: '', fieldObject: ''},
            {id: 1, name: 'Usuario', apiObjectField: 'username', genericType: 'string', isTableField: true, isFilterField: false, isObject: false, idObject: '', fieldObject: ''},
            {id: 1, name: 'Senha', apiObjectField: 'password', genericType: 'string', isTableField: false, isFilterField: false, isObject: false, idObject: '', fieldObject: ''},
            {id: 1, name: 'Nivel de permissão', apiObjectField: 'roleName', genericType: 'string', isTableField: true, isFilterField: false, isObject: false, idObject: '', fieldObject: ''},
        ]
    }    

    
}