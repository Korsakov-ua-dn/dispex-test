import axios from 'axios'

const instance = axios.create({
    baseURL: "https://dispex.org/api/vtest",
    headers: {
        "Authorization": "Bearer 81000uadn",
    },
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

export const clientAPI = {
    getClients(flatID) {
        return instance.get(`/HousingStock/clients?addressId=${flatID}`)
    },
    addClient(payload) {
        return instance.post(`/HousingStock/client`, payload)
    },
    deleteClient(clientId, bindId) {
        return instance.delete(`​/HousingStock/bind_client​?id=${bindId}`)
    },
    updateClient(clientId, bindId) {
        return instance.put(`/HousingStock/bind_client`, {
            "AddressId": 47438,
            "ClientId": 32386,
            "email": "zverevaolesa734@gmail.com",
            "name": "олеся",
            "phone": "343434343"
          })
    },
}