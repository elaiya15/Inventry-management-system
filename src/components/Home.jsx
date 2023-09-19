/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SlideNave from './sidebar/SideNave'
import Table from "./Table/Table";
import Create from "./Table/Create";
import { useState,useEffect } from 'react';
import './home.css'
import{useNavigate} from "react-router-dom"; 


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const navigate = useNavigate();

  const auth=localStorage.getItem("token")

  useEffect(() => {
   if (!auth){
         return navigate("/")
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[auth]);

   const logout=()=>{
    localStorage.removeItem("token")
    navigate("/")
  }


const [state, setState] = useState(true)
  return (
    <>
    {auth?
    <div className="elaiya">
    <div className="logout" ><button className="button-8" role="button" onClick={logout}> Logout</button></div>
    
     <Box sx={{ flexGrow: 1    , height:200
}}>
        {/* <div></div>    */}
        {/* <div></div>    */}
        {/* <div>     */}
      <Grid container spacing={2} >
      {/* <div className="hel1"> */}
        <Grid item xs={3}>
          <SlideNave value={(e)=>setState(e)}/>  
        </Grid>
        {/* </div>  */}
         
        <Grid item xs={9}>
           {state?<Table/>:<Create value={(e)=>setState(e)}/>}
        </Grid>
      </Grid>
    </Box>
    </div>: <></>}


    </>
  )
}
