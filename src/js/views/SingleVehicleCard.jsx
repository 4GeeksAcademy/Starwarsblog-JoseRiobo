import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const SingleVehicleCard = () => {
    const {idvehicles} = useParams()

    const[eachCard, setEachCard]= useState({})

    const getVehicleData = async() => {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${idvehicles}`)
        const data = await response.json()
        
        setEachCard(data.result.properties);
    }
   
    
    useEffect(() => { getVehicleData()}, [])
    return(
        <>
         <div className="singleViewCharacter">
            <div className="singleCharacter">
            <div className="descriptionCharacter">
            <div className="card mb-3 ms-5 me-5" style={{maxWidth: "100%"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${idvehicles}.jpg`} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body d-flex ">
                        <div className="row d-flex justify-content-between"> 
                            <div className="1Character">
                                <h3>Model:</h3>
                                <span>{eachCard.model}</span>
                            </div>
                            <div className="1Character">
                                <h3>Class:</h3>
                                <span> {eachCard.vehicle_class}</span>
                            </div>
                            
                            <div className="1Character">
                                <h3>Manufacturer:</h3>
                                <span> {eachCard.manufacturer}</span>
                            </div>
                            </div>
                            <div className="row d-flex justify-content-between"> 
                            <div className="1Character">
                                <h3>Cost:</h3>
                                <span>{eachCard.cost_in_credits} </span>
                            </div>
                            <div className="1Character">
                                <h3>Cargo Capacity:</h3>
                                <span>{eachCard.cargo_capacity} </span>
                            </div>
                            <div className="1Character">
                                <h3>Max Atmosphering Speed:</h3>
                                <span>{eachCard.max_atmosphering_speed} </span>
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
}