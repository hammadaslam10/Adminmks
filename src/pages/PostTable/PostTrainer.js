import React, { useState, Fragment } from "react";
import "../../Components/CSS/forms.css";

import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostTrainer";
import Header from "../../Components/Common/Header";

const TrainerForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Name,setName] = useState('')
  const [Age,setAge] = useState('')
  const [Detail, setDetail] = useState('')
  const [Remarks,setRemarks] = useState('')

  const [image,setImage] = useState()
  const fileSelected = event => {
    const image = event.target.files[0]
    setImage(image)
  }
  const submit = async event => {
    event.preventDefault()
   try {
      const formData = new FormData();
      formData.append("image", image)
      formData.append("Name", Name)
      formData.append("Age", Age)
      formData.append("Detail", Detail)
      formData.append("Remarks", Remarks)
     
      dispatch(add(formData));
      history('/trainer');
   } catch (error) {
      alert(error.message)
   }
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


              Add Trainer



            </div>
            <div className='form'>
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder=' Name' onChange={e => setName(e.target.value)} name='Name' value={Name}

                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="اسم "></input>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Age' onChange={e => setAge(e.target.value)} name='Name' value={Age}
                      required
                      type='number'
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} type='number' placeholder="اسم المسار"></input>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <textarea placeholder="Detail" name='Detail' onChange={e => setDetail (e.target.value)} value={Detail}></textarea>

                  </div>


                  <div className="col-sm">
                    <textarea placeholder="Detail"></textarea>

                  </div>

                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input placeholder='Remarks' onChange={e => setRemarks(e.target.value)} name='Remarks' value={Remarks}
                      required
                    ></input>

                  </div>

                  <div className="col-sm">
                    <input style={{ direction: "rtl" }} placeholder="طول المسار"></input>
                  </div>

                </div>
             







                <div className='ButtonSection'>

                  <input type="file" size="60" onChange={fileSelected} />
                  <button type='submit' className='SubmitButton'>Add Trainer</button>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>



    </Fragment>

  );
};

export default TrainerForm;
