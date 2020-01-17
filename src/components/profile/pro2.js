import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import app, { auth } from 'firebase/app'
import getFollowers from '../firebase'
import axios from 'axios'

var asd = ''
var id = ''
class Pro2 extends Component {

    constructor(props) {
        super(props);

        id = auth().currentUser.providerData[0].uid
        this.state = {
            hits: [],
            isLoading: false,
        };

    }
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch("/1.1/followers/list.json?user_id=" + id + "", {
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ hits: data.users, isLoading: false }));
    }



    render() {
        const { hits, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return ( 
            <ul>
                {hits.map(hit =>
                    <li key={hit.id}>
                        <span>{hit.name}</span>
                        <span>{hit.description}</span>
                        <img src={hit.profile_image_url_https} />
                    </li>
                )}
            </ul>
        );
    }
}
export default Pro2