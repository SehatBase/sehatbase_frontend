import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>{
  return {
    modalContainer:{
        width:"100%",
        height:"494px",
        marginTop:"8%",
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
        marginTop:"15%",
        backgroundColor:"#FFFFFF",
        position:"relative",
        [theme.breakpoints.down('xs')]:{
            marginTop:"45%",
        },
    },
    innerContainer1:{
        display:"flex",
        padding:"50px",
        padding:"5% 5%",
        flexDirection:"column",
    },
    inputDiv:{
        padding:"25px 0px",
        width:"60%",
        width:"100%",
    },
    textField:{
        width:"70%",
        background: "#F8F7F7",
        [theme.breakpoints.down('sm')]:{
            width:"60%",
        },
    },
    none:{
        display:"none"
    },
    closeButton:{
        background:"none",
        color:"#909090",
        boxShadow:"none",
        position:"absolute",
        fontSize:"20px",
        right:"0",
        "&:hover":{
            background:"none",
            boxShadow:"none",
            color: "#7428EA",
        },
    }

}})

export { useStyles };
