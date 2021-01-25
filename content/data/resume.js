import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import authorPhoto from './gm.png';

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: '10px'
    },
    paper: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.text.primary,
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

function Resume() {
    const classes = useStyles();
    return <>
        <hr/>
        <Grid container spacing={1} className={classes.grid}>
            <Grid item xs={2}>
                <Avatar alt="Gabriel Martins" src={authorPhoto} className={classes.large} />
            </Grid>
            <Grid item xs={10} style={{marginLeft: '-50px'}} >
                Escrito por: <b>Gabriel Martins</b>, Técnico em Informática e Estudante do 4° semestre do curso superior em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de São Paulo.
                Atualmente trabalha com desenvolvimento web utilizando Spring Framework integrado a tecnologias front-end Thymeleaf e Javascript.
                <br />
                <Link href="/about">Ler resumo completo</Link>
            </Grid>
        </Grid> 
    </>;
}

export default Resume;