import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";


export const PeopleCard = ({urlPeople, idPeople}) => {
   const { store, actions } = useContext(Context);
    const[eachCard, setEachCard]= useState({})

    const getDataPeople =  async () => {
        const response = await fetch(`${urlPeople}`)
        const data = await response.json()
       
        
        setEachCard(data.result.properties);
        
    }  


    useEffect(() =>{
            getDataPeople();
            
        }, [])
        
    return(
        <>
        <div className="eachCardDisplay " style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${idPeople}.jpg`} className="card-img-top" style={{width: "18rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{eachCard.name}</h5>
                <p className="card-text">Genero: {eachCard.gender}</p>
                <p className="card-text">Hair color: {eachCard.hair_color}</p>
                <p className="card-text">Color de ojos: {eachCard.eye_color}</p>
                
                
                <div className="buttons d-flex justify-content-between">
                <Link to={`/singlepersoncard/${idPeople}`}>
                <div  className="btn btn-primary">Learn More!</div>
                </Link>
                <div onClick={() => {actions.markFavourites(eachCard.name)}}  className="btn btn-danger ">♡</div>
                </div>
            </div>
        </div>
        </>

    )
};