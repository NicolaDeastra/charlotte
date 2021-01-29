import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.scss'
import api from '../../services'

const JoinRoom = () => {
  const history = useHistory()
  const [roomId, setRoomId] = useState('')

  const joinRoom = async (roomId) => {
    const res = await api.joinRoom()
  }

  return (
    <div className='container mt-5'>
      <h3 className='mb-5'>Input Room Id</h3>
      <h5>Your id is : {roomId}</h5>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-6'>
          <label htmlFor='roomId' className='form-label'>
            Room ID
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value)
            }}
          />
        </div>
        <div className='col-4'></div>
      </div>
      <button
        className='mt-3 mb-5 btn btn-primary button'
        onClick={() => {
          joinRoom(roomId)
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default JoinRoom
