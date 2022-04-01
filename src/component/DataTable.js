import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../component/Header';
import Footer from '../component/Footer';


const columns = [
    { field: 'id', headerName: 'Job ID', width: 70 },
    { field: 'Operator', headerName: 'Operator', width: 90},
    { field: 'CreationTime', headerName: 'Creation Date & Time', width: 200},
    { field: 'Priority', headerName: 'Priority', width: 90},
    { field: 'Tasks', headerName: 'Number of Task', width: 130},
    { field: 'TasksEnded', headerName: 'Ended Task', width: 120},
    { field: 'TasksRunning', headerName: 'Running Task', width: 120},
    { field: 'TasksEndedWithError', headerName: 'Error Tasks', width: 120},
    { field: 'TasksWaiting', headerName: 'Waiting Tasks', width: 120},
    { field: 'JobType', headerName: 'Job Type', width: 150},
    { field: 'JobName', headerName: 'Job Name', width: 200}
];

export default function DataTable() {
    const [alljobs, setAlljobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const getPosts = async () => {
      setIsLoading(true)
      const res = await axios.get("http://abiesrvgcs02/qs2.webapi/api/getalljobs")
      const contacts = res.data
      const transformed = contacts.map(({ JobId, Operator, CreationTime, Priority, Tasks, TasksEnded, TasksRunning, JobType, JobName, TasksEndedWithError, TasksWaiting }) =>
        ({ id: JobId, 
          Operator: Operator, 
          CreationTime: CreationTime, 
          Priority: Priority, 
          Tasks: (TasksEnded + TasksRunning + TasksEndedWithError + TasksWaiting), 
          TasksEnded: TasksEnded, 
          TasksRunning: TasksRunning, 
          JobType: JobType, 
          JobName: JobName, 
          TasksEndedWithError: TasksEndedWithError, 
          TasksWaiting: TasksWaiting }));
      console.log(transformed);
      setIsLoading(false)
      setAlljobs(transformed) 
    };

    useEffect(()=>{
      getPosts()
      const interval=setInterval(()=>{
        getPosts()
        },10000)
      return()=>clearInterval(interval)     
      },[])
    console.log(alljobs);

    return (
    <div>
      <Header />
        <br />
        <br />
        <br />
      <Container maxWidth="lg" style={{ float: 'right'}}>
        <Stack direction ="row" spacing ={2} paddingLeft= "600px">
            <Button variant="contained">Create job</Button>
            <Button variant="contained" disabled>Delete</Button>  
            <Button variant="contained" disabled>Pause</Button>
            <Button variant="contained" disabled>Stop</Button>
            <Button variant="contained" disabled>Restart</Button>
        </Stack>
      </Container>
      <div style={{ height: 700, width: '100%' }}> 
        {isLoading}
        <br />
        <br />
        <br />
        <Typography variant="h6" component="div" style={{ width: '100%' }}>
           All Jobs information
        </Typography>
        <DataGrid
        spacing={10}
          rows={alljobs}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
        <Footer />
      </div>  
    </div>
    );
}