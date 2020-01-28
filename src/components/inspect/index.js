import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { PeopleAlt, Person } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1)
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
}));

function Inspect() {
   // const isLogged = useSelector(state => state.isLogged)
    const classes = useStyles();
    return (
        <div>
            {
                

                    <div className={classes.root}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <Grid container>
                                        <Grid container justify='center' item xs={4} sm={4}>
                                            <Avatar alt="Cindy Baker" className={classes.large} src="https://instagram.fasr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/60649962_374326853180370_7920122145697431552_n.jpg?_nc_ht=instagram.fasr1-1.fna.fbcdn.net&_nc_ohc=yt7x9IZ4sqgAX9FNfmq&oh=779e9a599cc35ffa6ef795b9d1b64ff7&oe=5E956F94" />
                                        </Grid>
                                        <Grid container item xs={8} sm={8}>
                                            <Grid textAlign='left' item xs={12} sm={12}>
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
                                                        <Grid style={{paddingTop:'5%'}} item xs={3} sm={3}>
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
                                                        <Grid style={{paddingTop:'5%'}} item xs={3} sm={3}>
                                                            <PeopleAlt />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <Grid container>
                                        <Grid container justify='center' item xs={4} sm={4}>
                                            <Avatar alt="Cindy Baker" className={classes.large} src="https://instagram.fasr1-1.fna.fbcdn.net/v/t51.2885-19/s320x320/60649962_374326853180370_7920122145697431552_n.jpg?_nc_ht=instagram.fasr1-1.fna.fbcdn.net&_nc_ohc=yt7x9IZ4sqgAX9FNfmq&oh=779e9a599cc35ffa6ef795b9d1b64ff7&oe=5E956F94" />
                                        </Grid>
                                        <Grid container item xs={8} sm={8}>
                                            <Grid textAlign='left' item xs={12} sm={12}>
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
                                                        <Grid style={{paddingTop:'5%'}} item xs={3} sm={3}>
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
                                                        <Grid style={{paddingTop:'5%'}} item xs={3} sm={3}>
                                                            <PeopleAlt />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper}>
                                    <Grid container>
                                        Inspect a new user
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>





            }
        </div>
    );
}

export default Inspect