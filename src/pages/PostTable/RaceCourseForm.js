
import React, { Fragment, useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostRaceCourse";
import Header from "../../Components/Common/Header";
import { Country_Name } from '../../Data/Country'
import { Country_NameAr } from '../../Data/Country'


const RaceCourseForm = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const [TrackName, setTrackName] = useState('')
  const [TrackLength, setTrackLength] = useState('')
  const [Country, setCountry] = useState('')


  const [image, setImage] = useState()
  const fileSelected = event => {
    const image = event.target.files[0]
    setImage(image)
  }
  const submit = async event => {
    event.preventDefault()
    try {
      const formData = new FormData();
      formData.append("image", image)
      formData.append("TrackName", TrackName)
      formData.append("TrackLength", TrackLength)
      formData.append("Country", Country)

      dispatch(add(formData));
      history('/racecourse');
    } catch (error) {
      alert(error.message)
    }
  }
  const ArbicDirection = {

    direction: 'rtl',
    marginRight: '0px',
    paddingLeft: '220px',
    width: '105%'

  }
  const EnglishDirection = {


    marginRight: '0px',
    paddingLeft: '220px',
    width: '105%'

  }


  return (
    <Fragment>
      <Header />
      <div className="page">
        <Sidebar />
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className='Headers'>


              Add Race Course



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Track Name' onChange={e => setTrackName(e.target.value)} value={TrackName}
                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم المسار"></input>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Track Length'  onChange={e => setTrackLength(e.target.value)} value={TrackLength}
                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="طول المسار"></input>
                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select onChange={e => setCountry(e.target.value)} value={Country} required>
                      <option value='0' style={EnglishDirection}>Select Country</option>
                      {
                        Country_Name.map((countryName) => (


                          <option>{countryName.country_name} </option>

                        ))



                      }
                    </select>

                  </div>

                  <div className="col-sm">
                    <select style={ArbicDirection}>
                      <option value='0'>حدد الدولة</option>
                      {
                        Country_NameAr.map((countryName) => (


                          <option>{countryName.name} </option>

                        ))

                      }


                    </select>
                  </div>

                </div>







                <div className='ButtonSection'>

                  <input type="file" size="60" onChange={fileSelected}
                  />
                  <button type='submit' className='SubmitButton'>Add Race Course</button>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>



    </Fragment>
  )
}

export default RaceCourseForm;


