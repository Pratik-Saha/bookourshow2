import React from 'react'
import axios from 'axios'

class ShowUserPost extends React.Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            title: '',
            body: '',
            comments: []
        }
    }

    componentDidMount(){
        const postid = this.props.match.params.postId
        let userName = ''
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
                        userName = user.name
                        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
                        .then((response) => {
                            const comments = response.data
                            this.setState({userName,title,body,comments})
                        })
                        
                    })

            })
    }

    render(){
        return(
            <div>
                <h2>USER NAME : {this.state.userName}</h2>
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
            </div>
        )
    }
}

export default ShowUserPost
