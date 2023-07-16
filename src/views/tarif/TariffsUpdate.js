import { cilCheckAlt, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SunEditorComponent from 'src/components/SunEditorComponent'
import { getCategory } from 'src/redux/actions/categoryActions'
import { getDetailServices, postUpdateServices } from 'src/redux/actions/servicesActions'
import { getDetailTarif, postUpdateTarif } from 'src/redux/actions/tarifActions'

const TariffsUpdate = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { data } = useSelector((state) => state.tarif)
  const { loading } = useSelector((state) => state.tarif)
  const now = new Date()
  const options = { timeZone: 'Asia/Tashkent' }
  const dateInUzbekistan = now.toLocaleString('ru-RU', options)

  const [updateContent, setUpdateContent] = useState({
    name_ru: data?.name_ru,
    name_uz: data?.name_uz,
    name_en: data?.name_en,
    category: data?.category,
    price: data?.price,
    tariffs: data?.tariffs,
    date: dateInUzbekistan,
  })
  const [count, setCount] = useState()

  const handleChangeContent = (e) => {
    const { name, value } = e.target
    setUpdateContent((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const [arr, setArr] = useState([data?.tariffs])
  useEffect(() => {
    setUpdateContent({
      name_ru: data?.name_ru,
      name_uz: data?.name_uz,
      name_en: data?.name_en,
      category: data?.category,
      price: data?.price,
      tariffs: data?.tariffs,
      date: dateInUzbekistan,
    })
    setCount(data?.tariffs?.length)
    setArr(data?.tariffs)
  }, [id, data])

  useEffect(() => {
    dispatch(getDetailTarif(id))
    dispatch(getCategory())
  }, [id])

  const handleInputChange = (index, event) => {
    const newValue = event.target.value
    setArr((prevArray) => {
      const updatedArray = [...prevArray]
      updatedArray[index] = newValue
      return updatedArray
    })
  }

  const handleAdd = () => {
    setCount((prev) => prev + 1)
  }
  const handleRemove = (idx) => {
    let oldArr = [...arr]
    let filter = oldArr.filter((item) => item != arr[idx])
    setArr(filter)
    setCount(filter?.length)
  }

  const categories = useSelector((state) => state.category.category)

  const handleSubmit = () => {
    const { name_ru, name_uz, name_en, category, price, tariffs, date } = updateContent
    dispatch(
      postUpdateTarif(id, {
        name_ru,
        name_uz,
        name_en,
        category: category?._id ? category?._id : category,
        price,
        tariffs: arr,
        date,
      }),
    )
  }

  const { step } = useSelector((state) => state.tarif)
  useEffect(() => {
    if (step === true) navigate('/tariffs')
  }, [step])

  return (
    <div className="card">
      <div className="card-header">Изменить</div>
      <div className="card-body">
        <div className="row">
          <div>
            <h6 className="">Название (RU)</h6>
            <input
              value={updateContent?.name_ru}
              name="name_ru"
              onChange={handleChangeContent}
              className="form-control"
            />
            <h6 className="mt-4">Название (UZ)</h6>
            <input
              value={updateContent?.name_uz}
              name="name_uz"
              onChange={handleChangeContent}
              className="form-control"
            />
            <h6 className="mt-4">Название (EN)</h6>
            <input
              value={updateContent?.name_en}
              name="name_en"
              onChange={handleChangeContent}
              className="form-control"
            />
            <h6 className="mt-4">Категория</h6>
            <select name="category" onChange={handleChangeContent} className="form-select">
              {categories?.map((item, idx) => (
                <option
                  selected={item?._id === updateContent?.category?._id}
                  key={idx}
                  value={item?._id}
                >
                  {item?.name_ru}
                </option>
              ))}
            </select>
            <h6 className="mt-4">Сумма</h6>
            <input
              value={updateContent?.price}
              name="price"
              onChange={handleChangeContent}
              className="form-control"
            />
            <h6 className="mt-4">Характеристика</h6>

            {arr &&
              [...Array(count)]?.map((item, idx) => (
                <div key={idx} className="d-flex align-items-center gap-4 mb-3">
                  <input
                    name="name"
                    value={arr[idx]}
                    onChange={(e) => handleInputChange(idx, e)}
                    className="form-control"
                  />
                  <CButton onClick={() => handleRemove(idx)} color="danger" className="text-white">
                    <CIcon icon={cilTrash} />
                  </CButton>
                </div>
              ))}
            <CButton onClick={handleAdd} color="primary" className="ms-auto mt-4">
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

export default TariffsUpdate
