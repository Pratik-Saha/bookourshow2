const config = require('./config.default')
const Twitter = require('twitter')
const client  = new Twitter(config)

const _ = require('lodash')

const User = require('../models/User')

module.exports.list = (req, res) => {
    const username = req.query.username
    User.findOne({ username })
        .then((user) => {
            if(user){
                res.json(_.pick(user.tweets, ['text']))
            }else{
                let params = {
                    screen_name: username,
                    count: 2,
                }
                
                client.get('/statuses/user_timeline.json', params)
                    .then((tweets) => {
                        if(tweets){
                            const body = { 
                                username,
                                tweets: _.pick(tweets, ['text'])
                            }
                            const user = new User(body)
                            user.save()
                                .then((user) => {
                                    res.json(_.pick(tweets, ['text']))
                                })
                                .catch((err) => {
                                    res.json(err)
                                })
                            
                        }else{
                            res.json({
                                notice: `No tweets made by the user ${username}`
                            })
                        }
                        
                    })
                    .catch((err) => {
                        res.json(err)
                    })
            }
        })
}

