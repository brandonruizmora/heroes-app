import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroId } = useParams();

    const heroeInfo = useMemo(() => getHeroById(heroId), [heroId]);

    if (!heroeInfo) {
        return <Redirect to="/" />
    }

    const handleClickReturn = () => {

        if (history.length <= 2) {
            history.push("/");
        } else {
            history.goBack();
        }

    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroeInfo;

    console.log(superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters)

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={`/assets/heroes/${heroId}.jpg`} className="img-thumbnail rounded animate__animated animate__fadeInLeft" alt={heroId} />
                </div>
                <div className="col-8 animate__animated animate__fadeInRight">
                    <h1>{superhero}</h1>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
                        <li className="list-group-item"><b>publisher:</b> {publisher}</li>
                        <li className="list-group-item"><b>first appearance:</b> {first_appearance}</li>
                    </ul>
                    <h6>Characters</h6>
                    <p>{characters}</p>
                    <button
                        className="btn btn-outline-info"
                        onClick={handleClickReturn}
                    >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
