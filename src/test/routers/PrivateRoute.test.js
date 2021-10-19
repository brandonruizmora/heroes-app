import '../../setupTests';
import { shallow, mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta authenticado y guardar en localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);

    });

    test('Debe de mostrar el componente si esta authenticado y guardar en localStorage', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/marvel');

    });


    test('Debe bloquear el componente si no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>listo!</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBeFalsy();

    });

    

});
