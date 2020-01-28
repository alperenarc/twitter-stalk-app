import React, { Component, useState } from 'react'
import { auth } from 'firebase/app'
import 'firebase/auth'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { BeatLoader } from "react-spinners"
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

require('firebase/auth')

var notFollowYou = []
var youNotFollow = []

var i = 0
var j = 5
const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundImage: '',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    large: {
        minHeight: theme.spacing(5),
        minWidth: theme.spacing(5),
    },
    button: {
        color: '#fff',
        backgroundColor: '#1DA1F2',
        borderRadius: '20px',
        fontSize: '50%',
        width: '100%',
    },
    loading: {
        display: "block",
        margin: "0 auto",
        BorderColor: "red"

    }
});
class NotFollowMe extends Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            followers: [],
            wait: true,
            listedUser: [],
            open: true,
            scroll: 'paper'
        }
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
        notFollowYou = this.state.friends.filter(item1 =>
            !this.state.followers.some(item2 => (item2 === item1)))
        youNotFollow = this.state.followers.filter(item1 =>
            !this.state.friends.some(item2 => (item2 === item1)))
        //localStorage.setItem('notFollowYou', notFollowYou)
        //localStorage.setItem('youNotFollow', youNotFollow)

    }
    async listDifference() {
        this.setState({ wait: true })
        /*var users = []
        for (var i = 0; i < notFollowYou.length; i++) {
           users. notFollowYou[i]
        }
*/
        console.log(notFollowYou.toString())
        //await fetch("/1.1/users/lookup.json?user_id=")


        for (; i < j; i++) {

            await fetch("/1.1/users/show.json?user_id=" + notFollowYou[i] + "", {
                headers: {
                    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.id === undefined) {

                    } else {
                        const user = [{
                            id: data.id,
                            name: data.name,
                            screenName: data.screen_name,
                            photo: data.profile_image_url_https.replace('_normal', '')

                        }]
                        this.state.listedUser = this.state.listedUser.concat(user)
                    }

                }).catch(error => {
                    console.log('hata')
                })
        }
        this.setState({ wait: false })
        // localStorage.setItem('notFollowYouProviderData', JSON.stringify(this.state.listedUser))
        console.log(this.state.listedUser)
        console.log('finish')

        j = j + 5
        console.log(i, j)
        //console.log(localStorage.getItem('notFollowYouProviderData'))

    }
    componentDidMount() {
        this.state.open = true
        this.getDifference()
        this.listDifference()
    }
    render() {
        const showMoreData = () => {
            this.listDifference()
        }
        const { classes } = this.props
        const handleClickOpen = scrollType => () => {
            this.setState({ open: true })
            this.setState({ scroll: scrollType })
        }
        const handleClose = () => {
            this.setState({ open: false })
        }
        return (

            <div>
                {/*** aaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
                <Dialog
                    open={this.state.open}
                    onClose={handleClose}
                    scroll={this.state.scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Users who don't follow you.</DialogTitle>
                    <DialogContent dividers={this.state.scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                        >
                            <Grid container>
                                {this.state.listedUser.map(user =>
                                    <Grid item key={user.id} item xs={12} sm={12}>
                                        <Paper className={classes.paper}>
                                            <Grid container>
                                                <Grid container justify='center' item xs={3} sm={3}>
                                                    <Avatar alt={user.name} className={classes.large} src={user.photo} />
                                                </Grid>
                                                <Grid container item xs={5} sm={5}>
                                                    <Grid textAlign='left' item xs={12} sm={12}>
                                                        <Typography align='left' variant="body1">
                                                            {user.name}
                                                        </Typography>
                                                        <Typography align='left' variant="subtitle2">
                                                            {user.screenName}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container item xs={4} sm={4}>
                                                    <Grid textAlign='left' item xs={12} sm={12}>
                                                        <Button variant="contained" className={classes.button} >
                                                            Following
                                            </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                )}
                                {!this.state.wait ?
                                    ''
                                    : <Grid alignContent='center' justify='center' alignItems='center' xs={12} sm={12}>
                                        <Typography align='center'>
                                            <BeatLoader
                                                className={classes.loading}
                                                size={10}
                                                color={"#1DA1F2"}
                                                loading={this.state.isLoading}
                                            />
                                        </Typography>
                                    </Grid>
                                }
                                {
                                    notFollowYou.length >= i ? <Button variant="contained" style={{ marginTop: '5px' }} onClick={showMoreData} className={classes.button} >
                                        Show More Data
                                        </Button> : 'Over'
                                }

                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>


                {/*** aaaaaaaaaaaaaaaaaaaaaaaaaaaa */}



            </div>
        )
    }

}

export default withStyles(useStyles)(NotFollowMe)