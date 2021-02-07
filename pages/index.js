import Head from "next/head";

import { useEffect, useState } from "react";

// import styles from "../styles/Home.module.css";
import { Box, Container, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {},
  columnHeaderSquares: {
    height: 20,
    width: 80,
    textAlign: "center",
  },
  columnTeam: {
    position: "absolute",
    top: 0,
    left: 32,
    textAlign: "center",
    width: "100%",
  },
  columns: {
    position: "absolute",
    top: 24,
    left: 56,
  },
  container: {
    position: "relative",
    marginTop: 24,
    width: 896,
  },
  grid: {
    position: "absolute",
    top: 56,
    left: 56,
  },
  rowHeaderSquares: {
    height: 80,
    lineHeight: 5,
    width: 20,
    textAlign: "center",
  },
  rowTeam: {
    position: "absolute",
    transform: "rotate(-90deg)",
    width: "100%",
    textAlign: "center",
    top: 435,
    right: 433,
  },
  rows: {
    position: "absolute",
    top: 56,
    left: 24,
  },
  square: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    height: 80,
    width: 80,
  },
  squareText: {
    textAlign: "center",
  },
  title: {
    fontSize: 56,
  },
  hightlight: {
    backgroundColor: "#fff200",
  },
});

export default function Home() {
  const classes = useStyles();

  const [squareConfig, setSquareConfig] = useState({});
  useEffect(() => {
    fetch("/api/square")
      .then((res) => res.json())
      .then((squareConfig) => setSquareConfig(squareConfig));
  }, []);

  const {
    cells = [],
    colDigits = ["", "", "", "", "", "", "", "", "", ""],
    match: { awayScore, homeScore } = {},
    rowDigits = ["", "", "", "", "", "", "", "", "", ""],
  } = squareConfig;

  const columnDigit = homeScore % 10;
  const rowDigit = awayScore % 10;

  console.log(squareConfig);

  return (
    <>
      <Head>
        <title>Super Bowl Squares</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="md" style={{ marginTop: 32 }}>
          <Typography className={classes.title} variant="h1">
            Super Bowl LV
          </Typography>
          <Divider />
          <div className={classes.container}>
            <Typography className={classes.columnTeam} variant="subtitle1">
              Tampa Bay Buccaneers
            </Typography>
            <Typography className={classes.rowTeam} variant="subtitle1">
              Kansas City Chiefs
            </Typography>
            <Box
              className={classes.columns}
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              p={1}
              m={1}
              bgcolor="background.paper"
            >
              {colDigits.map((digit, index) => (
                <Paper
                  className={classes.columnHeaderSquares}
                  key={index}
                  variant="outlined"
                  square
                >
                  {digit}
                </Paper>
              ))}
            </Box>
            <Box
              className={classes.rows}
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              p={1}
              m={1}
              bgcolor="background.paper"
            >
              {rowDigits.map((digit, index) => (
                <Paper
                  className={classes.rowHeaderSquares}
                  key={index}
                  variant="outlined"
                  square
                >
                  {digit}
                </Paper>
              ))}
            </Box>
            <Box
              className={classes.grid}
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              p={1}
              m={1}
              bgcolor="background.paper"
            >
              {cells.map((cell, index) => {
                const shouldHighlight =
                  columnDigit === colDigits[cell.colPos] &&
                  rowDigit === rowDigits[cell.rowPos];
                return (
                  <Paper
                    className={classes.square}
                    key={index}
                    variant="outlined"
                    style={{
                      backgroundColor: shouldHighlight
                        ? "#fff200"
                        : "transparent",
                    }}
                    square
                  >
                    <div className={classes.squareText}>{cell.owner}</div>
                  </Paper>
                );
              })}
            </Box>
          </div>
        </Container>
      </main>
      <footer />
    </>
  );
}
