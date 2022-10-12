import React, { Fragment, useState, useEffect } from "react";
import Header from "../../Components/Common/Header";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchTrainer } from "../../redux/getReducer/getTrainerSlice";
import { add } from "../../redux/postReducer/PostHorse";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchjockey } from "../../redux/getReducer/getJockeySlice";

const HorseForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: trainer } = useSelector((state) => state.trainer);
  const { data: jockey } = useSelector((state) => state.jockey);

  useEffect(() => {
    dispatch(fetchTrainer());
    dispatch(fetchjockey());
  }, [dispatch]);


  const [ActiveOwner, setActiveOwner] = useState("");
  const [Jockey, setJockey] = useState("");
  const [Age, setAge] = useState("");
  const [NameEn, setNameEn] = useState("");
  const [NameAr, setNameAr] = useState("");
  const [Owner, setOwner] = useState("");
  const [ActiveTrainer, setActiveTrainer] = useState("");
  const [ActiveJockey, setActiveJockey] = useState("");
  const [Breeder, setBreeder] = useState("");
  const [Trainer, setTrainer] = useState("");
  const [Remarks, setRemarks] = useState("");
  const [HorseRating, setHorseRating] = useState("");
  const [Sex, setSex] = useState("");
  const [Color, setColor] = useState("");
  const [KindOfHorse, setKindOfHorse] = useState("");
  const [Dam, setDam] = useState("");
  const [Sire, setSire] = useState("");
  const [GSire, setGSire] = useState("");
  const [Earning, setEarning] = useState("");
  const [OverAllRating, setOverAllRating] = useState("");
  const [HorseImage, setHorseImage] = useState();
  const fileSelected = (event) => {
    const image = event.target.files[0];
    setHorseImage(image);
  };
  const submit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("HorseImage", HorseImage);
      formData.append("NameEn", NameEn);
      formData.append("Age", Age);
      formData.append("NameAr", NameAr);
      formData.append("Remarks", Remarks);
      formData.append("ActiveOwner", ActiveOwner);
      formData.append("ActiveJockey", ActiveJockey);
      formData.append("Owner", Owner);
      formData.append("HorseRating", HorseRating);
      formData.append("Jockey", Jockey);
      formData.append("Trainer", Trainer);
      formData.append("ActiveTrainer", ActiveTrainer);
      formData.append("Sex", Sex);
      formData.append("Breeder", Breeder);
      formData.append("Color", Color);
      formData.append("KindOfHorse", KindOfHorse);
      formData.append("Dam", Dam);
      formData.append("Sire", Sire);
      formData.append("GSire", GSire);
      formData.append("Earning", Earning);
      formData.append("OverAllRating", OverAllRating);
      console.log('My Data',formData)
      dispatch(add(formData));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="page">
        <Sidebar />
        <div className="rightsidedata">
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <div className="Headers">Add Horse</div>
            <div className="form">
              <form onSubmit={submit}>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Horse Name"
                      onChange={(e) => setNameEn(e.target.value)}
                      name="Name"
                      value={NameEn}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="اسم "
                      onChange={(e) => setNameAr(e.target.value)}
                      name="Name"
                      value={NameAr}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Age"
                      onChange={(e) => setAge(e.target.value)}
                      name="Name"
                      value={Age}
                      required
                      type="number"
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      type="number"
                      placeholder="Age"
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Sex"
                      onChange={(e) => setSex(e.target.value)}
                      value={Sex}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Sex"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Color"
                      onChange={(e) => setColor(e.target.value)}
                      value={Color}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Color"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Sire"
                      onChange={(e) => setSire(e.target.value)}
                      value={Sire}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Sire"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Dam"
                      onChange={(e) => setDam(e.target.value)}
                      value={Dam}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Dam"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Grand Sire"
                      onChange={(e) => setGSire(e.target.value)}
                      value={GSire}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Grand Sire"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Horse Kind"
                      onChange={(e) => setKindOfHorse(e.target.value)}
                      value={KindOfHorse}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Horse Kind"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Owner"
                      onChange={(e) => setOwner(e.target.value)}
                      value={Owner}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder=" Owner"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder=" Active Owner"
                      onChange={(e) => setActiveOwner(e.target.value)}
                      value={ActiveOwner}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="  Active Owner"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Breeder"
                      onChange={(e) => setBreeder(e.target.value)}
                      value={Breeder}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Breeder"
                      style={{ direction: "rtl" }}
                    ></input>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setTrainer(e.target.value)}
                      value={Trainer}
                    >
                      <option >Select Trainer </option>
                      {trainer.map((trainer) => (
                        <option value={trainer._id}>{trainer.Name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option >Select Trainer </option>
                      {trainer.map((trainer) => (
                        <option value={trainer._id}>{trainer.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setActiveTrainer(e.target.value)}
                      value={ActiveTrainer}
                    >
                      <option >Select Active Trainer </option>
                      {trainer.map((trainer) => (
                        <option value={trainer._id}>{trainer.Name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option >Select Active Trainer </option>
                      {trainer.map((trainer) => (
                        <option value={trainer._id}>{trainer.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setJockey(e.target.value)}
                      value={Jockey}
                    >
                      <option >Select jockey </option>
                      {jockey.map((jockey) => (
                        <option value={jockey._id}>{jockey.Name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option >Select jockey </option>
                      {jockey.map((jockey) => (
                        <option value={jockey._id}>{jockey.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <select
                      onChange={(e) => setActiveJockey(e.target.value)}
                      value={ActiveJockey}
                    >
                      <option >Select Active jockey </option>
                      {jockey.map((jockey) => (
                        <option value={jockey._id}>{jockey.Name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="col-sm">
                    <select style={{ direction: "rtl" }}>
                      <option >Select Active jockey </option>
                      {jockey.map((jockey) => (
                        <option value={jockey._id}>{jockey.Name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Earning"
                      type="number"
                      onChange={(e) => setEarning(e.target.value)}
                      value={Earning}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder=" Earning"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Horse Rating"
                      type="number"
                      onChange={(e) => setHorseRating(e.target.value)}
                      value={HorseRating}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Horse Rating "
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Over All Rating"
                      type="number"
                      onChange={(e) => setOverAllRating(e.target.value)}
                      value={OverAllRating}
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      placeholder="Over All Rating"
                      style={{ direction: "rtl" }}
                      type="number"
                    ></input>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm">
                    <input
                      placeholder="Remarks"
                      onChange={(e) => setRemarks(e.target.value)}
                      name="Remarks"
                      value={Remarks}
                      required
                    ></input>
                  </div>

                  <div className="col-sm">
                    <input
                      style={{ direction: "rtl" }}
                      placeholder="طول المسار"
                    ></input>
                  </div>
                </div>

                <div className="ButtonSection">
                  <input type="file" size="60" onChange={fileSelected} />
                  <button type="submit" className="SubmitButton">
                    Add Horse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HorseForm;
