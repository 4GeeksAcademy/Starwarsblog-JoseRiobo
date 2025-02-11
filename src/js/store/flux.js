const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peopleData: [],
			vehiclesData: [],
			planetsData: [],
			myFavouriteCards: [], 
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				
				//reset the global store
				setStore({ demo: demo });

			},
			getPeople: async () =>{
				const response = await fetch("https://www.swapi.tech/api/people/")
				const data = await response.json()
			
				
				setStore({peopleData:data.results})
			
			},

			getVehicles: async() =>{
				const response = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await response.json()
				
				
				
				setStore({vehiclesData:data.results})
			},

			getPlanets: async() =>{
				const response = await fetch("https://www.swapi.tech/api/planets/")
				const data = await response.json()
				setStore({planetsData:data.results})
			}, 
			markFavourites: (newFavourite) => {
				const { myFavouriteCards } = getStore();
			
				if (!myFavouriteCards.includes(newFavourite)) {
					const updatedFavourites = [...myFavouriteCards, newFavourite];
			
					setStore({ myFavouriteCards: updatedFavourites });
				} else {
					console.log("This card has already been marked as a favourite");
				}
			},
			removeFavourites: (index) => {
				const { myFavouriteCards } = getStore();
				const updatedFavourites = myFavouriteCards.filter((_, i) => i !== index); 
				
				setStore({ myFavouriteCards: updatedFavourites }); 
				
				
			}
		}
	};
};

export default getState;
