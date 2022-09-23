import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostTrainer";
import Header from "../../Components/Common/Header";

const NewsForm = () => {
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
        history('/trainer')
     } catch (error) {
        alert(error.message)
     }
    }
    const areAllFieldsFilled = (image !== undefined) && (Age !== "") && (Detail !== '')
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
       <div className="container maincontainer">
          <div className="row">
            <div className="col-sm-12">
              <form onSubmit={submit}>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-12 ">
                    <input
                      type="Text"
                      className="form-control"
                      placeholder="Title English"
                      name="Trainer Name"
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Trainer Age"
                      required
                      name="Age"
                      onChange={e => setAge(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
                    <input
                      type="Text"
                      className="form-control"
                      placeholder="Detail"
                      name="Detail"
                      onChange={e => setDetail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      name="Remarks"
                      placeholder="Remarks"
                      required
                      onChange={e => setRemarks(e.target.value)}
                    />
                  </div>
                </div>
            

                <div className="formBtnDiv container">
                  <label>
                    Enter your File
                    <input
                      onChange={fileSelected}
                      type="file" accept="image/*"
                      className="fileInput"
                      name="myFile"
                    ></input>
                  </label>
                  <button type="submit" disabled={!areAllFieldsFilled} className="btn btn-primary">
                    Submit
                  </button>
                </div>
                <div className="ImageContainer">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </>
    
  );
};

export default NewsForm;
