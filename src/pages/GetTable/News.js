import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { fetchNews, STATUSES } from "../../redux/getReducer/getNewsSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { MdDelete } from "react-icons/md";
import { remove } from "../../redux/postReducer/PostNewsSlice";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link ,useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";
import {BiEdit} from 'react-icons/bi'


const News = () => {
  const dispatch = useDispatch();
  const [pagenumber,setPageNumber] = useState(1)  

  const previousPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber - 1);
  };
  const nextPageHandler = () => {
    setPageNumber((pagenumber) => pagenumber + 1);
  };
  
  const history = useNavigate();
  const { data: allnews, status } = useSelector((state) => state.news);
  useEffect(() => {
    dispatch(fetchNews({pagenumber}));
  },[]);
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history('/news')
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
                  <th>Title En</th>
                  <th>Title Ar</th>
                  <th>Sub Title En</th>
                  <th>Sub Title Ar</th>
                  <th>Description En</th>
                  <th>Description Ar</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allnews.map((item, index) => {
                  return (
                    <tr className="tr_table_class" key={index}>
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr}</td>
                        <td>{item.SecondTitleEn}</td>
                        <td>{item.SecondTitleAr}</td>
                        
                        <td>{item.DescriptionEn}</td>
                        <td>{item.DescriptionAr}</td>
                        <td className="table_delete_btn1">
                        <BiEdit/>
                          <MdDelete
                            style={{
                              fontSize: "22px",
                            }}
                            onClick={() => handleRemove(item.id)}
                          />
                        </td>
                      </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        </div>
        <span className="plusIconStyle">
        <Link to='/newsform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
    </div>
    <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "space-between",
              }}
            >
              <button
                className="button btn btn-primary"
                onClick={previousPageHandler}
                disabled={pagenumber === 1}
              >
                Previous
              </button>
              <p
                style={{
                  marginTop: "20px",
                }}
              >
                Page {pagenumber}
              </p>
              <button
                className="button btn btn-primary"
                onClick={nextPageHandler}
                disabled={allnews.length <= 1}
              >
                Next
              </button>
            </div>
    </>
  );
};
export default News;
