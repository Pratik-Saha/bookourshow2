import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from  './Home'
import Users from './Users'
import ShowUserPage from  './ShowUserPage'
import ShowUserPost from './ShowUserPost'
import ShowPostPage from './ShowPostPage'

function App(props){
    return(
        <BrowserRouter>
            <div>
            <h1>Welcome to Blogger</h1>

            <Link to = "/home">Home</Link> |                  
            <Link to = "/users">Users</Link> |
            <Link to = "/posts">Posts</Link> |

            <Route path = "/home" component = {Home} />
            <Route path = "/users" component = {Users}  exact = {true}/>
            <Route path = "/users/:id" component = {ShowUserPage} />
            <Route path ="/posts" component = {ShowPostPage} exact = {true} />
            <Route path = "/posts/:postId" component = {ShowUserPost} />
            
            </div>
        </BrowserRouter>
    )
}

export default App
