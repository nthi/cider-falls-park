import { ParkAreaList } from "./parkAreas.js"
import { GuestList } from "./guests.js"

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
//add all html sections in applicationHTML

mainContainer.innerHTML = applicationHTML
