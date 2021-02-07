import Head from "next/head";
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
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 56,
  },
  hightlight: {
    backgroundColor: "#fff200",
  },
});

export default function Home({ squareConfig }) {
  const classes = useStyles();
  console.log(squareConfig)
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
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                5
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                7
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                4
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                2
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                0
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                1
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                6
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                8
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                9
              </Paper>
              <Paper
                className={classes.columnHeaderSquares}
                variant="outlined"
                square
              >
                3
              </Paper>
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
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                0
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                6
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                3
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                2
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                4
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                1
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                7
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                8
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                5
              </Paper>
              <Paper
                className={classes.rowHeaderSquares}
                variant="outlined"
                square
              >
                9
              </Paper>
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
              {/* ========================================================== */}
              <Paper
                className={clsx(classes.square, classes.hightlight)}
                variant="outlined"
                square
              />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              <Paper className={classes.square} variant="outlined" square />
              {/* ========================================================== */}
            </Box>
          </div>
        </Container>
      </main>
      <footer />
    </>
  );
}
