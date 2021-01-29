import * as React from 'react'

import './style.scss'

const Room = () => {
  return (
    <div className='room container'>
      <h2>Room : 123456</h2>
      <div className='row mt-4 text-muted'>
        <h5 className='col-md-6'>Player 1 : Player 1</h5>
        <h5 className='col-md-3 offset-md-3 '>Player 2 : Player 2</h5>
      </div>
      <div className='row text-muted'>
        <h5 className='col-md-6'>Player 1 Choice : Wait...</h5>
        <h5 className='col-md-3 offset-md-3 '>Player 2 Choice : Wait...</h5>
      </div>
      <div className='row  room__choice'>
        <div className='margin-custom col-md'>
          <div className='form-groups'>
            <div className='btn room__btn room__rock'></div>
          </div>
        </div>
        <div className='margin-custom col-md '>
          <div className='form-groups'>
            <div className='btn room__btn room__paper'></div>
          </div>
        </div>
        <div className='margin-custom col-md  '>
          <div className='form-groups'>
            <div className='btn room__btn room__scissor'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room
