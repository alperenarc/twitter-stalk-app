import React, { Component } from 'react'
import { auth } from 'firebase/app'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BeatLoader } from "react-spinners";

var id = ''

const useStyles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
    }, modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        display: "block",
        margin: "0 auto",
        BorderColor: "red"

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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

    },
    card: {
        width: '100%',
    },
    media: {
        height: 100,
    },
    profilePhoto: {
        position: 'absolute',
        minWidth: theme.spacing(12),
        minHeight: theme.spacing(12),
        top: '30%',
        left: '5%'
    },
    bigProfilePhoto: {
        width: '100%'
    }
});
class MyDatas extends Component {

    constructor(props) {
        super(props);
        id = auth().currentUser.providerData[0].uid
        this.state = {
            hits: [],
            isLoading: false,
            profilePhoto: '',
            open: false
        };
        this.get = this.get.bind(this)
    }
    get() {
      /*  this.setState({ isLoading: false })
        fetch("/1.1/users/show.json?user_id=" + id + "", {
            headers: {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            }
        }).then(response => response.json())
            .then(data => {
                this.setState({ hits: data, isLoading: false })
                console.log(data)
                this.setState({ profilePhoto: data.profile_image_url_https.replace('_normal', '') })
            }).catch(error => {
                return
            })
        this.setState({ isLoading: true })*/
    }
    componentDidMount() {
        this.get()
    }
    render() {
        const handleOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        const { hits, isLoading, over } = this.state;
        const { classes } = this.props
        return (
            <div className={classes.root}>

                {isLoading ? <Grid alignContent='center' justify='center' alignItems='center' xs={12} sm={12}>
                    <Typography align='center'>
                        <BeatLoader
                            className={classes.loading}
                            size={30}
                            color={"#1DA1F2"}
                            loading={this.state.isLoading}
                        />
                    </Typography>
                </Grid>
                    :

                    <Grid container spacing={1}>
                        {/**image={/*hits.profile_banner_url */}

                        <Grid sm={12} xs={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        
                                        image='https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-orange-and-yellow-gradient-banner-background-imagegradientbackground-image-image_49980.jpg'
                                        title="Contemplative Reptile"
                                    />
                                    <div type="button" onClick={handleOpen}>
                                        {/*<Avatar alt={hits.name} className={classes.profilePhoto} src={this.state.profilePhoto} />*/}
                                        <Avatar alt={hits.name} className={classes.profilePhoto} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                                    </div>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={this.state.open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={this.state.open}>
                                            <div className={classes.paper}>
                                                {/*<img className={classes.bigProfilePhoto} src={this.state.profilePhoto} />*/}
                                                <img className={classes.bigProfilePhoto} src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' />
                                            </div>
                                        </Fade>
                                    </Modal>




                                    <CardContent>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardContent>
                                    <Typography align='left' variant="h6">
                                        {hits.name} Alperen
                                    </Typography>
                                    <Typography align='left' variant="body1">
                                        @{hits.screen_name} Alperen
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {hits.description} Alperen
                                    </Typography>
                                </CardContent>


                                <CardContent>
                                    <Grid container item xs={12} sm={12}>
                                        <Typography align='left' variant="body1">
                                            {hits.friends_count} 100
                                            <Typography align='left' variant="body2">
                                                Following
                                        </Typography>

                                        </Typography>

                                        <Typography style={{ paddingLeft: '5px' }} align='left' variant="body1">
                                            {hits.followers_count} 100
                                            <Typography align='left' variant="body2">
                                                Followers
                                        </Typography>
                                        </Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>}
            </div>
        );
    }
}
export default withStyles(useStyles)(MyDatas)