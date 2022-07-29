import {createStore} from 'vuex'

export const store = createStore({
    state: {
        user: null,
        users: [
            { id: 1, name: 'Eugeniy', admin: true},
            { id: 2, name: 'Alex', admin: true},
            { id: 3, name: 'Diego', admin: false}
        ]
    },

    mutations: {
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        setUser ({ commit }) {
            setTimeout(() => {
                const fakeUser = {
                id: 1239214,
                name: 'Diego',
                admin: false
              }
              commit('setUser', fakeUser)
            }, 1000)
        }
    },

    getters: {
        isUserLogged (state) {
            return state.user ? true : false
        },
        getUser (state) {
            return state.user
        },
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