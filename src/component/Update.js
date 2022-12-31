import React, { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import UserApi from '../API/UserApi'
import { updateUser } from '../Action/UserAction'

function Update() {
  const [user,setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0
  })

  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getSingle = async () => {
      let res = await UserApi.getSingle(params.id)
          setUser(res.data)
    }
    getSingle()
  },[])

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
          dispatch(updateUser({ user: user, id: params.id }))
          .unwrap()
          .then(res => {
            toast.success('Successfully updated the user');
            navigate(`/`)
          }).catch(err => toast.error(err.message))
      } catch (err) {
          toast.error(err.message)
      }
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Update = {params.id} </h3>
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
                        <input type="submit" value="Update" className="btn btn-outline-success" />
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Update