import { ParkAreaList } from "./parkAreas.js"
import { GuestList } from "./guests.js"
import { listServiceAreasOnSite } from "./services.js"
import { getParkAreas, getServiceAreaBridge } from "./database.js"

//don't forget document.querySelector(class or id I designate here)
//don't forget addEventListener. Which module? or in here?

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<section class="content">
        <section class="parkArea">
            <h2 class="parkArea--title">Park Areas</h2>
            ${ParkAreaList()}
        </section>
        <section class="guestArea">
            <h2>Guests</h2>
            ${GuestList()}
        </section>
</section>
`

const secondContainer = document.querySelector("#newContainer")
const newApplicationHTML = `
<section class="servicesArea">
    ${listServiceAreasOnSite()}
</section>
`
//add all html sections in applicationHTML
mainContainer.innerHTML = applicationHTML
secondContainer.innerHTML = newApplicationHTML

//add click event that displays how many guests are in a park area at time of click
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("titleArea")) {
            let randomGuestNum = Math.floor(Math.random()*17)
            window.alert(`There are ${randomGuestNum} guests in this area.`)
        }
    }
)

//add click event that displays all park areas where a service is available.
const bridgeTable = getServiceAreaBridge()
const areaTable = getParkAreas()

const getMatch = (areas) => {
    const matches = []
    for (const bridgeObj of bridgeTable) {
        if (bridgeObj.areaId === area.id) {
            matches.push(area.name)
        }
    }
    return matches
}

const serviceName = (service) => {

}


// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("serviceName")) {
//             //get the service id by splitting id
//             let messageString = ""
//             const [,serviceId] = itemClicked.id.split("--")
//             //iterate through the bridge table
//             for (const object of bridgeTable) {
//                 //if bridge object's serviceID = target serviceID
//                 if (object.serviceId === parseInt(serviceId)) {
//                     let matchArray = [] //put this outside the loop so that itbuilds with every iteration
//                     matchArray.push(object)
//                     console.log(matchArray)
//                     }
//           //this is parallel to the first loop not inside          for (const area of areaTable) {
//                         for (const match of matchArray){
//                             if (area.id === match.areaId) {
//                                 messageString += `${area.name}`
//                             }
//                         }
//                     }
//                 }
//             }
//         }
// )

//call serviceAReaBridge
//loop through bridgetable to get the matching bridge table entries
//then loop to get the matching areas
//window.alert(`${} is offered in ${}.`)

// for (const service of services) {
//         //debugger
//         for (const singleLoop of areaService) {
//             //debugger
//             if (singleLoop.serviceId === service.id)
//             serviceSectionHTML += `${service.name}`
//         }
//     }
//     serviceSectionHTML+= `</section>`
//     return serviceSectionHTML
// }

// let areas = []
// areas.push(singleLoop.areaId)