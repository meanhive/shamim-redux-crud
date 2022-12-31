import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { retriveUsers, deleteUser } from '../Action/UserAction'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initFetch = useCallback(() => {
    dispatch(retriveUsers())
  }, [dispatch])

  useEffect(() => {
    initFetch()
  }, [initFetch])


  const users = useSelector((item) => item.users);

  // delete user logic
  const delUser = (id) => {
    if(window.confirm(`Are you sure to delete an user id = ${id} ?`)) {
      dispatch(deleteUser({ id: id}))
      .unwrap()
      .then(res => {
        toast.success('User deleted successfullly')
        navigate(`/`)
      }).catch(err => toast.error(err.message))
    } else {
      toast.warning('delete terminated')
    }
  }


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Home</h3>
            </div>
        </div>

        <div className="row">
            {
                users.map((item,index) => {
                  const { id, name, firstName, lastName , email, age, image } = item
                  return (
                      <div className="col-md-4 mt-2" key={index}>
                          <div className="card">
                            <img src={image} alt={firstName} className="card-img-top rounded-circle" />
                              <div className="card-body">
                                  <h4 className="text-center text-success"> {firstName} {lastName} </h4>
                                  <ul className="list-group">
                                    <li className="list-group-item">
                                        <strong>Email</strong>
                                        <span className="float-end"> {email} </span>
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Age</strong>
                                        <span className="float-end"> {age} </span>
                                    </li>
                                  </ul>
                              </div>
                              <div className="card-footer">
                                  <NavLink to={`/edit/${id}`} className="btn btn-outline-info">Edit</NavLink>
                                  <button onClick={() => delUser(id)} className="btn btn-outline-danger float-end">Delete</button>
                              </div>
                          </div>
                      </div>
                  )
                })
            }
        </div>
    </div>
  )
}

export default Home
