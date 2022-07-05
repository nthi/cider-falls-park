import { getGuests } from "./database.js";

// Responsibility: create html for the guests panel of the site
// 		Functions: import and call getGuests()
// 		Functions: for loop similar to deShawn’s Dogwalking or Brewed Awakenings

const guests = getGuests()

export const GuestList = () => {
    let guestHTML = `<ul>Guests</ul>`
    for (const guest of guests) {
        guestHTML += `<li>${guest.name}</li>`
    }
    return guestHTML
}

// //doublecheck this: no parameters for the GuestList()
// Should return html string containing all guests to display in the guest panel of site	