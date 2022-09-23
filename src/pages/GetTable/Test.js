import React, { useEffect } from "react";
import Table from "../../Components/Table";
import { fetchTrainer, STATUSES } from "../../redux/getReducer/getTrainerSlice";
import { useDispatch, useSelector } from "react-redux";

const HorseDetails = () => {
  const dispatch = useDispatch();
  const { data: trainer, status } = useSelector((state) => state.trainer);
  useEffect(() => {
    dispatch(fetchTrainer());
  }, []);
  const columns = [
    { field: "_id", header: "ID" },
    { field: "Name", header: "Name" },
    { field: "Age", header: "Age" },
    { field: "Remarks", header: "Remarks" },
    { field: "Detail", header: "Detail" },
  ];

  return <Table data={trainer} column={columns} />;
};

export default HorseDetails;
