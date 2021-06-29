import React, {useState} from 'react'
import {
  Drawer, CssBaseline, AppBar, List, Typography, Divider,
  ListItem, ListItemText, Hidden, IconButton, useTheme, Toolbar, Avatar, Grid, Paper, Button,
} from '@material-ui/core'

import { ClassSharp, Menu as MenuIcon} from '@material-ui/icons'
import {Chart} from 'react-charts'


//importações do Firebase
import {FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed} from '@react-firebase/auth'
import firebase from "firebase/app"
import {config} from './credentials'
import UnAuthedPage from './NAutenticado'
import Home from './Home'

import styles from './styles'
 
import avatar from './img/avatar.png'
import marcha from './img/marcha.png'
import subir from './img/subir.png'
import sentar from './img/sentar.png'
import queda from './img/queda.png'
import icones from './img/icones.png'
import simo from './img/simo.png'




export default function App(props) {
  const { window } = props
  const classes = styles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false);


const handleDrawerToogle = () => {
  setMobileOpen(!mobileOpen)
}

const menuItens = [
  'Idade',
  'Telefone de emergência',
  'Telefone do paciente',
  'Comorbidades',
  'Email',
  'Endereço'
];

const data = React.useMemo(()=>[
  {
    label:"Meses" ,
    data:[["JAN",50],["FEV",30],["MAR",40],["ABR",20],["MAI",30],["JUN",0]]
  },  
],[]);

const series = React.useMemo(()=>(
  {
    type: 'bar',
  }),
[]);

const axes = React.useMemo(
  () => [
    {primary:true, type:'ordinal', position:'bottom'},
    {position: 'left', type:'linear', stacked:false}
  ],[]
);


const drawer = (
  <div>
    <div className={classes.toolbar}/>
      {/* <Divider /> */}
      <List>
        <ListItem className={classes.listItem} src={simo}>
        </ListItem>
        <ListItem  className ={classes.listItem}>
        <Grid className={classes.gridLogo}>
            <img src={simo}/>
          </Grid>
          <ListItemText className={classes.text7}><h3>SIMOPADI</h3></ListItemText>
          <ListItem className={classes.listItem1}>
            Pesquisa
          </ListItem>
          <Avatar className ={classes.avatar}>
            <img class='login-icon' src={avatar}/>
           </Avatar> 
           <ListItemText className={classes.text3}>JOÃO DA SILVA</ListItemText>
        </ListItem>
        {menuItens.map((text, index) => (
         <ListItem text key={text} className={classes.listItem1}>
          <ListItemText className={classes.text4} primary={text} />
        </ListItem>
       ))}
        </List>
  </div>
)

const container = window !==undefined ? () => window().document.body : undefined; 

