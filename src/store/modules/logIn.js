// initial state
const state = {
    session_id: '123',
    user: '',
    userImage: ''
}

const getters = {}

const actions = {}

const mutations = {
    getSession_id(state, value) {
        state.session_id = value
    },
    getUser(state, value) {
        state.usermobile = value
    },
    getUserImage(state, value) {
        state.userImage = value
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
