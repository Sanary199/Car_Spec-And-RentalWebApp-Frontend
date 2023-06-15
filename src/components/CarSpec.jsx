import AdminNav from './Adminnav'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {get} from '../utils/axios-utils'
import { toast } from 'react-toastify'

const CarSpec = () => {
  const [specvariants, setSpecVariants] = useState([])
  const [data, setData] = useState([])
  const [filter, setFilter] = useState('All Cars')
  const [edit, setEdit] = useState(false)
  const BASE_URL = process.env.REACT_APP_BACKEND_URL
  const [carspec, setcar] = useState({
    id: '',
    modelname: '',
    varid: '',
  })
  useEffect(async () => {
    const resp=await get('api/specvariants')
    setSpecVariants(resp.data)
    loadData()
  }, [])

  const handleInput = (e) => {
    setcar({ ...carspec, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(carspec)
    if (carspec.id === '' || carspec.modelname === '' || carspec.varid === '') {
      toast.error('Please provide required details')
    } else {
      axios
        .post(BASE_URL + 'api/carspec', carspec)
        .then((resp) => {
          toast.success('Car saved successfully')
          setcar({
            id: '',
            modelname: '',
            varid: '',
          })
          setEdit(false)
          loadData()
        })
        .catch((error) => {
          toast.error(error)
        })
    }
  }

  const handleFilter = (id) => {
    setFilter(id)
  }

  const handleEdit = (item) => {
    setEdit(true)
    setcar({
      id: item.id,
      modelname: item.modelname,
      varid: item.specvariants.id,
    })
  }

  const handleDelete = (id) => {
    const resp = window.confirm('Are you sure you want to delete this car ?')
    if (resp) {
      axios
        .delete(BASE_URL + 'api/carspec/' + id)
        .then((resp) => {
          toast.success(resp.data)
          loadData()
        })
        .catch((error) => {
          toast.error('car is available in market')
        })
    }
  }

  const loadData = async () => {
    const resp=await get('api/carspec')
    setData(resp.data)
  }
  return (
    <>
      <div className='content-wrapper p-2'>
        <div
          className='container-fluid shadow p-2 bg-white'
          style={{ minHeight: '88vh' }}
        >
          <div className='row'>
            <div className='col-sm-8'>
              <div className='form-inline float-right mt-1 mr-2'>
                <label className='mr-2'>Filter</label>
                <select
                  onChange={(e) => handleFilter(e.target.value)}
                  className='form-control form-control-sm'
                  style={{ width: 200 }}
                >
                  <option>All Cars</option>
                  <option>Available</option>
                  <option>Not Available</option>
                </select>
              </div>
              <h5
                className='p-2 mb-3'
                style={{ borderBottom: '2px solid green' }}
              >
                Cars
              </h5>
              <table className='table table-bordered table-sm'>
                <thead>
                  <tr>
                    <th>Car Name</th>
                    <th>Model Name</th>
                    <th>Variant</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    .filter((val) => {
                      if (filter === 'All Cars') return val
                      else return val.status === filter
                    })
                    .map((x, index) => (
                      <tr key={index}>
                        <td>{x.id}</td>
                        <td>{x.modelname}</td>
                        <td>
                          {x.variant.title} - {x.variant.company.compname}
                        </td>
                        <td>{x.status}</td>
                        <td>
                          <button
                            className='btn btn-danger btn-sm'
                            onClick={(e) => handleDelete(x.id)}
                          >
                            Delete
                          </button>
                          <button
                            className='btn btn-primary btn-sm ml-2'
                            onClick={(e) => handleEdit(x)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className='col-sm-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5>Car Details</h5>
                  <form>
                    <div className='form-group'>
                      <label>Select Variant</label>
                      <select
                        required
                        className='form-control'
                        name='varid'
                        value={carspec?.varid}
                        onChange={handleInput}
                      >
                        <option value>-- Select Variant --</option>
                        {specvariants.map((x) => (
                          <option key={x.id} value={x.id}>
                            {x.title} - {x.company.compname}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Car Name</label>
                      <input
                        type='text'
                        disabled={edit}
                        required
                        className='form-control'
                        value={carspec?.id}
                        onChange={handleInput}
                        name='id'
                      />
                    </div>
                    <div className='form-group'>
                      <label>Model Name</label>
                      <input
                        type='text'
                        required
                        className='form-control'
                        value={carspec?.modelname}
                        onChange={handleInput}
                        name='modelname'
                      />
                    </div>
                    <Link
                      to='/CarSpec'
                      className='btn btn-danger btn-sm float-right ml-2'
                    >
                      Cancel
                    </Link>
                    <input
                      type='submit'
                      onClick={handleSubmit}
                      className='btn btn-primary btn-sm float-right'
                      defaultValue='Save car'
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

export default CarSpec
