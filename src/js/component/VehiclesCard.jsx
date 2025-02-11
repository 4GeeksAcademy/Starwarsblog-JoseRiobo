import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const VehiclesCard = ({ urlVehicle, idVehicle }) => {
    const { store, actions } = useContext(Context);
    const [eachCard, setEachCard] = useState({})

    const getVehicleData = async () => {
        const response = await fetch(`${urlVehicle}`)
        const data = await response.json()

        setEachCard(data.result.properties)
    }


    useEffect(() => {
        getVehicleData();

    }, [])


     
    return (
        <>
            <div className="eachCardDisplay " style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${idVehicle}.jpg`} className="card-img-top" style={{ width: "18rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{eachCard.model}</h5>
                    <p className="card-text">Class: {eachCard.vehicle_class} </p>
                    <p className="card-text">Manufacturer: {eachCard.manufacturer}</p>
                    <p className="card-text">Cost: {eachCard.cost_in_credits}</p>


                    <div className="buttons d-flex justify-content-between">
                        <Link to={`/singlevehiclecard/${idVehicle}`}>
                            <div className="btn btn-primary">Learn More!</div>
                        </Link>
                        <div onClick={() => {actions.markFavourites(eachCard.name)}}  className="btn btn-danger ">♡</div>
                    </div>
                </div>
            </div>
        </>

    )
};