/* eslint-disable no-unused-vars */
import React from 'react'
import "./Table.css"
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl'
import EditButton from './EditButton.jsx'

// eslint-disable-next-line no-unused-vars
import TextField from '@mui/material/TextField'
// import avatar from "./avatar.png"
import { useState,useRef} from 'react';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { TagsInput } from "react-tag-input-component";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import upload from './image/upload.svg'
import{useNavigate} from "react-router-dom"; 

import {  useSelector} from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

  
const columns = [
  { field: 'id', headerName: 'ID', width: 70,height: 60 },
  { field: 'image', headerName: 'Image', width: 150, height: 60, 
renderCell:(params)=> 
 <Avatar
alt="avatar.png"
src={params.row.image}
sx={{ width: 51, height: 51,}}
/>,
sortable:false,
filterable:false, },
  { field: 'name', headerName: 'Name', width: 130 ,},
  { field: 'tag', headerName: 'Tages', width: 130},
  { field: 'action', headerName: 'Action',width: 290 ,height: 10,position:"relative",top:"110px",
  renderCell:(params)=><EditButton values={params.row}/> ,
  sortable:false,
  filterable:false,
},

];
 




// eslint-disable-next-line react/prop-types
const Table = () => {
  
  const {taskList} = useSelector((state)=>state.task);
// console.log(TaskList);

// const [Data, setData] = useState(taskList)
// console.log(Data);

// useEffect(() => {
//   setData(TaskList)
// console.log("update")
// }, []);

const navigate =useNavigate();



  return (
    
       <div className="table">
       
       <h2>Moments</h2>
       <div  style={{ height: 500, width: '100%' }}>

      <DataGrid 
      
        rows={taskList}
        columns={columns}
        
       
        initialState={{
        
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}

        disableRowSelectionOnClick
        // aria-selected="false"
        // selected="false"
      />
    </div>
    </div>
   
  )
}
export default Table





















                  // Create









