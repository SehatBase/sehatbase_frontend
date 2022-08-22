import { alpha, makeStyles } from '@material-ui/core/styles'
import { fontFamily } from '@mui/system'


export default makeStyles((theme) => ({



    rootContainer: {
        fontFamily: "Open Sans",
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",

    },

    headerContainer: {
        position: 'absolute',
        width: '1026px',
        height: '244px',
        left: '240px',
        top: '114px',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        // position: 'absolute',
        // width: '1009px',
        // height: '227px',
        // left: ' calc(50% - 1009px/2 - 222px)',
        // top: 'calc(50% - 227px/2 - 463.5px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '61px',
        letterSpacing: '-0.015em',
        color: '#7428EA'
    },

    heading2: {
        display: 'flex'
    },

    title2: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '32px',
        lineHeight: '61px',
        letterSpacing: '-0.015em',
        color: '#000000'
    },

    featuresContainer: {
        position: 'absolute',
        top: '425px',
        bottom:'696px',
        minHeight: "957px",
        minWidth: "100vw",
        display: "flex",
       
        justifyContent: 'center',
        alignItems:'center',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            width: 'auto'
          },

    },

    feature1Container: {
        // position: 'absolute',
        width: '1283.3px',
        height: '304px',
        display: 'flex',
        flexDirection: 'row',
        // left: '310px',
        // top: '425px'
    },
    feature2Container: {
        marginTop:'153px',
        // position: 'absolute',
        width: '1283.3px',
        height: '304px',
        display: 'flex',
        flexDirection: 'row',
        // left: '310px',
        // top: '882px'
    },

    feature3rootContainer: {
        position: 'absolute',
        minWidth: '100vw',
        height: '523px',
        display: 'flex',
        flexDirection: 'row',
        left: '0px',
        top: '1356px',
        // justifyContent: 'center',
        // alignItems:'center',
    
    },

    feature3Container: {
        position: 'absolute',
        minWidth: '100vw',
        height: '523px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
            },

    

    featurecontent: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '152px',

    },

    feature3content: {
        // position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        // left: '326px',
        // top: '155px',
        width:'500px',
       
    },

    featureHeading: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '36px',
        /* or 150% */
        letterSpacing: '-0.015em',

        color: '#000000',
    },
    feature3Heading: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '36px',
        /* or 150% */
        letterSpacing: '-0.015em',

        color: '#FFFFFF',
    },

    featureSubtitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '36px',
        /* or 150% */
        letterSpacing: '-0.015em',

        color: '#0B2331',
    },
    feature3Subtitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '36px',
        /* or 150% */
        letterSpacing: '-0.015em',

        color: '#FFFFFF',
    },

    featureDescription: {
        paddingTop: '29px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'justify',
        /* or 150% */
        letterSpacing: '-0.015em',
        overflow: 'hidden',
        display:'flex',
        flexWrap: 'wrap',
        color: 'rgba(0, 0, 0, 0.8)',
    },
    feature3Description: {
        paddingTop: '29px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '30px',
        textAlign: 'justify',
        /* or 150% */
        letterSpacing: '-0.015em',
        display: 'flex-wrap',
        color: '#FFFFFF',
        
    },

    feature3icon :{
            width: 'fit-content',
            marginBottom:'121px',
            // marginRight:'400px',
            
    },

    featureButton: {
        marginTop: "33px",
        width: '262.17px',
        height: '39.86px',
        borderRadius: '6px',
        border: '1px solid #7428EA',
        backgroundColor: '#FFFFFF',
        color: '#7428EA',
        boxShadow: 'none',
        fontFamily: 'Montserrat',
        fontSize: '15px',
        fontWeight: '500',
        '&:hover': { 
            backgroundColor: '#7428EA',
            color: '#FFFFFF',
        }
    }

}))