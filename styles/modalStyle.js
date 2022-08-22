import { makeStyles } from "@material-ui/core";
import { textAlign } from "@mui/system";

const useStyles = makeStyles((theme)=>{
  return {
    modalContainer:{
        width:"100%",
        height:"694px",
        marginTop:"2%",
        backgroundColor:"#FFFFFF",
        padding:"10% 5%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        [theme.breakpoints.down('sm')]:{
            padding:"3%",
            height:"600px",
            marginTop:"15%",
        },
    },
    typo1:{
        fontSize:"36px",
        fontWeight:"400",
        color: "#909090",
        lineHeight:"139%",
        margin:"0% 0% 5% 0%",
        [theme.breakpoints.down('sm')]:{
            fontSize:"24px",
        },
    },
    typo2:{
        fontSize:"22px",
        fontWeight:"700",
        lineHeight:"227%",
        color: "#909090",
        [theme.breakpoints.down('sm')]:{
            fontSize:"18px",
        },
    },
    typo3:{
        fontSize:"36px",
        fontWeight:"700",
        [theme.breakpoints.down('sm')]:{
            fontSize:"24px",
        },
    },
    innerContainer:{
        boxShadow:" 0px 4px 12px rgba(0, 0, 0, 0.13)",
        display:"flex",
        padding:"50px",
        [theme.breakpoints.down('sm')]:{
            flexDirection:"column",
        },
    },
    inputDiv:{
        padding:"25px",
        width:"60%",
        [theme.breakpoints.down('sm')]:{
            width:"100%",
        },
    },
    textField:{
        width:"80%",
        background: "#F8F7F7",
        [theme.breakpoints.down('sm')]:{
            width:"60%",
        },
    }

}})

export { useStyles };
