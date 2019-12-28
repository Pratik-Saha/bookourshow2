import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowUserPage extends React.Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            posts: []
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        let userName = ''
        let posts = []
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                userName = response.data.name
                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then((response) => {
                    response.data.map((post) => {
                        posts.push(post)
                        this.setState({userName,posts})
                    })
                })
                .catch((error) => {
                    alert(error)
                })
            })
            .catch((error) => {
                alert(error)
            })
    }

    render(){
        return(
            <div>
                <h2>USER NAME : {this.state.userName}</h2>
                <h2>POSTS WRITTEN BY USER</h2>
                <ul>
                    {
                        this.state.posts.map((post) => {
                            return <li key = {post.id}><Link to = {`/posts/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
                
            </div>
        )
    }
}
export default ShowUserPage
