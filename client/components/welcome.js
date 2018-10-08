import React , {  Component } from 'react'  
import { Link } from 'react-router';
import {
    Button
} from 'react-bootstrap'

const styles = {
    'textAlign': 'center'
}
class Welcome extends Component{
    render(){
        return (
        <div style={styles}>
            <h4>Welcome to Send Bird Chat app</h4>
            <h2>Get started by Signing In </h2>
            <Link to='/login' >
                <Button className="btn btn-primary">
                    Sign In
                </Button>
            </Link>
        </div>
        )
    }
}

export default Welcome;