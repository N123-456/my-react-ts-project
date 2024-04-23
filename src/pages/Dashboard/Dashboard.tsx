import { Button } from '@mantine/core';
import React from 'react';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
const navigate=useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
   <Button onClick={() => navigate("/product")} size='md' radius='md' >Click Me</Button>
    </div>
  );
}

export default Dashboard;
