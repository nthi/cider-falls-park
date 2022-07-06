// Responsibility– hold tables: 
// arrays of objects for parkAreas, guests, services, serviceAreaBridge
const database = {
    parkAreas: [
        {
            id: 1,
            name: "Lodge"
        },
        {
            id: 2,
            name: "Lost Wolf Trail"
        },
        {
            id: 3,
            name: "Chamfort River"
        },
        {
            id: 4,
            name: "Gander River"
        },
        {
            id: 5,
            name: "Campgrounds"
        },
        {
            id: 6,
            name: "Pine Bluffs Trail"
        }
    ],
    guests: [
        {
            id: 1,
            name: "Alene Shanahan"
        },
        {
            id: 2,
            name: "Nicholas Bogisich"
        },
        {
            id: 3,
            name: "Isaac Reichel"
        },
        {
            id: 4,
            name: "Jarod Skiles"
        },
        {
            id: 5,
            name: "Trycia Parisian"
        },
        {
            id: 6,
            name: "Maud Franey"
        },
        {
            id: 7,
            name: "Lexi Spinka"
        },
        {
            id: 8,
            name: "Parker Bechtelar"
        },
        {
            id: 9,
            name: "Forrest Hintz"
        },
        {
            id: 10,
            name: "Jeremie Wunsch"
        },
        {
            id: 11,
            name: "Melba Mueller"
        },
        {
            id: 12,
            name: "Blanche Wiza"
        }
    ],
    services: [
        {
            id: 1,
            name: "Rafting"
        },
        {
            id: 2,
            name: "Canoing"
        },
        {
            id: 3,
            name: "Fishing"
        },
        {
            id: 4,
            name: "Hiking"
        },
        {
            id: 5,
            name: "Picknicking"
        },
        {
            id: 6,
            name: "Rock Climbing"
        },
        {
            id: 7,
            name: "Lodging"
        },
        {
            id: 8,
            name: "Parking"
        },
        {
            id: 9,
            name: "Information"
        },
        {
            id: 10,
            name: "Zip Lines"
        }
    ],
    serviceAreaBridge: [
        {
            id: 1,
            areaId: 1,
            serviceId: 7
        },
        {
            id: 2,
            areaId: 1,
            serviceId: 8
        },
        {
            id: 3,
            areaId: 1,
            serviceId: 9
        },
        {
            id: 4,
            areaId: 1,
            serviceId: 5
        },
        {
            id: 5,
            areaId: 2,
            serviceId: 4
        },
        {
            id: 6,
            areaId: 2,
            serviceId: 5
        },
        {
            id: 7,
            areaId: 2,
            serviceId: 6
        },

        {
            id: 8,
            areaId: 3,
            serviceId: 1
        },
        {
            id: 9,
            areaId: 3,
            serviceId: 2
        },
        {
            id: 10,
            areaId: 3,
            serviceId: 3
        },
        {
            id: 11,
            areaId: 4,
            serviceId: 3
        },
        {
            id: 12,
            areaId: 4,
            serviceId: 4
        },
        {
            id: 13,
            areaId: 5,
            serviceId: 7
        },
        {
            id: 14,
            areaId: 5,
            serviceId: 8
        },
        {
            id: 15,
            areaId: 5,
            serviceId: 9
        },
        {
            id: 16,
            areaId: 6,
            serviceId: 4
        },
        {
            id: 17,
            areaId: 6,
            serviceId: 5
        },
        {
            id: 18,
            areaId: 6,
            serviceId: 10
        }

    ]
}

// Responsibility: export copies of the tables to other modules
// 		Functions: 
export const getParkAreas = () => {
    return database.parkAreas.map(area => ({ ...area }))
}

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}
export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}
export const getServiceAreaBridge = () => {
    return database.serviceAreaBridge.map(bridge => ({ ...bridge }))
}
// 		No parameters
// 		Should return copy of the array when called
