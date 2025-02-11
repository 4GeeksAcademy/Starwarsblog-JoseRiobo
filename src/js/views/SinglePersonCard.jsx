import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export const SinglePersonCard = () => {
    const { idperson } = useParams()


    const [eachCard, setEachCard] = useState({})

    const getPersonData = async () => {
        const response = await fetch(`https://www.swapi.tech/api/people/${idperson}`)
        const data = await response.json()
        setEachCard(data.result.properties)


    }

    useEffect(() => {getPersonData()}, [])

    return (
        <>
            <div className="singleViewCharacter">
                <div className="singleCharacter">
                    <div className="descriptionCharacter">
                        <div className="card mb-3 ms-5 me-5" style={{ maxWidth: "100%" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${idperson}.jpg`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body d-flex ">
                                        <div className="row d-flex justify-content-between">
                                            <div className="1Character">
                                                <h3>Name</h3>
                                                <span>{eachCard.name}</span>
                                            </div>
                                            <div className="1Character">
                                                <h3>Birth</h3>
                                                <span> {eachCard.birth_year}</span>
                                            </div>

                                            <div className="1Character">
                                                <h3>Gender</h3>
                                                <span>{eachCard.gender} </span>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-between">
                                            <div className="1Character">
                                                <h3>Height</h3>
                                                <span>{eachCard.height} </span>
                                            </div>
                                            <div className="1Character">
                                                <h3>Skin </h3>
                                                <span>{eachCard.skin_color} </span>
                                            </div>
                                            <div className="1Character">
                                                <h3>Eye color</h3>
                                                <span>{eachCard.eye_color} </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </>

    )
};