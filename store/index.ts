export const state = () => ({
    weatherData: [1,2,3,4,5]
})

export const mutations = {}

export const actions = {}

export const getters = {
    getWeather(state: any) {
        return state.weatherData
    }
}