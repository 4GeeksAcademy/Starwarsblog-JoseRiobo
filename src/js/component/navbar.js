import React, { useActionState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
	const { actions } = useContext(Context);
	const { store } = useContext(Context);

	console.log(store.myFavouriteCards);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img style={{ maxWidth: "250px" }} src="https://m.media-amazon.com/images/I/81EQuc1SHkL._AC_UF894,1000_QL80_.jpg" /></span>
			</Link>
			<div className="ml-auto">

				<div class="dropdown" >
					<button class="btn btn-warning dropdown-toggle me-5 ps-5 pe-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						My Favourite Cards
					</button>
					<ul className="dropdown-menu margin w-75">
						{store.myFavouriteCards.map((fav, index) => (
						<li key={index} className="d-flex justify-content-between align-items-center px-3 py-2 w-100">
							<span>{fav}</span> 
							<button class="btn btn-danger"  onClick={(event) => {event.stopPropagation(); 
							actions.removeFavourites(index);
						  }}>🗑️</button></li>
					))}
				
					</ul>
				</div>
			
			</div>
		</nav>
	);
};
