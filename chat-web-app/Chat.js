import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            message: '',
            messages: []
        }

        //Setting up a socket to listen to port 8080 on which our server is running
        this.socket = io('localhost:8000');

        //catch that emit on the client side and add the message to our messages array
        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = (data) => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendMessage = (e) => {
        e.preventDefault()
        //sending message from client to server
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.username,
            message: this.state.message
        });
        
        this.setState({message: ''});
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
                                    {
                                        this.state.messages.map((message) => {
                                            return (
                                                <div>
                                                    { message.author }: { message.message }
                                                </div>    
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="card-footer">
                                    <input type="text" className="form-control" value={this.state.username} name="username" placeholder="Username" onChange = {this.handleChange} />
                                    <br/>
                                    <input type="text" className="form-control" value={this.state.message} name="message" placeholder="Message" onChange={this.handleChange} />
                                    <br/>
                                    <button className="btn btn-primary form-control" onClick = {this.sendMessage}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat
