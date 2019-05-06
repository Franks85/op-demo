import {SUPPLIER_REQUEST, SUPPLIER_SUCCESS, SUPPLIER_FAILURE} from './actionTypes'
import { RSAA, getJSON } from 'redux-api-middleware';

const baseUrl = 'https://my-json-server.typicode.com/Franks85/';

export const loadSupplier = () => {
    return {
        [RSAA]: {
            endpoint: `${baseUrl}suppliersMock/suppliers`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            types: [
             SUPPLIER_REQUEST,
             {
                 type: SUPPLIER_SUCCESS,
                 payload: (action, state, res) => {
                    return getJSON(res).then((json) => json.slice(0,5))
                 }
             },
             SUPPLIER_FAILURE
            ]
          }
    }
}