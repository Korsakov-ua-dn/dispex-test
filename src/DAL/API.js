import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dispex.org/api/vtest",
})

export const addressAPI = {
    getStreets() {
        return instance.get("/Request/streets")
    },
    getHouses(streetID) {
        return instance.get(`/Request/houses/${streetID}`)
    },
    getFlats(houseID) {
        return instance.get(`/Request/house_flats/${houseID}`)
    },
}