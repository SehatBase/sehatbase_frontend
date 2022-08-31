import { alpha, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@mui/material'

export default makeStyles((theme) => ({

    rootContainer: {
        position: 'relative',
        top: '30vh',
        height: "100vh",
        minWidth: "100vw",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('900')]: {
            top: '10vh',
        }
    },

    imageContainer: {
        position: 'relative',
        top: '5vh',
        width: 'fit-content',
        height: 'fit-content',
        margin: '0%'
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50vw',
        height: 'fit-content',
        justifyContent: 'center',
        alignItems: 'left',
        [theme.breakpoints.down('900')]: {
            width: '100vw',
        }
    },

    title: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '2vw',
        letterSpacing: '-0.015em',
        color: '#000000',
        marginLeft:'2vw',
        [theme.breakpoints.down('900')]: {
            fontSize: '4vw',
        }
    },

    title2: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '3vw',
        letterSpacing: '-0.015em',
        color: '#7428EA',
        marginLeft:'2vw',
        [theme.breakpoints.down('900')]: {
            fontSize: '6vw',
        }
    },

    listItem: {
        display: 'flex',
        alignItems: 'center',
        margin: '2vw',
        [theme.breakpoints.down('900')]: {
            marginTop: '10vw',

        }
    },

    listText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '122%',
        letterSpacing: '-0.015em',
        color:'#000000',
        marginLeft: '1vw',
        width: '80%',
        [theme.breakpoints.down('900')]: {
            fontSize: '4vw',
        }
    },

}))