import '../../../setupTests';
import { shallow, mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegacion', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'anonymous'
            }
        });
        expect(history.replace).toHaveBeenCalledTimes(1);
        localStorage.setItem('lastPath', '/dc');
        wrapper.find('button').simulate('click');
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });
    


});
