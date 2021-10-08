import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-8 g-8 animate__animated animate__fadeIn">
            {
                heroes.map(heroe => {
                    return (
                        <HeroCard key={heroe.id} {...heroe} />
                    )
                })
            }
        </div>
    )
}
