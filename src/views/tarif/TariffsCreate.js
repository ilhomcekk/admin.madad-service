import { cilCheckAlt, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SunEditorComponent from 'src/components/SunEditorComponent'
import { getCategory } from 'src/redux/actions/categoryActions'
import { getServicesByCategory, postCreateServices } from 'src/redux/actions/servicesActions'
import { postCreateTarif } from 'src/redux/actions/tarifActions'

const TariffsCreate = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const now = new Date()
  const options = { timeZone: 'Asia/Tashkent' }
  const dateInUzbekistan = now.toLocaleString('ru-RU', options)

  const [params, setParams] = useState({
    name_ru: '',
    name_uz: '',
    name_en: '',
    price: 0,
    category_id: '',
    tariffs: [],
    date: dateInUzbekistan,
  })
  const [count, setCount] = useState(1)

  const handleChangeParams = (e) => {
    const { name, value } = e.target
    setParams((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const handleSunEditor = (e) => {
    const { name, value } = e
    setParams((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const [arr, setArr] = useState([])

  const handleInputChange = (index, event) => {
    const newValue = event.target.value
    setArr((prevArray) => {
      const updatedArray = [...prevArray]
      updatedArray[index] = newValue
      return updatedArray
    })
  }

  const handleRemove = (idx) => {
    let oldArr = [...arr]
    let filter = oldArr.filter((item) => item != arr[idx])
    setArr(filter)
    setCount(filter?.length)
  }
  useEffect(() => {
    setParams((prev) => {
      return {
        ...prev,
        tariffs: arr,
      }
    })
  }, [arr])

  const handleSubmit = () => {
    dispatch(postCreateTarif(params))
  }

  const { step } = useSelector((state) => state.tarif)
  useEffect(() => {
    if (step === true) navigate('/tariffs')
  }, [step])

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  const categories = useSelector((state) => state.category.category)

  return (
    <div className="card">
      <div className="card-header">Добавить</div>
      <div className="card-body">
        <div className="row">
          <div>
            <h6 className="">Название (RU)</h6>
            <input
              value={params.name_ru}
              name="name_ru"
              onChange={handleChangeParams}
              className="form-control"
            />
            <h6 className="mt-4">Название (UZ)</h6>
            <input
              value={params.name_uz}
              name="name_uz"
              onChange={handleChangeParams}
              className="form-control"
            />
            <h6 className="mt-4">Название (EN)</h6>
            <input
              value={params.name_en}
              name="name_en"
              onChange={handleChangeParams}
              className="form-control"
            />
            <h6 className="mt-4">Категория</h6>
            <select name="category_id" onChange={handleChangeParams} className="form-select">
              <option value="">Выбрать</option>
              {categories?.map((item, idx) => (
                <option key={idx} value={item?._id}>
                  {item?.name_ru}
                </option>
              ))}
            </select>
            <h6 className="mt-4">Сумма</h6>
            <input
              value={params.price}
              name="price"
              onChange={handleChangeParams}
              className="form-control"
            />
            <h6 className="mt-4">Характеристика</h6>
            {[...Array(count)].map((item, idx) => (
              <div key={idx} className="d-flex align-items-center gap-4 mb-3">
                <input
                  value={arr[idx] && arr[idx]}
                  onChange={(e) => handleInputChange(idx, e)}
                  className="form-control"
                />
                <CButton onClick={() => handleRemove(idx)} color="danger" className="text-white">
                  <CIcon icon={cilTrash} />
                </CButton>
              </div>
            ))}
            <CButton
              onClick={() => setCount((prev) => prev + 1)}
              color="primary"
              className="ms-auto mt-4"
            >
              <CIcon icon={cilCheckAlt} className="me-1" />
              Добавить характеристику
            </CButton>
            <CButton onClick={handleSubmit} color="primary" className="float-end ms-auto mt-4">
              <CIcon icon={cilCheckAlt} className="me-1" />
              Сохранить
            </CButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TariffsCreate
