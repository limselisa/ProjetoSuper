import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    paper: {
        heigth:140,
        width:100,
    },
    control: {
        padding: theme.spacing(2),
    },
    form:{
        '&': {
            margin: theme.spacing(2),
            width: '25ch',
        },
        flexDirection:'column',
        display:'flex',
        alignContent: 'center',
        alignItems: 'center',
    }, 
}));

export default useStyles;