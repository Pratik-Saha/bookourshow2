import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowPostPage extends React.Component{
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data
            this.setState({posts})
        })
    }

    render(){
        return(
            <div>
                <h1>TOTAL USER POSTS - {this.state.posts.length}</h1>
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

export default ShowPostPage
