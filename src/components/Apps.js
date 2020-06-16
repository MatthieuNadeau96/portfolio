import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from './Modal';
import chatUiImage from '../imgs/chat-ui-mockup-bl.png';
import pomodoroImage from '../imgs/pomodoro-mockup-bl.png';
import mealsImage from '../imgs/meals-mockup-bl.png';
import personalExpenseImage from '../imgs/personal-expenses-mockup-bl.png';
import snakeImage from '../imgs/snake-mockup-bl.png';
import xylophoneImage from '../imgs/xylophone-mockup-bl.png';

const useStyles = makeStyles((theme) => ({

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
        <div className='apps-container'>
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
                        resetImage(pomodoroImage); // ***********************
                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src={pomodoroImage} />
                    </ButtonBase>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Chat UI');
                        resetDescription('Simple chat user interface.');
                        resetImage(chatUiImage)  // ***********************
                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src={chatUiImage} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Personal Expenses');
                        resetDescription('Keep track of the money you spend each week.');
                        resetImage(personalExpenseImage);  // ***********************

                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src={personalExpenseImage} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <ButtonBase className={classes.image} onClick={() => {
                        resetTitle('Snake Game');
                        resetDescription('Play snake on your phone.');
                        resetImage(snakeImage);  // ***********************

                        setModalShow(true);
                    }}>
                        <img className={classes.img} alt="complex" src={snakeImage} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} onClick={() => {
                    resetTitle('Meals App');
                    resetDescription('Check out categorized recipes');
                    resetImage(mealsImage);  // ***********************
                    setModalShow(true);
                }}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={mealsImage} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} onClick={() => {
                    resetTitle('Xylophone App');
                    resetDescription('Play little songs on this xylophone.');
                    resetImage(xylophoneImage);  // ***********************
                    setModalShow(true);
                }}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={xylophoneImage} />
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    );
}

export default Apps;