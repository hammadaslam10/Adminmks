import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchjockey,STATUSES } from "../../redux/getReducer/getJockeySlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove,add } from "../../redux/postReducer/PostJockey";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'

const Statistic = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: jockey, status } = useSelector((state) => state.jockey);
  useEffect(() => {
    dispatch(fetchjockey());
  }, []);
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history("/jockey");
  };
  if (status === STATUSES.LOADING) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Loading....
      </h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
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
          <>
            <Table striped bordered hover>.
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>JockeyName</th>
                  <th>Age</th>
                  <th style={{textAlign:'right'}}>Action</th>
                </tr>
              </thead>
              <tbody>
                {jockey.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.TrackName}</td>
                        <td>{item.TrackNameAr}</td>
                        <td className="table_delete_btn1">
                         <BiEdit/>
                          <MdDelete
                            style={{
                              fontSize: "22px",
                            }}
                            onClick={() => handleRemove(item._id)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </>
        </div>
        <span className="plusIconStyle">
          <Link to="/jockeyform">
            <BsPlusCircleFill
              style={{
                fontSize: "22px",
              }}
            />
          </Link>
        </span>
      </div>
    </div>
   </>
  );
};
export default Statistic;
