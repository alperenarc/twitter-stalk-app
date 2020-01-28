import React, { Component } from 'react'
import { auth } from 'firebase/app'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { BeatLoader } from "react-spinners"

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
class MyFollowers extends Component {

    constructor(props) {
        super(props);
        cursor = -1
        id = auth().currentUser.providerData[0].uid
        this.state = {
            hits: [],
            isLoading: false,
            over: false,
            firstCall: true
        };
        this.get = this.get.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    get() {
        if (!this.state.isLoading) {
            this.setState({ isLoading: true })

            fetch("/1.1/friends/list.json?user_id=" + id + "&cursor=" + cursor + "", {
                headers: {
                    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
                }
            }).then(response => response.json())
                .then(data => {
                    if (data.next_cursor === 0) {
                        this.setState({ isLoading: false })
                        this.setState({ over: true })
                    } else {
                        this.setState({ hits: this.state.hits.concat(data.users), isLoading: false })
                        cursor = data.next_cursor
                        console.log(data.next_cursor)
                    }
                }).catch(error => {
                    return
                })
            this.setState({ isLoading: false })


        }
    }
    componentDidMount() {
        this.get()
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll(event) {

        if ((window.innerHeight + window.scrollY) === document.body.offsetHeight) {
            console.log('handle')
            this.get()
        }
    }
    render() {

        const { hits, isLoading, over } = this.state;
        const { classes } = this.props
        const showMoreData = () =>{
            console.log('handle')
            this.get()
        }
        return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {hits.map(hit =>
                        <Grid key={hit.id} item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Grid container>
                                    <Grid container justify='center' item xs={3} sm={3}>
                                        <Avatar alt={hit.name} className={classes.large} src={hit.profile_image_url_https.replace('_normal', '')} />
                                    </Grid>
                                    <Grid container item xs={9} sm={9}>
                                        <Grid textAlign='left' item xs={12} sm={12}>
                                            <Typography align='left' variant="body1">
                                                {hit.name}
                                            </Typography>
                                            <Typography align='left' variant="subtitle2">
                                                {hit.screen_name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
                <Button variant="contained" onClick={showMoreData} style={{ marginTop: '5px' }} className={classes.button} >
                    Show More Data
                </Button>
                {
                    over ? '' : isLoading ? ''
                        : <Grid style={{ marginBottom: '10%' }} alignContent='center' justify='center' alignItems='center' xs={12} sm={12}>
                            <Typography align='center'>
                                <BeatLoader
                                    className={classes.loading}
                                    size={10}
                                    color={"#1DA1F2"}
                                    loading={this.state.isLoading}
                                />
                            </Typography>
                        </Grid>}
            </div>
        );
    }
}
export default withStyles(useStyles)(MyFollowers)