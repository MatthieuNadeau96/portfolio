import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    div: {
        // padding: '4em',
    },
    grid: {
        width: '100%',
        alignItems: 'center',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,
    },
    image: {
        width: '100%',
        height: '100%',
        outline: 'none !important',
        backgroundColor: '#dddddd',

    },
    img: {
        margin: 'auto',
        display: 'block',
        height: '50%',
        width: '50%',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

function Apps() {
    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Grid container spacing={5} className={classes.grid} >
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/pomodoro.png" />
                    </ButtonBase>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/chat-ui.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/personal-expenses.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/snake.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/meals.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/xylophone.png" />
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    );
}

// export class Apps extends React.Component {
//     render() {

//         return (
//             <Grid container spacing={2} className={classes.grid}>
//                 <Grid item></Grid>
//             </Grid>
//         );
//     }
// }

export default Apps;