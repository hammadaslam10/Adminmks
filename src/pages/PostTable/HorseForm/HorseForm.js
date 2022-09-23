import { useState } from "react";
import HorseData from "./FormOne";
import NextForm from "./FormTwo";
import OtherInfo from "./FormThree";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../Components/CSS/horse.css'
import Sidebar from "../../../Components/Common/Sidebar";
import Header from "../../../Components/Common/Header";
function App() {
   const [page, setPage] = useState(0);

   const [x, setX] = useState(0);

   const [formData, setFormData] = useState({
     NameEn: "",
     age: "",
     weight: "",
     NameAr:'',
     ageAr: "",
     weightAr: "",
     kind: "",
     breeder: "",
     pedigree: "",
     kindAr: "",
     breederAr: "",
     pedigreeAr: "",
     color: "",
     earning: "",
     price: "",
     colorAr: "",
     earningAr: "",
     priceAr: "",
   });
  

   const componentList = [
   <HorseData
       formData={formData}
       setFormData={setFormData}
       page={page}
       setPage={setPage}
     x={x}
       setX={setX}
   />,
     <NextForm
       formData={formData}
       setFormData={setFormData}
       page={page}
       setPage={setPage}
       x={x}
       setX={setX}
     />,
     <OtherInfo
       formData={formData}
       setFormData={setFormData}
       page={page}
       setPage={setPage}
       x={x}
       setX={setX}
     />,
   ];
 
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
        <h2>Horse Form</h2>
        <div>
      <div className="progress-bar">    
      <div
            style={{
              width:
                page === 0
                  ? "33%"
                  : page === 1
                  ? "66%"
                  : page === 2
                  ? "100%"
                  : "100%",
            }}
          ></div>
        
      </div>
      <div className="body">{componentList[page]}</div>
      <ToastContainer /> 
  </div>
      </div>
    </div>
    
  </div>
    </>
    
  );
}

export default App;
