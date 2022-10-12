import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHorse } from "../../../redux/getReducer/getHorseSlice";
const RaceTwo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const dispatch = useDispatch()
  const { data: horse } = useSelector((state) => state.horse);
useEffect(()=>{



  dispatch(fetchHorse())


},[dispatch])
 console.log(horse)
 
   const handleNext = () => {
   
    setPage(page + 1);
    setX(1000);
 
}
  return (
<motion.div
       initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className=" container"
    >
      <div className="row container maincontainer">
        <div className="col-sm-12 col-md-6 formMain">
        <select name="Country" className="county"  onChange={(e) =>
              setFormData({ ...formData, Horses: e.target.value })
            }  required>
              <option value="0" className="county">
           
           Select Horse Name
         </option>
{
  horse.map((horse)=>(
<option value={horse._id}>{horse.NameEn} </option>



)

  )}
</select>

          <input
            type="text"
            className="form-group"
            placeholder="Weather"
            required
         value={formData.Weather}
            onChange={(e) =>
              setFormData({ ...formData, Weather: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="RaceStatus"
            value={formData.RaceStatus}
            required
        
            onChange={(e) =>
              setFormData({ ...formData, RaceStatus: e.target.value })
            }
          />
        </div>
       
      </div>

      <div className="btnDivide container">
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>

        <button onClick={handleNext}>Next</button>
      </div>
    </motion.div>
  )
}

export default RaceTwo