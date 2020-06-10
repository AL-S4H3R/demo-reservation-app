import React,{Component} from 'react';
import LoginScreen from './src/components/LoginScreen';
import Main from './src/components/MainComponent';

class App extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isSignedIn : false,

        }

        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(){
        //dummy sign in method for nav testing.
        this.setState({
            isSignedIn: true
        })
    }

    render(){
        if(this.state.isSignedIn){
            return(
                <Main/>
            )
        }
        else{
            return(
                <LoginScreen onButtonPress={this.onSignIn}/>
            )
        }
    }
}

export default App;