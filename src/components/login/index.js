import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useDispatch } from 'react-redux'
import login from '../actions/login'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

firebase.initializeApp({
    apiKey: "*",
    authDomain: "*"
})

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2013/06/26/04/59/person-141364_1280.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    imageForLogin: {
        background: 'linear-gradient(to right, #8e9eab, #eef2f3)',  /* fallback for old browsers */


    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#1A91DA',
        width: '97%'
    },
    uiConfig: {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    },
    mobile: {
        maxWidth: '95%',
        minWidth: '30%'
    }

}));

function Login() {
    const dispatch = useDispatch()
    firebase.auth().onAuthStateChanged(user => {

        if (user) {
            dispatch(login())
        }
        console.log("user", user.toJSON())
    })
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    const classes = useStyles();
    return (
        <div>
            <Grid container component="main" className={classes.root}>

                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} className={classes.imageForLogin} elevation={6} square>
                    <div className={classes.paper}>

                        <Typography align="center" component="h1" variant="h5">
                            Giriş Yap
                    </Typography>
                        <div className={classes.form} noValidate>

                            <StyledFirebaseAuth
                                uiConfig={uiConfig}
                                firebaseAuth={firebase.auth()}
                            />
                            <Box mt={5}>
                                <Typography align="center" component="h5" variant="h5">
                                    MOBIL PLATFORMLAR
                        </Typography>
                                <Typography align="center">
                                    Twitter Stalk App Uygulamasını Hemen Edinebilirsiniz. Takip etmek istediğiniz kişiyi seçin ve anında analize başlayın. Ayrıca kendi profilinize ait analizlere de rahatlıkla ulaşabilirsiniz.
                        </Typography>
                            </Box>
                            <Box mt={5}>
                                <Grid container component="main">

                                    <Grid item xs={12} sm={6} md={6}>
                                        <img alt='alt' className={classes.mobile} src="https://svgshare.com/i/HJS.svg" />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <img alt='alt' className={classes.mobile} src="https://svgshare.com/getbyhash/sha1-v5r+glPIeE6d10lo7SWpLpBRjMs=" />
                                    </Grid>

                                </Grid>
                            </Box>



                            <Box mt={5}>

                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>

    );
}

export default Login