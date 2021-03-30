import React from 'react';
import {useForm} from "react-hook-form"
import { Grid,makeStyles,Paper} from '@material-ui/core';
import{Button,Alert,Col,Row,Container} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';



const inputProps = {
  step: 300,
  siz:'small'
};


const useStyles=makeStyles(theme=>({

    inputbase:{
      border:'2px solid green',
      marginLeft:'155px',
      borderRadius:theme.shape.borderRadius,
      height:"5vh",
      '&:hover':{
        backgroundColor:'#b5f5d2'
    }

    },
    searchInput:{
        
        padding:'3px 3px',
        marginTOp:'10px',
        marginLeft:'15px',
        marginRight:'15px',
        },
        
        paper:{
          textAlign:"justify",
          padding:'14px',
          border:'2px solid green',
        },

        h1:{
          fontSize:'15px',
          width:'110px',
          marginTop:'-25px',
          marginLeft:'55px',
          background:'white',
          textAlign: 'center',
          color:'white',
          backgroundColor:'#426e4d',
          border:'2px solid green',

        },
        label:{
          width:'100px',
          display:'inline-block',
          textAlign:'right',
          color:'#245c24',
          fontWeight:'bold'
      
        },
        label2grid:{
          width:'200px',
          display:'inline-block',
          textAlign:'right',
          marginTop:'15px',
          color:'#245c24',
        fontWeight:'bold'
          
  
        },

        spacing:{
          
          border:'2px solid #aeaeb5',
          height:'28.5px',
          borderRadius:'6px',
          fontSize:'15px',
          marginLeft:'10px',
          padding:'2px',
          borderColor:'green',
          marginBottom:'8px',
          
          
          '&:focus':{
            outline:'none',
          borderColor:'green',
          boxShadow:'0 0 10px #27572b'

          }
      

        },
    
        button:{
          backgroundColor:'green',
          marginTOp:'10px',
          marginLeft:'15px',
          marginRight:'15px',
          '&:hover': {
            backgroundColor: 'green',
            borderColor: 'green',
            boxShadow: 'none',
           
        },
       

      },
      div:{
        paddingLeft:'30px',
        paddingRight:'40px',
        paddingTop:'1px',
        paddingBottom:'200px',
        marginTop:'25px',
        marginBottom:'20px'

      },
      grid:{
        border:'2px solid green',
       padding:'0px 5px 5px 5px'
      }

    
}));

function Form(){
    const classes=useStyles();
    const { register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
return(
    
    
    
    
   <form className={classes.searchInput}  onSubmit={handleSubmit(onSubmit)}>
                
   <div className={classes.div}>
                
  <Grid container spacing={3}
                       direction="row"
                       justify="center"
                       alignItems="baseline"
                       className={classes.grid} >     
        <Grid item xs={12} className={classes.searchInput}style={{marginTOp:'10px'}} >
                 <Paper elevation={10} className={classes.paper} >
                   <label>
                       <div className={classes.label}>Book code</div>
                       <input className ={classes.spacing}type="text" name="bookCode" ref={register} />
                   </label>
                   <label >
                   <div className={classes.label}>Book Year</div>
                       <input className ={classes.spacing}type="text" placeholder="" name="bookYear" ref={register} />
                   </label>        
             </Paper>
            </Grid>
        
        <Grid item xs={6}className={classes.searchInput} alignItems="flex-end" >
          <Paper className={classes.paper} elevation={10} >
          <h1 className={classes.h1}> Book info</h1>
                  <label>
                       <div className={classes.label}>Title</div>
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'400px',}}  />
                   </label>
                   <label>
                       <div className={classes.label}>Author</div>
                       <input className ={classes.spacing}type="text" name="author" ref={register}style={{width:'400px',}}  />
                   </label>
                   <label>
                       <div className={classes.label}>Publisher</div>
                       
                       <input className ={classes.spacing}type="text" name="publisher" ref={register}style={{width:'400px',}}  />
                   </label>
                   <label>
                       <div className={classes.label}>ISBN#:</div>
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'160px',}}  />

                       <div className={classes.label}>Cost:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'130px',}}  />
                   </label>
                   <label>
                       <div className={classes.label}>Status:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'50px',}}  />

                       <div style={{display:'inline-block',marginLeft:'60px'}}> Purchased Date:</div>
                       <input className ={classes.spacing}type="date" name="title" ref={register}style={{width:'165px',}}  />

                   </label>
                   <label>
                       <div className={classes.label}>Discontinued:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'112px',}}  />

                       <div style={{display:'inline-block',marginLeft:'13px'}}> First Used Date:</div>
                       <input className ={classes.spacing}type="date" name="title" ref={register}style={{width:'29%',}}  />

                   </label>
                   <label>
                       <div className={classes.label}>Date Commented</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'395px',}}  />
                   </label>
       
          </Paper>
          <Grid item xs={12} className={classes.searchInput} style={{marginTop:'12px'}} >
          <Paper className={classes.paper} elevation={10} >
          <h1 className={classes.h1}> Course Info</h1>
          <label>
                       <div className={classes.label}>Course Title</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'368px',}}  />
           </label>
           <label>
                       <div className={classes.label}>Course1:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'144px',}}  />

                       
                      
                       <div style={{display:'inline-block',marginLeft:'8px',color:'#245c24', fontWeight:'bold'}}> course4:</div>
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'144px',}}  />

            </label>
            <label>
                       <div className={classes.label}>Course2:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'145px',}}  />

                       
                      
                       <div style={{display:'inline-block',marginLeft:'8px',color:'#245c24', fontWeight:'bold'}}> course5:</div>
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'145px',}}  />

            </label>
            <label>
                       <div className={classes.label}>Course3:</div>
                       
                       <input className ={classes.spacing}type="text" name="title" ref={register}style={{width:'145px',}}  />
            </label>
        
        
    
          </Paper>
        </Grid>
        </Grid>

        <Grid item xs={5}className={classes.searchInput}alignItems="right" >
          <Paper className={classes.paper} elevation={10} >
          <h1 className={classes.h1}> Book stats</h1>
          <label>
                       <div className={classes.label2grid}>Books purchased:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books Sold:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books Unrepairable:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books Nonreturned:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books In Inventory:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books Checked Out:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Books Checked In:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>
            <label>
                       <div className={classes.label2grid}>Last Sequence Number:</div>
                       
                       <input className ={classes.spacing}type="number" placeholder="0" name="title" ref={register}style={{width:'70px',}}  />
            </label>

         
          <div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
    
          </Paper>
        </Grid>
        
 
    
        <Grid item xs={12}>
        <Button style={{backgroundColor:'green',height:"35px", width:'100px'}}>&nbsp;Save&nbsp;</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button style={{backgroundColor:'green',height:"35px", width:'100px'}}>Clear</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button style={{backgroundColor:'green',height:"35px", width:'100px'}}>Main Menu</Button>

        </Grid>

       
      </Grid>
    
  
      </div> 
       
    </form>
);

}
export default Form;

