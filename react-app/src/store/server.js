const FIND_SERVER = 'servers/FIND_SERVER'
const SERVER_RESET = 'servers/SERVER_RESET'

const findServer = (server) => ({
    type: FIND_SERVER,
    server
})

export const resetServer = () => ({
  type: SERVER_RESET
})


export const getOneServer = (id) => async (dispatch) => {
  const response = await fetch(`/api/servers/${id}`);

  if (response.ok) {
    const server = await response.json();
    dispatch(findServer(server))
    return server;
  }
}


const singleServerReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
      case FIND_SERVER: {
        newState[action.server.id] = action.server
        return newState
      }

      case SERVER_RESET: {
        return newState
      }

      default:
        return state;
    }
  }

  export default singleServerReducer;