return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' arial-label='open drawer' edge ='start' onClick={handleDrawerToogle} className={classes.menuButton}>
              <MenuIcon/>
          </IconButton>
          <Typography variant = 'h6' noWrap className={classes.title}>
            Relatórios do paciente
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label='menu'>
        <Hidden smUp implementation='css'>
          <Drawer container={container} variant ='temporary' anchor={theme.direction === 'rlt' ? 'rigth' : 'left'}
          open ={mobileOpen} onClose={handleDrawerToogle} classes = {{paper: classes.drawerPaper}}
          ModalProps={{keepMounted:true}}>
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation='css'>
          <Drawer classes={{paper :classes.drawerPaper,}} variant='permanent' open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container spacing={3}>
       
        <Grid item marcha>
          <Paper className={classes.paper}>
            <Grid item passos>
             <Paper className={classes.paperPassos}>
              <Typography variant='h4'className={classes.text1}>120</Typography>     
              <Typography variant='h7' className={classes.text5}>Número de passos</Typography>            
              </Paper>
            </Grid>
            <Grid item cadencia>
             <Paper className={classes.paperCadencia}>
              <Typography  variant='h4' className={classes.text1}>120</Typography>
              <Typography variant='h7'className={classes.text2}>Cadência</Typography>
              </Paper>
            </Grid>
            <Grid item minutos>
             <Paper className={classes.paperMinutos}>
              <Grid>
                <Paper className={classes.paperMinutos1}>
              <Typography variant='h4' className={classes.text3}>59</Typography>
              <Typography variant='h7'className={classes.text3}>MIN</Typography>
              </Paper>
              </Grid>
              </Paper>
            </Grid>
            <Grid item textMarcha>
                <Typography className={classes.textMarcha}>Marcha</Typography>
            </Grid>
            <Grid item className={classes.gridMarcha}>
            <img src={marcha}/>
            </Grid>
          </Paper>
        </Grid>


        <Grid item subir>
          <Paper className={classes.paper}>
          <Grid item subir>
            <Paper className={classes.paperSubir}>
            <Typography  variant='h4' className={classes.text1}>53</Typography>
            <Typography variant='h7'className={classes.text6}>Quantidade de degraus</Typography>
            </Paper>
          </Grid>
          <Grid item textSubir>
                <Typography className={classes.textSubir}>Subir e descer escadas</Typography>
            </Grid>
          <Grid item className={classes.gridSubir}>
          <img src={subir}/>
          </Grid>
          <Grid className={classes.graficoSubir}>
              <Chart data={data} axes={axes} series={series}/>
          </Grid>
          </Paper>
        </Grid>
        
        
        <Grid item sentarLevantar>
          <Paper className={classes.paper}>
          <Grid item sentadas>
            <Paper className={classes.paperSentadas}>
            <Typography  variant='h4' className={classes.text1}>53</Typography>
            <Typography variant='h7'className={classes.text2}>Quantidade de sentadas</Typography>
            </Paper>
          </Grid>
          <Grid item levantadas>
            <Paper className={classes.paperLevantadas}>
            <Typography  variant='h4' className={classes.text1}>53</Typography>
            <Typography variant='h7'className={classes.text2}>Quantidade de levantadas</Typography>
            </Paper>
          </Grid>
          <Grid item textSentar>
                <Typography className={classes.textSentar}>Sentar e levantar</Typography>
            </Grid>
          <Grid item className={classes.gridSentar}>
          <img src={sentar}/>
          </Grid>
          <Grid className={classes.graficoSentar}>
              <Chart data={data} axes={axes} series={series}/>
          </Grid>
          </Paper>
        </Grid>

        <Grid item quedas>
          <Paper className={classes.paper}>
          <Grid item quedas>
            <Paper className={classes.paperQuedas}>
            <Typography  variant='h4' className={classes.text1}>53</Typography>
            <Typography variant='h7'className={classes.text2}>Quantidade de quedas</Typography>
            </Paper>
          </Grid>
          <Grid item textQuedas>
                <Typography className={classes.textQuedas}>Quedas</Typography>
          </Grid>
          <Grid item className={classes.gridQueda}>
          <img src={queda}/>
          </Grid>
          <Grid className={classes.graficoQuedas}>
              <Chart data={data} axes={axes} series={series}/>
          </Grid>
          </Paper>
        </Grid>

        <Grid className={classes.gridIcones}>
        <img src={icones}/>
        </Grid>

       <Grid className={classes.gridTeste}>
          <FirebaseAuthProvider {...config} firebase = {firebase}>
            <div
            style={{
              width: "100%",
              height: "100%",
              display:"flex",
              justifyContent:"center",
              background:"#ECEFF1"
            }}
            >
              <IfFirebaseUnAuthed>
                <UnAuthedPage/>
              </IfFirebaseUnAuthed>
              <IfFirebaseUnAuthed>{() =><Home/>}</IfFirebaseUnAuthed>
            </div>
          </FirebaseAuthProvider>         
       </Grid>

        </Grid>

        {/* <Typography >
          Gráficos
        </Typography> */}
        
      </main>
    </div>
  );
}