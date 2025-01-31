import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import { Typography } from '@mui/material';

const theme = createTheme();

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props;

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
                  🤵 Enter User Personal Details
                </Typography>
              </div>
            </AppBar>
            <div style={{ padding: "3rem" }}>
              <TextField
                placeholder='enter your Occupation'
                label="Occupation"
                onChange={(e) => handleChange("occupation")(e)}
                value={values.occupation}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder='enter your City'
                label="City"
                onChange={(e) => handleChange("city")(e)}
                value={values.city}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder='enter your bio'
                label="bio"
                onChange={(e) => handleChange("bio")(e)}
                value={values.bio}
                margin="normal"
                fullWidth
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                color="secondary"
                variant="contained"
                style={{ width: "100px", marginBottom: "1rem" }}
                onClick={this.continue}
              >Submit</Button>
              <Button
                color="secondary"
                variant="contained"
                style={{ width: "100px", marginLeft: "1rem", marginBottom: "1rem" }}
                onClick={this.back}
              >Back</Button>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails
