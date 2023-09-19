/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Table.css"
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl'
// import {UserData} from './Data'
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
import {addTask } from '../redux/Slice';
import { useDispatch,} from 'react-redux';


const Create  = ({value}) => {
  const dispatch = useDispatch();
    const inputRef = useRef(null)
    const uplodeImage=()=>{
      inputRef.current.click();
    }
    const [Datae, setDatae] = useState([]);

    
    //Over all data
      const [selected, setSelected] = useState();
      const [from, setfrom] = useState({});
      
      const add={
       name:"",
       tag:"",
      image:"",
      };
      const [Data, SetData] = useState(add)
    // file uplode
    const [file, Setfile] = useState()
    
    const uplodeFile=(e)=>{
      e.preventDefault();
    const fileImage= e.target.files[0];
    Setfile((URL.createObjectURL(fileImage)))
    }
    
    //Drop
    const handleDrop=(e)=>{
    e.preventDefault();
    const ImageDrop= e.dataTransfer.files[0]
    Setfile((URL.createObjectURL(ImageDrop)));
    };
    const handleDragOver=(e)=>{
    e.preventDefault();
    };
    
    const fromdata=({...Data,tag:selected,image:file});
    
    // // //api
    const handelfrom=(e)=>{
      e.preventDefault();
      dispatch(addTask({...fromdata}));
      value(true)

    }
    
    
    return (
        <>
          <Container fluid="md">
        <h2 className="h2">Add New Moments</h2>
        <form onSubmit={handelfrom}>
        <div className ="create"> 
        <div className="tag" >
          <TextField  sx={{}}
            id="titel"
            label="Titel"
            value={Data.name}
            onChange={(e)=>SetData({...Data,name: e.target.value})}
          />
          <br/>
          <br/>
    
          <TagsInput 
          className="tag1"
            value={selected}
            onChange={setSelected}
            
            name="TagsInput"
            placeHolder="Tags"
          />
          <em> Add new tag</em>  
    
          <br/>
          <br/>
          <div className="boder"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={ uplodeImage}
           ><img    className="uplode-img" src={upload}/> 
           <input onChange={uplodeFile}   accept="image/*" type ="file" ref={inputRef} hidden/> <br/><span>Dag & Drop Uploade</span>
    <img className="img" src={fromdata.image}/>
           </div>
           <br/>
           <button className="button-63" role="button" type="Submit">Submite</button>
    </div>
    </div>
    </form>
     </Container>
        </>
      )
    }
    
export default Create