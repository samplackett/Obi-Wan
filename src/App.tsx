import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SpaceJesus from "./components/pictures/spacejesus";
import Logo from "./logo.svg";
import { lightBlue } from "@material-ui/core/colors";
import { ReactComponent as SpaceJesus3 } from "./Kenobi.svg";
import Grid from "@material-ui/core/Grid";

const tinycolor = require("tinycolor2");

function App() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        textAlign: "center",
        width: "100%",
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
        },
      },
    })
  );

  const useStylesCard = makeStyles({
    root: {
      minWidth: 275,
      textAlign: "center",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const [colour, setColour] = useState(tinycolor.random().toHex());

  const useStylesButton = makeStyles({
    button: {
      backgroundColor: "#" + colour,
    },
  });

  const useGridStyles = makeStyles({
    grid: {
      maxWidth: "100%"
    }
  });

  const classes = useStyles();

  const classesCard = useStylesCard();

  const classesButton = useStylesButton();

  const classesGrid = useGridStyles();
 
  const analColours = tinycolor(colour).analogous();
  const monoColours = tinycolor(colour).monochromatic();
  const splitColours = tinycolor(colour).splitcomplement();
  const triColours = tinycolor(colour).triad();
  const tetColours = tinycolor(colour).tetrad();

  const analMatrix = analColours.map(function (t: any) {
    return t.toHexString();
  });

  const monoMatrix = monoColours.map(function (t: any) {
    return t.toHexString();
  });

  const splitMatrix = splitColours.map(function (t: any) {
    return t.toHexString();
  });

  const triMatrix = triColours.map(function (t: any) {
    return t.toHexString();
  });

  const tetMatrix = tetColours.map(function (t: any) {
    return t.toHexString();
  });

  const changeColour = (e: any) => {
    setColour(e.target.value.slice(1));
  };

  const fillProps = {
    fill: colour,
  };

  return (
    <React.Fragment>
      <Card className={classesCard.root}>
        <CardContent>
          <Typography
            className={classesCard.title}
            color="textSecondary"
            gutterBottom
          >
            Hello there! General Kenobi, a bold one you are.
          </Typography>
          <Typography variant="h5" component="h2">
            Obi Wan Generator
          </Typography>
          <Typography variant="body2" component="p">
            I've become more powerful than any Jedi.
          </Typography>
        </CardContent>
      </Card>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Enter HEX Code"
          variant="outlined"
          defaultValue={"#" + colour}
          onChange={changeColour}
        />
      </form>
      <br />
      <Typography className={classesCard.root}>
        Analogous Kenobi:
      </Typography>
      <Grid container spacing={3} className={classesGrid.grid} >
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[0]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[0]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[1]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[1]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[2]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[2]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[3]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[3]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[4]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[4]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={analMatrix[5]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {analMatrix[5]}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Typography className={classesCard.root}>
        MonoKhromatic Kenobi:
      </Typography>
      <Grid container spacing={3} className={classesGrid.grid} >
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[0]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[0]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[1]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[1]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[2]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[2]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[3]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[3]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[4]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[4]}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <SpaceJesus fill={monoMatrix[5]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {monoMatrix[5]}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Typography className={classesCard.root}>
        Split Komplement Kenobi:
      </Typography>
      <Grid container spacing={3} className={classesGrid.grid} >
        <Grid item xs={4}>
          <SpaceJesus fill={splitMatrix[0]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {splitMatrix[0]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SpaceJesus fill={splitMatrix[1]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {splitMatrix[1]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SpaceJesus fill={splitMatrix[2]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {splitMatrix[2]}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Typography className={classesCard.root}>
        Triad Kenobi:
      </Typography>
      <Grid container spacing={3} className={classesGrid.grid} >
        <Grid item xs={4}>
          <SpaceJesus fill={triMatrix[0]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {triMatrix[0]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SpaceJesus fill={triMatrix[1]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {triMatrix[1]}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <SpaceJesus fill={triMatrix[2]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {triMatrix[2]}
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Typography className={classesCard.root}>
        Tetrad Kenobi:
      </Typography>
      <Grid container spacing={3} className={classesGrid.grid} >
        <Grid item xs={3}>
          <SpaceJesus fill={tetMatrix[0]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {tetMatrix[0]}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SpaceJesus fill={tetMatrix[1]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {tetMatrix[1]}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SpaceJesus fill={tetMatrix[2]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {tetMatrix[2]}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <SpaceJesus fill={tetMatrix[3]} />
          <Typography style={{textAlign: "center", fontSize: "small"}}>
            {tetMatrix[3]}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
