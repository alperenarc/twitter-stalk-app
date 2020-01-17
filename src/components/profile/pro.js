import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import app, { auth } from 'firebase/app'
import getFollowers from '../firebase'

const asd = []
var id = ''
class Pro extends Component {

    constructor() {
        super()
        id = auth().currentUser.providerData[0].uid
        this.state = {
            isReady: false
        }
        
    }

    async componentDidMount() {
        const a = await getFollowers(id)
        Promise.resolve(a).then(function (value) {
            try {
                for (var i = 0; i < 20; i++) {
                    for (var j = 0; j < 20; j++) {
                        console.log(value[i].users[j].name) // "Success"
                        asd.push(value[i].users[j].name)
                    }
                }
            } catch (error) {
            }
        }).then(this.setState({isReady:true}))
        console.log(asd)
    }
    render() {
        return (
            <div>
                <ul>

                    {this.state.isReady ?
                        console.log(asd[0]) : <div>waittt</div>
                    }
                </ul>

            </div>
        )
    }
}
export default Pro