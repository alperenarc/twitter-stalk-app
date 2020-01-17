import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import app, { auth } from 'firebase/app'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { PeopleAlt, Person, Search, Home, ArrowBack } from '@material-ui/icons'
import Button from '@material-ui/core/Button';

var asd = ''
var id = ''
var cursor = -1
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
    button:{
        color:'#fff',
        backgroundColor:'#1DA1F2',
        borderRadius:'20px',
        fontSize:'50%',
        width:'100%',
    }
});
class Pro2 extends Component {

    constructor(props) {
        super(props);

        id = auth().currentUser.providerData[0].uid
        this.state = {
            hits: [],
            isLoading: false,
        };

    }
    async componentDidMount() {
        var state = true
        try {
            while (state) {
                this.setState({ isLoading: true });
                await fetch("/1.1/followers/list.json?user_id=" + id + "&cursor=" + cursor + "", {
                    headers: {
                        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ hits: this.state.hits.concat(data.users), isLoading: false })
                        cursor = data.next_cursor
                        console.log(data.next_cursor)
                        //console.log(data)
                        var BreakException = {};
                        if (data.next_cursor == 1634251341094964000) {
                            state = false
                        }
                    }).catch(error => {
                        return
                    })
            }

        } catch (error) {

        }

    }



    render() {
        const { hits, isLoading } = this.state;
        const { classes } = this.props
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <div className={classes.root}>


                <Grid container spacing={1}>
                    {hits.map(hit =>
                        <Grid key={hit.id} item xs={12} sm={4}>
                            <Paper className={classes.paper}>
                                <Grid container>
                                    <Grid container justify='center' item xs={3} sm={3}>
                                        <Avatar alt={hit.name} className={classes.large} src={hit.profile_image_url_https.replace('_normal', '')} />
                                    </Grid>
                                    <Grid container item xs={5} sm={5}>
                                        <Grid textAlign='left' item xs={12} sm={12}>
                                            <Typography align='left' variant="body1">
                                                {hit.name}
                                            </Typography>
                                            <Typography align='left' variant="subtitle2">
                                                {hit.screen_name}
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

                </Grid>
            </div>

        );
    }
}
export default withStyles(useStyles)(Pro2)