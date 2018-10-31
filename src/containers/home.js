import  React , { Component } from 'react' 
import '../App.css'
import SideBar from './sidebar'
import MessageList from '../components/messagelist';
import MessageForm from '../components/messageform'
export default class extends Component {
 render(){
     return (
        <div id="container">
        <aside id="sidebar">
            <SideBar/>
        </aside>
        <section id="main">
          <section id="messages-list">
          <MessageList/>
          </section>
          <section id="new-message">
            <MessageForm/>
          </section>
        </section>
</div>
        
     )
 }
}