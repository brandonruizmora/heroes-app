import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const initialForm = {
        hero: q,
    }

    const [formValues, handleInputChange] = useForm(initialForm);

    const { hero } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="hero"
                            value={hero}
                            onChange={handleInputChange}
                            className="form-control mb-3"
                            placeholder="Find your hero"
                            autoComplete="off"
                        />
                        <div class="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-outline-success"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') &&
                        <div className="alert alert-info" role="alert">
                            Search a hero...
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger" role="alert">
                            There is any hero with {hero}
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
