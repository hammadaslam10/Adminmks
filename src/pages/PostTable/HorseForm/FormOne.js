import { motion } from "framer-motion";
import { toast } from "react-toastify";
const SignUp = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleNext = () => {
    if (
      formData.fullName &&
      formData.age &&
      formData.weight !== "" &&
      formData.fullnameAr &&
      formData.ageAr &&
      formData.weight !== ""
    ) {
      setPage(page + 1);
      setX(1000);
    } else {
      toast.error("Please fill the field");
    }
  };

  return (
    <motion.div
      initial={{ x: x }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className=" container"
    >
      <div className="row container maincontainer">
        <div className="col-sm-12 col-md-6 formMain">
          <input
            type="text"
            placeholder="Name"
            required
            className="form-group"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <input
            type="number"
            className="form-group"
            placeholder="Age"
            required
            value={formData.age < 40 ? formData.age : null}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <input
            type="number"
            className="form-group"
            placeholder="Weight"
            required
            value={formData.weight}
            onChange={(e) =>
              setFormData({ ...formData, weight: e.target.value })
            }
          />
        </div>
        <div className="col-sm-12 col-md-6 DataAr">
          <input
            type="text"
            placeholder="الاسم الكامل"
            required
            className="form-group"
            value={formData.fullnameAr}
            onChange={(e) =>
              setFormData({ ...formData, fullnameAr: e.target.value })
            }
          />
          <input
            type="number"
            className="form-group"
            placeholder="سن"
            required
            value={formData.ageAr}
            onChange={(e) =>
              setFormData({ ...formData, ageAr: e.target.value })
            }
          />
          <input
            type="number"
            className="form-group"
            placeholder="وزن"
            required
            value={formData.weightAr}
            onChange={(e) =>
              setFormData({ ...formData, weightAr: e.target.value })
            }
          />
        </div>
      </div>
      <div className="container btndiv">
        <button onClick={handleNext}>Next</button>
      </div>
    </motion.div>
  );
};

export default SignUp;
