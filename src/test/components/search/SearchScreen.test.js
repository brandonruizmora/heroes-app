import '../../../setupTests';
import { shallow, mount } from 'enzyme';
import { SearchScreen } from '../../../components/search/SearchScreen';
import { MemoryRouter } from 'react-router';

describe('Pruebas en <SearchScreen />', () => {

    const history = {
        push: jest.fn()
    }

    const wrapper = mount(
        <MemoryRouter>
            <SearchScreen history={history} />

        </MemoryRouter>
    )

    test('Debe de renderizarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero...');

    });

    test('Debe de mostrar a batman y el valor del input en el query string', () => {
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen history={history} />

            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });

    test('Debe de mostrar error si no se encuentra el hero', () => {
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchScreen history={history} />

            </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').exists()).toBe(true);
    });

    test('Debe de llamar el push del history', () => {
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter>
                <SearchScreen history={history} />

            </MemoryRouter>
        ); 

        wrapper.find('input').simulate('change', {
            target: {
                name: 'hero',
                value: 'batman'
            }
        });
        wrapper.find('form').simulate('submit');

        expect(history.push).toHaveBeenCalledWith('?q=batman');


    });
    


});
