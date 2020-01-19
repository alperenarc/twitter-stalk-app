import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../login'
import SweetAlert from 'sweetalert2-react'
import getFollowers from '../firebase'
import app, { auth } from 'firebase/app'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { PeopleAlt, Person, Search, Home, ArrowBack } from '@material-ui/icons'
import MyFollowers from './myFollowers'
import MyDatas from './myDatas'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'




const useStyles = makeStyles(theme => ({
    root: {
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    large: {
        maxHeight: theme.spacing(20),
        minHeight: theme.spacing(10),
        maxWidth: theme.spacing(20),
        minWidth: theme.spacing(10),
    },
    profilePhoto: {
        position: 'absolute',
        minWidth: theme.spacing(12),
        minHeight: theme.spacing(12),
        top: '30%',
        left: '5%'
    },
    gridImage: {
        backgroundImage: 'url(https://pbs.twimg.com/profile_banners/875042222072356870/1516806597/1500x500)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '97%',
        height: '20%',
        position: 'absolute',
        opacity: 0.5
    },
    card: {
        width: '100%',
    },
    media: {
        height: 100,
    },
}));


function get() {
    const a = getFollowers(auth().currentUser.providerData[0].uid)
    const asd = []
    Promise.resolve(a).then(function (value) {
        try {
            for (var i = 0; i < 20; i++) {
                for (var j = 0; j < 20; j++) {
                    console.log(value[i].users[j].name) // "Success"
                    asd.push(<li>{value[i].users[j].name}</li>)
                }
            }
        } catch (error) {
        }
    });
    return (
        <div>Alperen {asd}</div>
    )
}

function Profile() {

    const isLogged = useSelector(state => state.isLogged)
    const classes = useStyles()
    return (
        <div>
            {
                isLogged ?
                    <div className={classes.root}>
                        <MyDatas/>
                     {/*  <Grid sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYiXPfI9ukQriDdWde1m43vroHGHIjDDhAAa12NdhhD8yuQhAi&s"
                                        title="Contemplative Reptile"
                                    />
                                    <Avatar alt="Cindy Baker" className={classes.profilePhoto} src="https://instagram.fasr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/60649962_374326853180370_7920122145697431552_n.jpg?_nc_ht=instagram.fasr1-1.fna.fbcdn.net&_nc_ohc=yt7x9IZ4sqgAX9FNfmq&oh=779e9a599cc35ffa6ef795b9d1b64ff7&oe=5E956F94" />
                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Grid container item xs={12} sm={12}>
                                        <Typography align='left' variant="body1">
                                            596 
                                            <Typography align='left' variant="body2">
                                                Following
                                            </Typography>
                                            
                                        </Typography>

                                        <Typography style={{paddingLeft:'5px'}} align='left' variant="body1">
                                            596
                                            <Typography align='left' variant="body2">
                                                Following
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
*/}


                        {/** <MyFollowers/> **/}



                        {/* <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper}>

                                <Grid container >

                                    <Grid container justify='center' item xs={4} sm={4}>
                                        <Avatar alt="Cindy Baker" className={classes.large} src="https://instagram.fasr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/60649962_374326853180370_7920122145697431552_n.jpg?_nc_ht=instagram.fasr1-1.fna.fbcdn.net&_nc_ohc=yt7x9IZ4sqgAX9FNfmq&oh=779e9a599cc35ffa6ef795b9d1b64ff7&oe=5E956F94" />
                                    </Grid>
                                    <Grid container item xs={8} sm={8}>
                                        <Grid textAlign='left' item xs={12} sm={12}>
                                            <img style={{ width: '50%' }} src='https://pbs.twimg.com/profile_banners/875042222072356870/1516806597/1500x500' />
                                            <Typography align='left' variant="h6">
                                                Alperen Arıcı
                                                </Typography>
                                            <Typography align='left' variant="body2">
                                                @alperen_arc
                                                </Typography>
                                        </Grid>
                                        <Grid container item xs={12} sm={12}>
                                            <Grid item xs={6} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={9} sm={9}>
                                                        <Typography align='right' variant="body1">
                                                            596
                                                            </Typography>
                                                        <Typography align='right' variant="body2">
                                                            Following
                                                            </Typography>
                                                    </Grid>
                                                    <Grid style={{ paddingTop: '5%' }} item xs={3} sm={3}>
                                                        <Person />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6} sm={6}>
                                                <Grid container>
                                                    <Grid item xs={9} sm={9}>
                                                        <Typography align='right' variant="body1">
                                                            562
                                                            </Typography>
                                                        <Typography align='right' variant="body2">
                                                            Followers
                                                            </Typography>
                                                    </Grid>
                                                    <Grid style={{ paddingTop: '5%' }} item xs={3} sm={3}>
                                                        <PeopleAlt />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container style={{ marginTop: '10%' }}>
                                    <Grid container justify='center' item xs={6} sm={6}>
                                        <Paper className={classes.paper}>
                                            Kutu
                                    </Paper>
                                    </Grid>
                                    <Grid container justify='center' item xs={6} sm={6}>
                                        <Paper className={classes.paper}>
                                            Kutu
                                    </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
            */}

                    </div>

                    : console.log('')
            }

        </div>
    );
}

export default Profile