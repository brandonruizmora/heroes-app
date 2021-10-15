import React from 'react';
import { HeroList } from '../heroes/HeroList';

export const DcScreen = () => {
    return (
        <div>
            <h1 className="fw-bold text-blue text-shadow-white">DC Screen</h1>
            <hr />
            <HeroList publisher="DC Comics" />
        </div>
    )
}
