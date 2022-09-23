import { motion } from "framer-motion";
import { toast } from "react-toastify";

const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const handleNext = () => {
    if (formData.kind && formData.breeder && formData.pedigree !== "") {
      setPage(page + 1);
      setX(1000);
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
            placeholder="kind"
            required
            className="form-group"
            value={formData.kind}
            onChange={(e) => setFormData({ ...formData, kind: e.target.value })}
          />
          <input
            type="text"
            className="form-group"
            placeholder="breeder"
            required
            value={formData.breeder}
            onChange={(e) =>
              setFormData({ ...formData, breeder: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="pedigree"
            required
            value={formData.pedigree}
            onChange={(e) =>
              setFormData({ ...formData, pedigree: e.target.value })
            }
          />
        </div>
        <div className="col-sm-12 col-md-6 DataAr">
          <input
            type="text"
            placeholder="طيب القلب"
            required
            className="form-group"
            value={formData.kindAr}
            onChange={(e) =>
              setFormData({ ...formData, kindAr: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="مربي"
            required
            value={formData.breederAr}
            onChange={(e) =>
              setFormData({ ...formData, breederAr: e.target.value })
            }
          />
          <input
            type="text"
            className="form-group"
            placeholder="النسب"
            required
            value={formData.pedigreeAr}
            onChange={(e) =>
              setFormData({ ...formData, pedigreeAr: e.target.value })
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
  );
};

export default LocationInfo;
