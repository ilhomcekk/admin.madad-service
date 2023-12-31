import { cilCheckAlt, cilPencil, cilTrash } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import SunEditorComponent from 'src/components/SunEditorComponent'
import { getCategory } from 'src/redux/actions/categoryActions'
import {
  getServices,
  getServicesByCategory,
  postCreateServices,
} from 'src/redux/actions/servicesActions'
import { postCreateTarif } from 'src/redux/actions/tarifActions'
import { postCreateTarifServices } from 'src/redux/actions/tarifServicesActions'

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
    description_ru: '',
    description_uz: '',
    description_en: '',
    service_id: '',
    category_id: '',
    photo: '',
    date: dateInUzbekistan,
  })

  const onImageChange = (event, element) => {
    if (window.FileReader) {
      const targetFile = event.target.files[0]
      let newParams = {
        ...params,
        photo: event.target.files[0],
      }
      setParams(newParams)
      const fileReader = new FileReader()
      if (targetFile && targetFile.type.match('image.*')) {
        fileReader.readAsDataURL(targetFile)
      }
      fileReader.onload = function (e) {
        element.src = e.target.result
      }
    }
  }

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

  // const { step } = useSelector((state) => state.tarifServices)
  // useEffect(() => {
  //   if (step === true) navigate('/tariffs-services')
  // }, [step])

  useEffect(() => {
    dispatch(getServices({ limit: 100 }))
  }, [])

  const services = useSelector((state) => state.services.services)
  console.log(services)

  return (
    <div className="card">
      <div className="card-header">Добавить</div>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <h6>Главное фото</h6>
            <div className="card">
              <div className="card-body">
                <div className="drop-image">
                  {!params.photo && (
                    <>
                      + <br />
                      <span>Загрузить фото</span>
                    </>
                  )}
                  <input
                    type={'file'}
                    id="drop-photo-input"
                    accept="image/png, image/gif, image/jpeg"
                    multiple={false}
                    onChange={(e) => onImageChange(e, document.querySelector('#newsCreateImage'))}
                  />
                  <label htmlFor="drop-photo-input">
                    <img className="card-img-top" src={params.photo} alt="" id="newsCreateImage" />
                  </label>
                </div>
              </div>
            </div>
            {params.photo && (
              <CButton
                className="btn btn-danger text-white w-100 d-flex align-items-center justify-content-center gap-1 mt-2"
                onClick={() => {
                  let newParams = {
                    ...params,
                    photo: '',
                  }
                  setParams(newParams)
                }}
              >
                <CIcon icon={cilTrash} />
                Удалить
              </CButton>
            )}
          </div>
          <div className="col-xl-9">
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
            <h6 className="mt-4">Услуга</h6>
            <select name="service_id" onChange={handleChangeParams} className="form-select">
              <option value="">Выбрать</option>
              {services?.map((item, idx) => (
                <option key={idx} value={item?._id}>
                  {item?.name_ru}
                </option>
              ))}
            </select>
            <h6 className="mt-4">Описание (RU)</h6>
            <SunEditorComponent name="description_ru" onChangeValue={handleSunEditor} />
            <h6 className="mt-4">Описание (UZ)</h6>
            <SunEditorComponent name="description_uz" onChangeValue={handleSunEditor} />
            <h6 className="mt-4">Описание (EN)</h6>
            <SunEditorComponent name="description_en" onChangeValue={handleSunEditor} />
            <CButton
              onClick={() => dispatch(postCreateTarifServices(params))}
              color="primary"
              className="float-end ms-auto mt-4"
            >
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
