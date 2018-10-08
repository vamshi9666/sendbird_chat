import React, { Component } from 'react';
import SideBar from '../components/sidebar';
import MessageList from '../components/messagelist';

const conStyles ={
    'display':'flex',
    'flex-direction':'row',
    'width':'100%',
    'padding':'30px'
};

const sidebarStyles ={
    'width':'30%'
}

const messagelistStyles = {
    'width':'60%'
}
class HomePage extends Component {
    render() {
        return (
            <div style={conStyles}>
                <div >
                    <SideBar style={sidebarStyles} />
                </div>
                <div>
                    <MessageList style={messagelistStyles}/>
                </div>
            </div>
        )
    }
}
export default HomePage;