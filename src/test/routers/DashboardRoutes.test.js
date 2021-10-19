import '../../setupTests';
import { shallow, mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <DashboardRoutes />', () => {

    test('Debe mostrarse correctamente', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Brandon'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    })

});
