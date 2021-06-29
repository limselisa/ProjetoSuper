import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import{Button} from '@material-ui/core'
import {State} from 'react-powerplug'

const getButtonStyleProps = () => {
    return{
        style:{
            width:200, 
            heigth:50,
            alingSelf:"center",
            background:"039BE5",
            color:"white"
        }
    };
};

export default function UnAuthed(){
    return (
        <State initial = {{isLoading: false, error:null}}>
            {({ state, setState}) =>(
                <div
                style={{
                    width:600, 
                    heigth:300,
                    display:"flex",
                    alingContent:"center",
                    justifyContent:"space-aurond",
                    flexDirection:"column"
                }}>
                    <div>isLoading: {JSON.stringify(state.isLoading)}</div>
                    <div>error: {JSON.stringify(state.error)}</div>
                    <Button {...getButtonStyleProps()}
                            onClick={async()=>{
                                setState({isLoading:true, error: null})
                                await firebase
                                .app()
                                .auth()
                                .signInAnonymously()
                                setState({ isLoading: false, error: null})
                            }}>
                                Login Anonymously
                    </Button>
                </div>
            )}
        </State>
    )
}

