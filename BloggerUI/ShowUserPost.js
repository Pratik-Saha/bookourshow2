import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowUserPost extends React.Component{
    constructor(){
        super()
        this.state = {
            user: {},
            title: '',
            body: '',
            comments: []
        }
    }

    componentDidMount(){
        const postid = this.props.match.params.postId
        let title = ''
        let body = ''
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then((response) => {
                const post = response.data
                title = post.title
                body = post.body
                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then((response) => {
                        const user = response.data
                        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
                        .then((response) => {
                            const comments = response.data
                            this.setState({user,title,body,comments})
                        })
                        
                    })

            })
    }

    render(){
        return(
            <div>
                <h2>USER NAME : {this.state.user.name}</h2>
                <h2>TITLE : {this.state.title}</h2>
                <h2>BODY : <br />{this.state.body}</h2><hr />
                <h2>COMMENTS: </h2>
                <ul>
                    {
                        this.state.comments.map((comment) => {
                            return <li key = {comment.id}>{comment.body}</li>
                        })
                    }
                </ul>

                <Link to = {`/users/${this.state.user.id}`}>More Posts From Author: {this.state.user.name}</Link>
            </div>
        )
    }
}

export default ShowUserPost
