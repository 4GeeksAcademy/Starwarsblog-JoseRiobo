import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/PeopleCard.jsx";
import { VehiclesCard } from "../component/VehiclesCard.jsx";
import { PlanetsCard } from "../component/PlanetsCard.jsx";


export const Home = () => {
	const{store, actions}= useContext(Context)
	
	const[myFavourites, setMyFavourites] = useState([]);

	
	
	return(
	 <>
	 	<div className="overflow-auto g-2 mb-5 ms-5 me-5 bg-white p-4 shadow rounded">
		<h3>Characters</h3>
			<div className="text-center mt-5 d-flex ">
				{store.peopleData.map((people) => {
				return (
					<PeopleCard urlPeople = {people.url} idPeople={people.uid}	/>
			)})}
			</div>
		</div>
			
		<div className="overflow-auto g-2 mb-5 ms-5 me-5 bg-white p-4 shadow rounded">
		<h3>Vehicles</h3>
			<div className="text-center mt-5 mb-5 d-flex">
						{store.vehiclesData.map((vehicle) => {
						return (
					<VehiclesCard urlVehicle = {vehicle.url} idVehicle={vehicle.uid}	/>
			)})}
			</div>
		</div>
			
		<div className="overflow-auto g-2 ms-5 me-5 bg-white p-4 shadow rounded">
		<h3>Planets</h3>
			<div className="text-center mt-5 d-flex">
						{store.planetsData.map((planet) => {
						return (
					<PlanetsCard urlPlanet = {planet.url} idPlanet={planet.uid}	/>
			)})}
			</div>
		</div>
		
	</>
	)
};
