import {createStore} from 'vuex'

export const store = createStore({
    state: {
        users: [
            { id: 1, name: 'Eugeniy', admin: true},
            { id: 2, name: 'Alex', admin: true},
            { id: 3, name: 'Diego', admin: false}
        ]
    },
    getters: {
        getAllUsers(state) {
            return state.users
        },
        getUsers(state) {
            return state.users.filter(user => !user.admin)
        },
        getUserById: state => id => state.users.find(user => user.id == id),
        getUsersLength(state, getters) {
            const suffix = 'Кол-во пользователей:'
            return `${suffix}  ${getters.getAllUsers.length}`
        }
    }
})