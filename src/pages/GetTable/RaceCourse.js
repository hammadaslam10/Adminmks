import React, { useEffect } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchracecourse, STATUSES } from "../../redux/getReducer/getRaceCourseSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostRaceCourse";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'

const News = () => {
  const dispatch = useDispatch();
  const { data: racecourse, status } = useSelector((state) => state.racecourse);
  useEffect(() => {
    dispatch(fetchracecourse());
  }, []);

  const handleRemove =  (Id) => {

    

 dispatch(remove(Id));
 
   fetchracecourse();
 
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Image</th>
                  <th>Country</th>
                  <th>TrackName</th>
                  <th>TrackLength</th>
            <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {racecourse.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.Country}</td>
                        <td>{item.TrackName}</td>
                        <td>{item.TrackLength}</td>
                     
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
        <Link to='/racecourseform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
    </div>
    </>
  );
};
export default News;
