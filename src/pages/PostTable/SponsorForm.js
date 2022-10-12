import React, { useState } from "react";
import "../../Components/CSS/forms.css";
import Sidebar from "../../Components/Common/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../redux/postReducer/PostNewsSlice";
import Header from "../../Components/Common/Header";

const SponsorForm = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [TitleEn,setTitleEn] = useState('')
    const [TitleAr,setTitleAr] = useState('')
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
 
        formData.append("DescriptionAr", DescriptionAr)
        formData.append("DescriptionEn", DescriptionEn)
        dispatch(add(formData));
        history('/ads')
     } catch (error) {
        alert(error.message)
     }
    }
    const areAllFieldsFilled = (image !== undefined) && (DescriptionAr !== "") && (DescriptionEn !== '')
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
      >              <div className='Headers'>


      Add Sponsor



    </div>
    <div className='form'>
      <form onSubmit={submit}>
        <div className="row ">
          <div className="col-sm">
            <input placeholder=' TitleEn' onChange={e => setTitleEn(e.target.value)} name='Name' value={TitleEn}

              required
            ></input>

          </div>

          <div className="col-sm">
            <input style={{ direction: "rtl" }} placeholder="اسم "  onChange={e => setTitleAr(e.target.value)} name='Name' value={TitleAr}></input>

          </div>

        </div>
       
        <div className="row ">
          <div className="col-sm">
            <textarea placeholder="Detail" name='Detail' onChange={e => setDescriptionEn (e.target.value)} value={DescriptionEn}></textarea>

          </div>


          <div className="col-sm">
            <textarea placeholder="Detail" name='Detail' onChange={e => setDescriptionAr (e.target.value)} value={DescriptionAr}></textarea>

          </div>


        </div>
      
     







        <div className='ButtonSection'>

          <input type="file" size="60" onChange={fileSelected} />
          <button type='submit' className='SubmitButton' disabled={areAllFieldsFilled}>Add Sponsor</button>

        </div>
      </form>
    </div>
  </div>


</div>
</div>
   </>
    
  );
};

export default SponsorForm;
