import React from "react";
import Sidebar from "../../Components/Common/Sidebar";
import { STATUSES } from "../../redux/getReducer/getHorseSlice";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { remove } from "../../redux/postReducer/PostNewsSlice";
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link ,useNavigate } from "react-router-dom";
import Header from "../../Components/Common/Header";

const Horse = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data: getHorse, status } = useSelector((state) => state.horse);
  // useEffect(() => {
  //   dispatch(fetchHorse());
  // },[]);
  const handleRemove = (Id) => {
    dispatch(remove(Id));
    history('/horse')
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
    <div className='page'>
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
                  <th>NameEn </th>
                  <th>NameAr </th>
                  <th>PedigreeDetail</th>
                  <th>Owner</th>
                  <th>Breeder</th>
                  <th>Trainer</th>
                  <th>Sex</th>
                  <th>Color</th>
                  <th>KindOfHorse</th>
                  <th>Remarks</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* <tbody>
                {getHorse.map((item, index) => {
                  return (
                    <>
                      <tr className="tr_table_class">
                        <td>{index}</td>
                        <td>
                          <img src={item.image} alt="" />
                        </td>
                        <td>{item.TitleEn}</td>
                        <td>{item.TitleAr}</td>
                        <td>{item.DescriptionEn}</td>
                        <td>{item.DescriptionAr}</td>
                        <td className="table_delete_btn1">
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
              </tbody> */}
            </Table>
          </>
        </div>
        <span className="plusIconStyle">
        <Link to='/horseform'>
        <BsPlusCircleFill style={{
          fontSize:'22px'
        }}/>
        </Link>
        </span>
      </div>
    </div>
    </>
  )
}
export default Horse