import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import { Typography } from '@mui/material';
import { Container, Card, CardContent, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

const theme = createTheme();  

class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values } = this.props;
    const { firstName, lastName, email, occupation, city, bio } = values;

    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            style={{ padding: "3rem", textAlign: "center" }}
          >
            <AppBar>
              <div style={{ background: "#333", padding: "10px 0", textAlign: "center", color: "white" }}>
                <Typography variant="h4" component="h2">
                  ✅ Successfully Entered Details
                </Typography>
              </div>
            </AppBar>
            <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
              <Container maxWidth="sm" sx={{ mt: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "#f5f5f5", width: "100%" }}>
                  <CardContent>
                    <Typography variant="h4" align="center" gutterBottom>
                      🎉 Submission Successful!
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          First Name: {firstName}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          Last Name: {lastName}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          Email: {email}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          Occupation: {occupation}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          City: {city}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" fontWeight="bold">
                          Bio: {bio}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Container>
            </div>

          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}

export default Success
