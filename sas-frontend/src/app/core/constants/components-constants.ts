import { IConstants } from '../../shared/models/constants.models';

export class Constants {
  public static users: IConstants = {
    name: 'Usuários',
    infoText: 'Usuários cadastrados!',
    route: 'usuario',
    fields: [
      { id: 1, name: 'ID',                 apiField: 'id',         isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
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
    route: 'beneficiario',
    fields: [
      { id: 1,  name: 'ID',                 apiField: 'beneficiaryId',  isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 2,  name: 'Nome',               apiField: 'name',           isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 3,  name: 'RG',                 apiField: 'rg',             isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 4,  name: 'CPF',                apiField: 'cpf',            isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',     },
      { id: 5,  name: 'Unidade',            apiField: 'cras',           isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name', },
      { id: 6,  name: 'Telefone',           apiField: 'phoneNumber',    isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 7,  name: 'CEP',                apiField: 'zipCode',        isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 8,  name: 'Endereço',           apiField: 'address',        isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 9,  name: 'Nº',                 apiField: 'houseNumber',    isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 10, name: 'Bairro',             apiField: 'district',       isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 11, name: 'Cidade',             apiField: 'city',           isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
      { id: 12, name: 'Data de nascimento', apiField: 'birthDate',      isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',     },
    ],
  };

  public static products: IConstants = {
    name: 'Produtos',
    infoText: 'Produtos cadastrados!',
    route: 'produto',
    fields: [
      { id: 1, name: 'ID',                    apiField: 'id',                isTableField: false, tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',  },
      { id: 2, name: 'Codigo',                apiField: 'productId',         isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',  },
      { id: 3, name: 'Nome Produto',          apiField: 'name',              isTableField: true,  tableType: '',  isFilterField: true,  filterType: 'string', isObject: false, objectId: '',   objectName: '',  },
      { id: 4, name: 'Undidade',              apiField: 'unity',             isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',  },
      { id: 5, name: 'Descrição',             apiField: 'description',       isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',  },
      { id: 6, name: 'Quantidade Disponível', apiField: 'availableQuantity', isTableField: true,  tableType: '',  isFilterField: false, filterType: '',       isObject: false, objectId: '',   objectName: '',  },

    ],
  };

  public static stock: IConstants = {
    name: 'Estoque',
    infoText: 'Produtos cadastrados no estoque!',
    route: 'estoque',
    fields: [
      { id: 1, name: 'ID',          apiField: 'id',        isTableField: false, tableType: '',  isFilterField: false,  filterType: '',       isObject: false, objectId: '',   objectName: '',      },
      { id: 2, name: 'Produto',     apiField: 'product',   isTableField: true,  tableType: '',  isFilterField: true,   filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name',  },
      { id: 3, name: 'Quantidade',  apiField: 'quantity',  isTableField: true,  tableType: '',  isFilterField: false,  filterType: '',       isObject: false, objectId: '',   objectName: '',      },
      { id: 4, name: 'Undidade',    apiField: 'cras',      isTableField: true,  tableType: '',  isFilterField: true,   filterType: 'select', isObject: true,  objectId: 'id', objectName: 'name',  },
    ],
  };
}


