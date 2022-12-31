import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../Action/UserAction'

function Create() {
  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()


  // to read value from form inputs
  const readValue = (e) => {
      const { name, value } = e.target
      setUser({ ...user,[name]:value })
  }

  // submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
      try {
          console.log('data =', user)
          dispatch(createUser(user))
          .unwrap()
          .then(res => {
            toast.success('Successfully submitted')
            navigate(`/`)
          })
          .catch(err => toast.error(err.message))
      } catch (err) {
          toast.error(err.message)
      }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Create</h3>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <form onSubmit={submitHandler} autoComplete={'off'} >
                    <div className="form-group mt-2">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={user.firstName} onChange={readValue} className="form-control" required />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={user.lastName} onChange={readValue}  className="form-control" required />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" value={user.age} onChange={readValue} className="form-control" required />
                    </div>
                    <div className="form-group mt-2">
                        <input type="submit" value="Create" className="btn btn-outline-success" />
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Create