import app, { auth } from 'firebase/app'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import followerArray from './actions/followerArray'
import {useCallback} from 'react'

//const fArray = useSelector(state => state.followerArray)
//const dispatch = useDispatch()

export default async function getFollowers(twitterId) {
    //const dispatch = useDispatch()

     

    var cursor = -1
    var array = []
    for (var i = 0; i < 2; i++) {
        await axios.get("/1.1/followers/list.json?user_id=" + twitterId + "&cursor=" + cursor + "",
            {
                headers: {
                    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                }
            }
        ).then(response => {
            cursor = response.data.next_cursor
            //console.log(response.data.next_cursor)
            const eachUser = {
                id: JSON.stringify(response.data.users[0].id),
                name: JSON.stringify(response.data.users[0].name)
            }
            array.push(response.data)
        }).catch(function (error) {
            console.log(error);
        })


    }
    //dispatch(followerArray(array))
    return array
}