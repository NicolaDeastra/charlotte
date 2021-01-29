import axios from 'axios'
class api {
  static login = async (username, password) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_ROOT_URL}/user/login`,
        {
          username,
          password,
        }
      )

      return res.data
    } catch (error) {
      return error.response
    }
  }

  static joinRoom = async (roomId) => {
    const res = await axios.post(
      `${process.env.REACT_APP_ROOT_URL}/api/room/join`,
      roomId
    )
  }
}

export default api
