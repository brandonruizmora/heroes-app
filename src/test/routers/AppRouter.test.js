import '../../setupTests';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar login cuando no esta autenticado', () => {
        
        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />

            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar componente marvel si esta autenticado', () => {
        
        const contextValue = {
            user: {
                name: 'Brandon',
                logged: true
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />

            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

    });
    
    
})
