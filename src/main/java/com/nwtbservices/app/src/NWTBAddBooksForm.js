import React from 'react';
import {useForm} from "react-hook-form";
import { Grid,makeStyles,Paper} from '@material-ui/core';
import{Button} from 'react-bootstrap'
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
      marginLeft:'0px',
      marginRight:'0px',
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
        border:'1px solid green',

      },
      label:{
        width:'145px',
        display:'inline-block',
        textAlign:'right',
        color:'#245c24',
        fontWeight:'bold'
      },


      spacing:{
        border:'2px solid #aeaeb5',
        height:'28.5px',
        borderRadius:'6px',
        fontSize:'15px',
        marginLeft:'15px',
        padding:'2px',
        borderColor:'green',
        marginBottom:'0px',

        '&:focus':{
          outline:'none',
        borderColor:'green',
        boxShadow:'0 0 10px green'

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
      grid:{
        border:'2px solid green',
        padding:'15px 35px 15px 35px',
        margin:'5px 5px 5px 5px'

    },
    dic:{
      marginLeft:'15px',
      marginRight:'75px'

    }


}));

function Form(){
    const classes=useStyles();
    const { register,handleSubmit}=useForm();
    const onSubmit=(data)=>{
        console.log(data)
    }
return(
    
  <form   onSubmit={handleSubmit(onSubmit)}>
                
  <div className={classes.dic} >
               
     <Grid container spacing={3}
                      direction="row"
                      justify="center"
                      alignItems="baseline"
                      className={classes.grid}
                >
       
              
       <Grid item xs={12} className={classes.searchInput}style={{marginTOp:'10px'}} >
         
             <Paper elevation={10} className={classes.paper}>
               
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

       <Grid item xs={12}className={classes.searchInput} alignItems="flex-end" >
         <Paper className={classes.paper} elevation={10} >
         <h1 className={classes.h1}> Book info</h1>
         <label>
                  <div className={classes.label}>
                  Title
                  </div>
                   
                   <input className ={classes.spacing}type="text" placeholder="" name="title" ref={register}style={{width:'507px'}}  />
                   
         </label> 
         <div>
         <label>
         <div className={classes.label}>
                  Seq Nr
                  </div>
                   <input className ={classes.spacing}type="text" placeholder="" name="author" ref={register} style={{width:'100px'}}  />
         </label> 
            </div>
            <div>
              <label>
                 <div className={classes.label}>
                  Strike Barcode
                  </div>
                  
                   <input className ={classes.spacing}type="text" placeholder="" name="publisher" ref={register} style={{width:'300px'}}  />
              </label> 
            </div>
   
      
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

