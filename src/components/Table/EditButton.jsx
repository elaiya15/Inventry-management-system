/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react'
import'./EditButton.css'
import { useDispatch,} from 'react-redux';
import {delectTask } from '../redux/Slice';



const EditButton = ({values}) => {
   const dispatch = useDispatch();
   const handleDeleted=(id)=>{ 
      dispatch(delectTask({id}));
   }
  return (
   <>
 
   <div  className="button" >
   
   {/* <button className="button-81" role="button" onClick={() => handleEdit({values})}> Edit</button> */}
    <TransitionsModal values={values}/>
    <button className="button-81" role="button" onClick={() => handleDeleted(values.id)}>Delete</button>

   </div>

   </>
   
  )
}

export default EditButton







// update




import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField'
import { useState,useRef} from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { TagsInput } from "react-tag-input-component";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudArrowUp} from '@fortawesome/free-solid-svg-icons';
import upload from './image/upload.svg'
import {listUpdate,updateTask } from '../redux/Slice';


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 500,
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid green',
  boxShadow: 24,
  p:4,
  overflow: 'scroll',
};


export const  TransitionsModal = ({values}) => {
  const navigate = useNavigate();
   const {selectedTask} = useSelector((state)=>state.task);
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = (values) => {

  dispatch(listUpdate(values));

  if (selectedTask.length!==0) {
   setOpen(true);}
  }
   // setOpen(true);}

  const handleClose = () => setOpen(false);


  const dispatch = useDispatch();
  const inputRef = useRef(null)
  const uplodeImage=()=>{
    inputRef.current.click();
  }
  const [Datae, setDatae] = useState([]);

  
  //Over all data
    const [selected, setSelected] = useState();
  
    const add={
      id:"",
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
  
  const fromdata=({...Data,tag:selected,image:file,id:selectedTask.id});
  
  // // //api
  const handelfrom=(e)=>{
    e.preventDefault();
    dispatch(updateTask({...fromdata}));
    setOpen(false)
   
  }
 
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button className="button-81" role="button" onClick={()=>handleOpen(values)}> Edit</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           
        <div className ="create"> 
        <div className="tag" >
          <TextField  sx={{}}
            id="titel"
            label={selectedTask.name}
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
          <em> Add new tag : &nbsp; {selectedTask.tag}</em>
          {/* <em>{selectedTask.name} </em>   */}
    
          <br/>
          <div className="boder"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={ uplodeImage}
           ><img    className="uplode-img" src={upload}/> 
           <input onChange={uplodeFile}   accept="image/*" type ="file" ref={inputRef} hidden/> <br/><span>Dag & Drop Uploade</span><br/>
    <img className="imgage" src={fromdata.image}  />
   
           </div>
           <br/>
           <button className="button-63" role="button" onClick={handelfrom}>Submite</button>
    </div>
    </div>
   






          </Box>
        </Fade>
      </Modal>
    </div>
  );
}














