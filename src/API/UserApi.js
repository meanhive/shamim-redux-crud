import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com"
})

const UserApi = {
    getAll: async () => {
        return axiosInstance.request({
            method: "GET",
            url: `/users`
        })
    },
    getSingle: async (id) => {
        return axiosInstance.request({
            method: "GET",
            url: `/users/${id}`
        })
    },
    create: async (user) => {
        return axiosInstance.request({
            method: "POST",
            url: `/users/add`,
            data: user
        })
    },
    update: async (user,id) => {
        return axiosInstance.request({
            method: "PATCH",
            url: `/users/${id}`,
            data: user
        })
    },
    delete: async (id) => {
        return axiosInstance.request({
            method: "DELETE",
            url: `/users/${id}`
        })
    }
}

export default UserApi