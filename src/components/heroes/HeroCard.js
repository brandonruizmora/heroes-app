import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id, superhero, publisher, alter_ego, first_appearance, characters
}) => {
    return (
        <div className="card m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={id} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <p className="card-text">{
                            (alter_ego !== characters) && characters
                        }</p>
                        <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                        <Link to={`./hero/${id}`}>
                            Más
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
