import '../../setupTests';
import { shallow, mount } from 'enzyme';
import { Navbar } from '../../components/ui/Navbar';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router';
import { types } from '../../types/types';

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        replace: jest.fn(),
        listen: jest.fn(),
        createHref: jest.fn()

    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Brandon'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Brandon');

    });

    test('Debe de llamar el logout y usar history', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
    });


});
