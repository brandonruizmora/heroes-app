import '../../../setupTests';
import { shallow, mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router';

describe('´Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('Debe de mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']} >
                <HeroScreen history={history} />

            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe mostrar un hero si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route path="/hero/:heroId" component={HeroScreen} />

            </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('Debe de regregar a la pantalla anterior con push', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route 
                path="/hero/:heroId" 
                component={() => <HeroScreen history={history} />} 
                />

            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();

    });

    test('Debe de regregar a la pantalla anterior con go back', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']} >
                <Route 
                path="/hero/:heroId" 
                component={() => <HeroScreen history={history} />} 
                />

            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');

        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).toHaveBeenCalledTimes(0);

    });

    test('Debe de regregar a la pantalla anterior con go back', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spiderfkdmkgrege']} >
                <Route 
                path="/hero/:heroId" 
                component={() => <HeroScreen history={history} />} 
                />

            </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');

    });
    


});
