import { alpha, makeStyles } from '@material-ui/core/styles'
import { fontFamily } from '@mui/system'


export default makeStyles((theme) => ({

    rootContainer:{
      position: 'relative',
      top: '30vh',
        fontFamily: "Open Sans",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        minWidth: "100vw",
    },
    headerContainer: {
        position: 'relative',
        width: 'fit-content',
        height: 'fit-content',
        top: '5vh',
        marginLeft: '5vh',
        display: 'flex',
        flexDirection: 'column',


    },
    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '61px',
        letterSpacing: '-0.015em',
        color: '#7428EA'
    },

    heading2: {
        display: 'flex',
        alignItems:'center'
    },

    subtitle:{
        fontSize: 20 ,  
        fontFamily: "Open Sans", 
        width:'60%',
        [theme.breakpoints.down('900')]: {
            width:'100%',
        }
    },

    title2: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '61px',
        letterSpacing: '-0.015em',
        color: '#000000',
        paddingLeft:'10px'
    },
    cardsContainer: {
        maxWidth: '1400px',
        padding: '0 15px',
        margin: '5% auto'
      },

    cards: {
        display: 'flex',
        overflowX: 'scroll',
        padding: '25px 0px',
        scrollSnapType:'x mandatory',
        listStyle:'none',
       
        
        
      },
       
      card: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 100%',
        scrollSnapAlign: 'start',
        transition: 'all 0.2s',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 15%)',
        '&:not(&:last-child)': {
          marginRight: '10px',
        },
       
        [theme.breakpoints.up('500')]: {
          flexBasis: 'calc(50% - 10px)',
          
      },
        [theme.breakpoints.up('700')]: {
          flexBasis: 'calc(calc(100% / 3) - 20px)',
          '&:not(&:last-child)': {
            marginRight: '20px',
          }
      },
        [theme.breakpoints.up('1100')]: {
          flexBasis: 'calc(25% - 30px)',
          '&:not(&:last-child)': {
            marginRight: '40px',
          },
      }
        
      },
       
      cardLinkWrapper: {
        marginTop: 'auto',
      },

      
      cardTitle: {
        fontSize:'20px',
      },
      
      cardContent: {
        margin: '20px 0',
        maxWidth: '85%'
      },
      
      cardLinkWrapper: {
        marginTop: 'auto'
      },
      
      cardLink: {
        display: 'inline-block',
        textDecoration: 'none',
        color: '#7428EA',
        border:"1px solid #7428EA",
        background: '#ffffff',
        padding: '6px 20px',
        borderRadius: '6px',
        transition: 'background 0.2s',
        '&:hover': { 
          backgroundColor: '#7428EA',
          color: '#FFFFFF',
      }
      },

      btn:{
        display: 'flex',
        justifyContent:'center',
        marginBottom:'5%',
       
      }

      
    
 }))