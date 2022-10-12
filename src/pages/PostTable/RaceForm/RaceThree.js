import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../../../redux/postReducer/postRace";



const RaceThree = ({ formData, setFormData, page, setPage, x, setX }) => {

  const dispatch = useDispatch()
  const history = useNavigate()

  const handleSubmit = () => {
    dispatch(add(formData))
    history('/races')

    console.log(formData);


    setFormData({
      raceName: "",
      RaceKind: "",
      Description: "",
      RaceCourse: "",
      Weather: "",
      Horses: '',
      KindOfHorse: "",


    });

  };

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className=" container"
    >
      <div className="row container maincontainer">
        <div className="col-sm-12 col-md-6 formMain">
          <input
            type="text"
            placeholder="DayNTime"
            required
            className="form-group"
            value={formData.DayNTime}
            onChange={(e) =>
              setFormData({ ...formData, DayNTime: e.target.value })
            }
          />


        </div>

      </div>
      <div className="container btnDivide">
        <button
          onClick={() => {
            setPage(page - 1);
            setX(-1000);
          }}
        >
          Previous
        </button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </motion.div>

  )
}

export default RaceThree