import React, {createRef} from 'react'
import{Grid,TextField,Button,} from '@material-ui/core'
import {FirebaseDatabaseNode, FirebaseDatabaseProvider, FirebaseDatabaseMutation} from '@react-firebase/database'
import firebase from 'firebase/app'
import 'firebase/database'
import {get, set} from 'lodash'

import { config } from '../credentials'
// import UsersList from '../../components/UsersList'

import styles from './styles'

export default function Home(){
    const classes = styles();
    const ageTextFieldRef = createRef();
    const emergencyPhoneTexteFieldRef= createRef();
    const phoneTextFieldRef = createRef();
    const comorbidadesTextFieldRef = createRef();
    const emailTextFieldRef = createRef();
    const addressTextFielRef = createRef();

    return (
        <FirebaseDatabaseProvider {...config} firebase={firebase}>
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} md={6}>
            <FirebaseDatabaseMutation type="push" path="user">
                {({runMutation}) => {
                    return(
                        <form
                            className={classes.form}
                            onSubmit={async (ev) =>{
                                try{
                                    ev.preventDefault()
                                    const newAge = get(
                                        ageTextFieldRef,
                                        "current.value",
                                        0
                                    );
                                     const newEmergencyPhone = get(
                                         emergencyPhoneTexteFieldRef,
                                         "current.value",
                                         ""
                                     );
                                     const newPhone = get(
                                         newEmergencyPhone,
                                         "current.value",
                                         ""
                                     );
                                     const newComorbidades = get(
                                         comorbidadesTextFieldRef,
                                         "current-value",
                                         ""
                                     );
                                     const newEmail = get(
                                        emailTextFieldRef,
                                        "current-value",
                                        ""
                                    );
                                    const newAdress = get(
                                        addressTextFielRef,
                                        "current-value",
                                        ""
                                    );
                                    await runMutation({
                                        age: newAge,
                                       emergencyPhone: newEmergencyPhone,
                                       phone: newPhone,
                                       comorbidades: newComorbidades,
                                       email:newEmail,
                                       adress:newAdress
                                    });
                                    set(ageTextFieldRef, "current.value", 0)
                                    set(emergencyPhoneTexteFieldRef, "current.value", "")
                                    set(phoneTextFieldRef, "current.value", "")
                                    set(comorbidadesTextFieldRef, "current.value", "")
                                    set(emailTextFieldRef, "current.value", "")
                                    set(addressTextFielRef, "current.value","")
                                }
                                catch(error){
                                    console.error(error);
                                }
                                
                            }}
                        >
                            <TextField required label ="Idade" type="number" inputRef={ageTextFieldRef}/>
                            <TextField required label ="Telefone de emergência" type="tel" inputRef={emergencyPhoneTexteFieldRef}/>
                            <TextField required label ="Telefone do paciente" type="tel" inputRef={phoneTextFieldRef}/>
                            <TextField required label ="Comorbidades"  inputRef={comorbidadesTextFieldRef}/>
                            <TextField required label ="Email" type="email" inputRef={emailTextFieldRef}/>
                            <TextField required label ="Endereço" inputRef={addressTextFielRef}/>
                            <Button type="submit" variant="contained">Salvar</Button>
                        </form>
                    );
                }}
            </FirebaseDatabaseMutation>
             </Grid>
             <Grid item xs={12} md={6}>
                 <FirebaseDatabaseNode path="user">
                     {({value}) =>{
                         if(value === null || typeof value === "undefined") return null
                         const keys = Object.keys(value)
                         const values = Object.values(value)
                         const valuesWidthKeys = values.map(
                             (value, i) =>
                             ({
                                 id: keys[i],
                                 age: value.age,
                                 emergencyPhone: value.emergencyPhone,
                                 phone: value.phone,
                                 comorbidades: value.comorbidades,
                                 email: value.email,
                                 address: value.address,
                             })
                         );
                         console.log(valuesWidthKeys);
                         console.log('valuesWidthKeys');
                     }}
                 </FirebaseDatabaseNode>

             </Grid>
            </Grid>
        </FirebaseDatabaseProvider>
    )
}