import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { post } from '../utils/axios-utils'

const Login = () => {
  const BASEURL = process.env.REACT_APP_BACKEND_URL
  const dispatch = useDispatch()
  const history = useHistory()
  const [user, setUser] = useState({
    userid: '',
    pwd: '',
    role: '',
  })
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (user.userid === '' || user.pwd === '' || user.role === '') {
      toast.error('Please fill all required fields')
      return
    }
    console.log(user)
    let url = 'api/customers/validate'
    if (user.role === 'Admin') {
      url = 'api/admin/validate'
    }
    console.log(url)
    try{
      const resp=await post(url, user)
      console.log("response",resp)
      sessionStorage.setItem('userid', resp.data.userid)
      sessionStorage.setItem('uname', resp.data.uname)
      sessionStorage.setItem('role', user.role)
      dispatch({ type: 'IsLoggedIn' })
      toast.success('Login successfull')
      if (user.role === 'Admin') {
        history.push('/dashboard')
      } else {
        history.push('/')
      }
    }catch(error){
      console.log("error ",error.response.status)
      if(error.response.status === 404)
        toast.error('Invalid username or password')
    }
  }
  return (
    <>
      <div>
        <div className='clearfix' />
        <div className='container' style={{ minHeight: '79vh' }}>
          <div className='row'>
            <div
              className='col-sm-4 mx-auto text-center'
              style={{ boxShadow: '0 0 2px 1px white' }}
            >
              <div className='card shadow' style={{ marginTop: 50 }}>
                <div className='card-body'>
                  <img
                    src='images/logo.png'
                    alt='Company Logo'
                    style={{ width: 200 }}
                    className='my-2 rounded-circle'
                  />
                  <form autoComplete='off' className='mt-2'>
                    <div className='form-group'>
                      <div className='input-group'>
                        <div className='input-group-prepend'>
                          <span className='input-group-text bg-danger border-0 text-white'>
                            <i className='fas fa-user-tie' />
                          </span>
                        </div>
                        <input
                          type='text'
                          required
                          placeholder='User ID here'
                          name='userid'
                          value={user.userid}
                          onChange={handleInput}
                          className='form-control'
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='input-group'>
                        <div className='input-group-prepend'>
                          <span className='input-group-text bg-danger border-0 text-white'>
                            <i className='fas fa-key' />
                          </span>
                        </div>
                        <input
                          required
                          type='password'
                          name='pwd'
                          placeholder='Password here'
                          value={user.pwd}
                          onChange={handleInput}
                          className='form-control'
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='input-group'>
                        <div className='input-group-prepend'>
                          <span className='input-group-text bg-danger border-0 text-white'>
                            <i className='fas fa-key' />
                          </span>
                        </div>
                        <select
                          value={user.role}
                          onChange={handleInput}
                          required
                          name='role'
                          className='form-control'
                        >
                          <option value=''>Select Role</option>
                          <option>Admin</option>
                          <option>Customer</option>
                        </select>
                      </div>
                    </div>
                    <input
                      type='submit'
                      onClick={handleSubmit}
                      defaultValue='Login'
                      className='btn btn-danger btn-block'
                    />
                  </form>
                </div>
                <Link to="/forgot" className='mb-3'>Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
