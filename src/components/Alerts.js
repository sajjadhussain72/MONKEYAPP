import React, { Component } from 'react'

export default class Alerts extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-warning alert-dismissible fade mb-0 show" role="alert">
          <strong>Holy guacamole!</strong> You should check webpack compiled successfully below <span className='text-danger'>@sajjad hussain</span>.
             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </div>
    )
  }
}


