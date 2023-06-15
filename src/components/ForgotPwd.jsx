import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { post } from '../utils/axios-utils'

const ForgotPwd = () => {
  const BASEURL = process.env.REACT_APP_BACKEND_URL
  const dispatch = useDispatch()
  const history = useHistory()
  const [user, setUser] = useState({
    userid: '',
  })
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    if (user.userid === '') {
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
      const resp=await post('api/customers/forgot', {email:user.userid})
      console.log("response",resp)
      toast.success(resp.data)      
        history.push('/')
      }catch(error){
        toast.error('Invalid emailid provided')
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
                    
                    <input
                      type='submit'
                      onClick={handleSubmit}
                      value='Send Password'
                      className='btn btn-danger btn-block'
                    />
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPwd
