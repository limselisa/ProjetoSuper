import {makeStyles} from '@material-ui/core'


const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: '#03a9f4',
    alignItems:'center',
    alingContent:'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }, 
    color:'#757575',
    backgroundColor:'#fafafa',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#e0e0e0',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItem:{
      display:'flex',
      alignItems:'center',
      alingContent:'center',
      flexDirection: 'column',
  },
  listItem1:{
    width:225,
    height:30,
    left:-1,
    margin:10,
    display:'flex',
    alignItems:'center',
    alingContent:'center',
    flexDirection: 'column',
    borderRadius:50, 
    background:'#fafafa',  
},
  title:{
    marginTop: 15,
    marginBottom: 15,
  },
  avatar:{
      width: 150,
      height: 150,
  },
  img:{
      width: 150,
      height:150,
  },
  paper:{
    width:600,
    height:300,
    display:'flex',
  },
  paperPassos:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginTop:50,
    marginLeft:50,
  },
  paperCadencia:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginBottom:100,
    marginTop:160,
    marginLeft:-130,
    textAlign:'center',
  },
  paperMinutos:{
    width:100,
    height:100,
    backgroundColor: '#03a9f4',
    marginBottom:20,
    marginTop:90,
    marginLeft:60,
    textAlign:'center',
    borderRadius:50,
  },
  paperMinutos1:{
    width:70,
    height:70,
    backgroundColor: '#fafafa',
    marginLeft:10,
    position:'absolute',
    right:100,
    left:508,
    top:193,
    textAlign:'center',
    borderRadius:50,
  },
  //estilo dos textos
  text1:{
    color:'#fafafa', 
    textAlign:'center',
    fontWeight:'bold',
  },
  text2:{
    color:'#fafafa', 
    textAlign:'center',
    fontWeight:'bold',
  },
  text3:{
    color:'#212121',
    fontWeight:'bold',
    alignItems:'center',
  },
  text4:{
    color:'#212121',
    fontWeight:'bold',
    alignItems:'center',
    marginBottom:-10,
    marginTop:-5,
  },
  text5:{
    color:'#fafafa', 
    textAlign:'center',
    fontWeight:'bold',
    marginLeft:5,
  },
  text6:{
    color:'#fafafa', 
    textAlign:'center',
    fontWeight:'bold',
  },
  text7:{
    color:'#1976d2', 
    textAlign:'center',
    fontWeight:'bold',
    fontFamily:'fantasy',
    marginBottom:10,
    marginTop:-60,
  },
  buttonMarcha:{
    textDecoration:'underline',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:300,
  },
  paperSentadas:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginBottom:40,
    marginTop:190,
    marginLeft:300,
    textAlign:'center',
  },
  paperLevantadas:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginBottom:40,
    marginTop:190,
    marginLeft:20,
    textAlign:'center',
  },
  paperSubir:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginBottom:40,
    marginTop:190,
    marginLeft:430,
    textAlign:'center',
  },
  paperQuedas:{
    width:130,
    height:85,
    backgroundColor: '#03a9f4',
    marginBottom:40,
    marginTop:190,
    marginLeft:420,
    textAlign:'center',
  },
  textMarcha:{
    textDecoration:'underline',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:150,
  },
  textSubir:{
    textDecoration:'underline',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:-200,
  },
  textSentar:{
    textDecoration:'underline',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:-160,
  },
  textQuedas:{
    textDecoration:'underline',
    fontWeight:'bold',
    marginTop:15,
    marginLeft:-70,
  },
  //imagens
  gridMarcha:{
    width:150,
    height:150,
    marginBottom:100,
    marginTop:70,
    marginLeft:-170,
  },
  gridSubir:{
    width:50,
    height:50,
    marginBottom:80,
    marginTop:50,
    marginLeft:-140,
  },
  gridSentar:{
    width:50,
    height:50,
    marginBottom:80,
    marginTop:40,
    marginLeft:-190,
  },
  gridQueda:{
    width:50,
    height:50,
    marginBottom:80,
    marginTop:50,
    marginLeft:-120,
  },
  gridIcones:{
    width:600,
    height:70,
    display:'flex',
    marginLeft:500,
  },
  gridTeste:{
    width:600,
    height:100,
    display:'flex',
    marginLeft:500,
  },
  gridLogo:{
    width:150,
    height:150,
    display:'flex',
    marginLeft:-10,
    marginBottom:20,
    marginTop:-70,
  },
  graficoSubir:{
    width:250,
    height:250,
    marginLeft:-390,
    marginBottom:0,
    marginTop:30,
  },

  graficoSentar:{
    width:250,
    height:250,
    marginLeft:-410,
    marginBottom:0,
    marginTop:30,
  },
  graficoQuedas:{
    width:250,
    height:250,
    marginLeft:-420,
    marginBottom:0,
    marginTop:30,
  },
}));

export default styles;