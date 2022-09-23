import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostNewsSlice";
import Header from "../../Components/Common/Header";

const NewsForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [TitleEn,setTitleEn] = useState('')
    const [TitleAr,setTitleAr] = useState('')
    const [SecondTitleEn, setSecondTitleEn] = useState('')
    const [SecondTitleAr,setSecondTitleAr] = useState('')
    const [DescriptionAr,setDescriptionAr] = useState('')
    const [DescriptionEn,setDescriptionEn] = useState('')
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
        formData.append("TitleEn", TitleEn)
        formData.append("TitleAr", TitleAr)
        formData.append("SecondTitleEn", SecondTitleEn)
        formData.append("SecondTitleAr", SecondTitleAr)
        formData.append("DescriptionAr", DescriptionAr)
        formData.append("DescriptionEn", DescriptionEn)
        dispatch(add(formData));
        history('/news');
     } catch (error) {
        alert(error.message)
     }
    }
    const areAllFieldsFilled = (image !== '') && (image !== undefined) && (DescriptionAr !== "") && (DescriptionEn !== '')
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
                      name="TitleEn"
                      value={TitleEn}
                      onChange={e => setTitleEn(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="العنوان عربي"
                      required
                      style={{ direction: "rtl" }}
                      name="TitleAr"
                      onChange={e => setTitleAr(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
                    <input
                      type="Text"
                      className="form-control"
                      placeholder="SubTitle English"
                      name="SecondTitleEn"
                      onChange={e => setSecondTitleEn(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      name="SecondTitleAr"
                      placeholder="العنوان الفرعي عربي"
                      required
                      onChange={e => setSecondTitleAr(e.target.value)}
                      style={{ direction: "rtl" }}
                    />
                  </div>
                </div>
                <div className="form-row formMain">
                  <div className="form-group col-md-5 col-lg-5 col-sm-5 ">
                    <textarea
                      type="Text"
                      className="form-control"
                      placeholder="Description English"
                      name="DescriptionEn"
                      onChange={e => setDescriptionEn(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-5">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="الوصف العربي"
                      style={{ direction: "rtl" }}
                      onChange={e => setDescriptionAr(e.target.value)}
                      name="DescriptionAr"
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
