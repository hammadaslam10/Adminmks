import { motion } from "framer-motion";
import { toast } from "react-toastify";

const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleSubmit = () => {
    if (formData.color && formData.earning && formData.price !== "") {
      toast.success("Submit");
      setPage(page - 2);
      setX(1000);
      console.log(formData);
      setFormData({
        fullName: "",
        age: "",
        weight: "",
        fullnameAr: "",
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
    } else {
      toast.error("Please fill the field");
    }
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
            placeholder="color"
            required
            className="form-group"
            value={formData.color}
            onChange={(e) =>
              setFormData({ ...formData, color: e.target.value })
            }
          />
          <input
            type="number"
            className="form-group"
            placeholder="earning"
            required
            value={formData.earning}
            onChange={(e) =>
              setFormData({ ...formData, earning: e.target.value })
            }
          />
          <input
            type="number"
            className="form-group"
            placeholder="price"
            required
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>
        <div className="col-sm-12 col-md-6 DataAr">
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
            value={formData.age}
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
  );
};

export default OtherInfo;
