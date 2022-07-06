import { getServices } from "./database.js"
import { getServiceAreaBridge } from "./database.js"
import { getParkAreas } from "./database.js"
// Responsibility: create html for the services that go into each park area

// 	Function: import and call getServices(), ParkAreaList(), and getServiceAreaBridge()
// 	Function: 
//I think I need two functions? One to find the services for a particular park area and one to take that information through a loop to create the html for each particular park area’s services.
//getting cities in deshawns similarity
//look at Walkers.js
//define function that will create an --htmlstring-- of services for each park area?
//first iterate through park areas. NEED AREA ID
//In each park area, iterate through serviceAreaBridge. 
//if the service area bridge object has the same id as the park area, push the service to that park's --htmlstring--.
//use the right <></>s when adding the html into the correct park area?

//Area ID > search bridge table > collect service id, get service obj

const services = getServices()
const areaService = getServiceAreaBridge()
const parkList = getParkAreas()

export const getAllAreaServices = (areaID) => {
    let html = ""
    for (const singleLoop of areaService) {
        if (singleLoop.areaId === areaID) {
            for (const service of services) {
                if (singleLoop.serviceId === service.id) {
                    html+= `${service.name}, `
                }
            }
        }
    
    }
    let x= html.split(",")
    let y = x.splice(0, x.length-1)
    let z= y.join(", ")
    return z
}

//Should return html string containing all services for a particular park area

//then I need to find a way to get that html string added to the Park Areas html.
