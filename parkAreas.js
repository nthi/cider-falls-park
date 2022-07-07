import { getParkAreas } from "./database.js";
//import function from services
//
import { getAllAreaServices } from "./services.js";

// Responsibility: create html for the park areas panel of the site
// 	Functions: import and call getParkAreas()
// 	Functions: for loop similar to dogwalkers or coffeeshop
	
const parkAreas = getParkAreas()

export const ParkAreaList = () => {
	let parkAreaHTML = `<section class="parkArea--main">`
	for (const area of parkAreas) {
	parkAreaHTML+= `<section class="parkArea--${area.name}"> <h3 id="titleArea">${area.name}</h3> <p>${getAllAreaServices(area.id)}</p> </section>`
	//call that function with param area.id
	//bridge table loop, if aid === bt.aid
	//service loop, if bt.si === s.id
	//html+= s.name
//parkAreaHTML += /////service	
		//take park area id to loop through bridge table, get servid in array, loop through and and push servname to the string
}
	
	parkAreaHTML+= `</section>`
return parkAreaHTML
}
// //I believe no parameters for ParkAreaList()
// Should return html string containing all park area names to display in park area panel of site
