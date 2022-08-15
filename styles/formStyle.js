import { makeStyles } from "@material-ui/core";
import bg from "../public/contactBg.png";

const useStyles = makeStyles((theme) => {
  return {
    formInput:{
        width:"100%",
    },
    message:{
        width:"100%",
        height:"240px",
    },
    formCont:{
        padding:"10%",
    }

}});

export { useStyles };
