import { getParkAreas } from "./database.js";

// Responsibility: create html for the park areas panel of the site
// 	Functions: import and call getParkAreas()
// 	Functions: for loop similar to dogwalkers or coffeeshop
	
const parkAreas = getParkAreas()

export const ParkAreaList = () => {
	let parkAreaHTML = `<section class="parkArea--main">`
	for (const area of parkAreas) {
	parkAreaHTML+= `<section class="parkArea--singleArea"> ${area.name} </section>`
	}
	parkAreaHTML+= `</section>`
return parkAreaHTML
}
// //I believe no parameters for ParkAreaList()
// Should return html string containing all park area names to display in park area panel of site
