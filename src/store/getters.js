const getters = {
    sidebar: state => state.app.sidebar,
    name: state => state.user.name,
    token: state => state.user.token,
    permission_routers: state => state.permission.routers,
}

export default getters
