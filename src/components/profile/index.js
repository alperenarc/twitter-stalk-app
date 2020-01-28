import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { PeopleAlt, ErrorOutline, Person } from '@material-ui/icons'
import MyDatas from './myDatas'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MyFriends from './myFriends'
import firebase from '../firebase'
import NotFollowMe from './operations/notFollowMe'

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(5)
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grids: {
        cursor: 'pointer'
    },
    card: {

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

function Profile() {

    const isLogged = useSelector(state => state.isLogged)
    const classes = useStyles()
    const [page, setPage] = useState('');


    const myFriends = () => {
        setPage('myFriends')
    }
    const notFollowMe = () => {
        setPage('NotFollowMe')
    }
    return (
        <div>
            {
                isLogged ?
                    <div className={classes.root}>
                        <button onClick={myFriends}>MyFriends</button>
                        <button onClick={firebase.get()}>GETTT</button>

                        <div><img alt='alt' /></div>
                        <Grid container>
                            <Grid item sm={1} xs={0}></Grid>
                            <Grid item sm={10} xs={12}>
                                <MyDatas />
                                <div>
                                    {/**image={/*hits.profile_banner_url */}

                                    <Grid container spacing={1} style={{ padding: '5px' }} sm={12} xs={12}>

                                        <Grid onClick={notFollowMe} item className={classes.grids} sm={4} xs={12} >
                                            <Card className={classes.card} style={{ backgroundColor: '#fe9801' }}>
                                                <CardContent>
                                                    <Typography align='center' variant="h6">
                                                        <ErrorOutline />
                                                        <Typography variant="body1">
                                                            Seni Takip Etmeyenler
                                                        </Typography>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>

                                        <Grid item className={classes.grids} sm={4} xs={12} >
                                            <Card className={classes.card} style={{ backgroundColor: '#ccda46' }}>
                                                <CardContent>
                                                    <Typography align='center' variant="h6">
                                                        <PeopleAlt />
                                                        <Typography variant="body1">
                                                            Senin Takip Etmediklerin
                                </Typography>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item className={classes.grids} sm={4} xs={12} >
                                            <Card className={classes.card} style={{ backgroundColor: '#f4eec7' }}>
                                                <CardContent>
                                                    <Typography align='center' variant="h6">
                                                        <Person />
                                                        <Typography variant="body1">
                                                            İncelemeye Aldığın Hesaplar
                                </Typography>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>



                                </div>

                                {page === 'NotFollowMe' ? <NotFollowMe /> : page === 'myFriends' ? <MyFriends /> : ''}
                            </Grid>
                            <Grid item sm={1} xs={0}></Grid>
                        </Grid>




                    </div>

                    : console.log('')
            }

        </div>
    );
}

export default Profile