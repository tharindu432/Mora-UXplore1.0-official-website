import React, { Fragment } from 'react'



const TeamRegister = () => {
  return (
    <Fragment>
      <section className="container-center">
      <div className="register">
        <h1 >Register</h1>
        <h3>Your Team Members</h3>
        <form action="" className="form">
          <input
            className="fa"
            type="text"
            placeholder="University"
            name="name"
          />
          <h4><i className="fa fa-user" aria-hidden="true"></i> Team Member 1 (Leader)</h4>
          <input
            className="fa"
            type="text"
            placeholder="Name"
            name="name_1"
          />
          <input
            className="fa"
            type="text"
            placeholder="Index Number"
            name="index_1"
          />
          <h4><i className="fa fa-user" aria-hidden="true"></i> Team Member 2</h4>
          <input
            className="fa"
            type="text"
            placeholder="Name"
            name="name_2"
          />
          <input
            className="fa"
            type="text"
            placeholder="Index Number"
            name="index_2"
          />
          <h4><i className="fa fa-user" aria-hidden="true"></i> Team Member 3</h4>
          <input
            className="fa"
            type="text"
            placeholder="Name"
            name="name_3"
          />
          <input
            className="fa"
            type="text"
            placeholder="Index Number"
            name="index_3"
          />
          <div className="card-footer mt-1">
            <button className="btn btn-gradient">Submit</button>
          </div>
        </form>
      </div>
    </section>
    </Fragment>
  )
}

export default TeamRegister
