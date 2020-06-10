import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from './Modal';

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
        borderRadius: '3%',
        boxShadow: '0 10px 10px 5px rgba(0,0,0,0.05)',
        // backgroundColor: '#eeeeee',

    },
    img: {
        margin: 'auto',
        display: 'block',
        // height: '50%',
        // width: '50%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '3%',
    },
}));

// ***********************  TODO: Update Images with sideways pics from Threed.io  *********************** 

function Apps() {
    const classes = useStyles();
    const [modalShow, setModalShow] = React.useState(false);
    const [title, resetTitle] = React.useState('');
    const [description, resetDescription] = React.useState('');
    const [image, resetImage] = React.useState('');

    return (
        <div className={classes.div}>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                description={description}
                image={image}
            />
            <Grid container spacing={5} className={classes.grid} >
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Pomodoro Timer');
                        resetDescription('Pomodoro productivity timer.');
                        resetImage('/images/pomodoro-mockup-bl.png'); // ***********************
                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src="/images/pomodoro-mockup-bl.png" />
                    </ButtonBase>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Chat UI');
                        resetDescription('Simple chat user interface.');
                        resetImage('/images/chat-ui-mockup-bl.png')  // ***********************
                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src="/images/chat-ui-mockup-bl.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Personal Expenses');
                        resetDescription('Keep track of the money you spend each week.');
                        resetImage('/images/personal-expenses-mockup-bl.png');  // ***********************

                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src="/images/personal-expenses-mockup-bl.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Snake Game');
                        resetDescription('Play snake on your phone.');
                        resetImage('/images/snake-mockup-bl.png');  // ***********************

                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src="/images/snake-mockup-bl.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} onClick={() => {
                    resetTitle('Meals App');
                    resetDescription('Check out categorized recipes');
                    resetImage('/images/meals-mockup-bl.png');  // ***********************
                    setModalShow(true);
                }}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/meals-mockup-bl.png" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} onClick={() => {
                    resetTitle('Xylophone App');
                    resetDescription('Play little songs on this xylophone.');
                    resetImage('/images/xylophone-mockup-bl.png');  // ***********************
                    setModalShow(true);
                }}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/images/xylophone-mockup-bl.png" />
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    );
}

export default Apps;