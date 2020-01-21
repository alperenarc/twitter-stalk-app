import React, { Component, useState } from 'react'
import app, { auth } from 'firebase/app'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import followerArray from './actions/followerArray'
import { useCallback } from 'react'
import 'firebase/auth'
require('firebase/auth')
//const fArray = useSelector(state => state.followerArray)
//const dispatch = useDispatch()


class Firebase extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            followers: [],
            wait: true,
            listedUser: []
        }
    }
    get(){
        console.log(localStorage.getItem('notFollowYouProviderData').split('split')[23])
    }
    async getDifference() {
        const id = auth().currentUser.providerData[0].uid

        await fetch("/1.1/followers/ids.json?user_id=" + id + "", {
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            }
        }).then(response => response.json())
            .then(data => {
                this.state.followers = data.ids
            }).catch(error => {
                return
            })
        await fetch("/1.1/friends/ids.json?user_id=" + id + "", {
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            }
        }).then(response => response.json())
            .then(data => {
                this.state.friends = data.ids
            }).catch(error => {
                return
            })


        var notFollowYou = this.state.friends.filter(item1 =>
            !this.state.followers.some(item2 => (item2 === item1)))
        var youNotFollow = this.state.followers.filter(item1 =>
            !this.state.friends.some(item2 => (item2 === item1)))
        localStorage.setItem('notFollowYou', notFollowYou)
        localStorage.setItem('youNotFollow', youNotFollow)


        for (var i = 0; i < notFollowYou.length; i++) {

            await fetch("/1.1/users/show.json?user_id=" + notFollowYou[i] + "", {
                headers: {
                    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.id == undefined) {

                    } else {
                        const user = [{
                            id: 'split'+data.id+'split',
                            name: 'split'+data.name+'split',
                            screenName: 'split'+data.screen_name+'split',
                            photo: 'split'+data.profile_image_url_https.replace('_normal', '')+'split'

                        }]
                        this.state.listedUser = this.state.listedUser.concat(user)
                    }

                }).catch(error => {
                    console.log('hata')
                })
        }
        localStorage.setItem('notFollowYouProviderData', JSON.stringify(this.state.listedUser))
        console.log(this.state.listedUser)
        console.log('finish')
        console.log(localStorage.getItem('notFollowYouProviderData'))

        
    }

}

export default new Firebase()