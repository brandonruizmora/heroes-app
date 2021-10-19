import '../../setupTests';
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en AuthReducer', () => {

    test('Debe de retornar el estado por defecto', () => {
        const reducerState = authReducer({logged: false}, {});
        expect(reducerState).toEqual({logged: false});
    });

    test('Debe de autenticar el colocar el name del usuario', () => {
        const state = {
            logged: false
        };
        const action = {
            type: types.login,
            payload: {
                name: 'Brandon'
            }
        };
        const reducerState = authReducer(state, action);
        const expectedState = {
            logged: true,
            name: 'Brandon'
        };
        expect(reducerState).toEqual(expectedState);
    });
    


    test('Debe de borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            name: 'Brandon'
        };
        const action = {
            type: types.logout
        };
        const reducerState = authReducer(state, action);
        const expectedState = {
            logged: false,
        };
        expect(reducerState).toEqual(expectedState);
    });
    
});
