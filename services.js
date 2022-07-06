import { getServices } from "./database.js"
import { getServiceAreaBridge } from "./database.js"

// Responsibility: create html for the services that go into each park area
// 	Function: import and call getServices(), ParkAreaList(), and getServiceAreaBridge()
// 	Function: 
//I think I need two functions? One to find the services for a particular park area and one to take that information through a loop to create the html for each particular park area’s services.
//getting cities in deshawns similarity
//look at Walkers.js
//define function that will create an --htmlstring-- of services for each park area?
//first iterate through park areas. In each park area, iterate through serviceAreaBridge. if the service area bridge object has the same id as the park area, push the service to that park's --htmlstring--.
//use the right <></>s when adding the html into the correct park area?

const services = getServices()
const areaService = getServiceAreaBridge()



//Should return html string containing all services for a particular park area

//then I need to find a way to get that html string added to the Park Areas html.
