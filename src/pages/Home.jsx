import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";

const Home = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  if (!user) {
    navigate("/authentication");
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <Box sx={{ height: 900, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={DataTable}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
          sx={{ padding: 1 }}
        />
      </Box>
    </div>
  );
};

export default Home;
