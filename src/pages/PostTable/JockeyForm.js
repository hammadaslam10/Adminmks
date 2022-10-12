import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostJockey";
import Header from "../../Components/Common/Header";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')
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
        dispatch(add(formData));
        history('/jockey')
     } catch (error) {
        alert(error.message)
     }
    }
    const areAllFieldsFilled = (image !== undefined) && (Age !== "")
  return (
    <>
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


              Add Jockey



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
               
              







                <div className='ButtonSection'>

                  <input type="file" size="60" onChange={fileSelected} />
                  <button type='submit' className='SubmitButton' disabled={areAllFieldsFilled}>Add Jockey</button>

                </div>
              </form>
            </div>
          </div>


        </div>
      </div>

    </>
    
  );
};

export default NewsForm;
