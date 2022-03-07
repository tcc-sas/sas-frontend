import { IConstants } from '../../shared/models/constants.models';

export class Constants {
  public static users: IConstants = {
    name: 'Usuários',
    infoText: 'Usuários cadastrados!',
    route: 'usuario',
    fields: [
      { id: 1, name: 'ID',                 apiField: 'userId',     isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 2, name: 'Nome',               apiField: 'name',       isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 3, name: 'Usuario',            apiField: 'username',   isTableField: true,  tableType: '',  isFilterField: false, filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 4, name: 'Senha',              apiField: 'password',   isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 5, name: 'Nivel de permissão', apiField: 'roles',      isTableField: true,  tableType: '',  isFilterField: false, filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name', },
      { id: 6, name: 'Unidade',            apiField: 'cras',       isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name', },
    ],
  };

  public static beneficiary: IConstants = {
    name: 'Beneficiários',
    infoText: 'Beneficiários cadastrados!',
    route: 'beneficiarios',
    fields: [
      { id: 1, name: 'ID',                 apiField: 'userId',     isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 2, name: 'Nome',               apiField: 'name',       isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 3, name: 'Usuario',            apiField: 'username',   isTableField: true,  tableType: '',  isFilterField: false, filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 4, name: 'Senha',              apiField: 'password',   isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 5, name: 'Nivel de permissão', apiField: 'roles',      isTableField: true,  tableType: '',  isFilterField: false, filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name', },
      { id: 6, name: 'Unidade',            apiField: 'cras',       isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name', },
    ],
  };
}


