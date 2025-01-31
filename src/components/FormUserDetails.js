import React, { Component } from 'react'
import { Button } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { TextField } from '@mui/material';
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";
import { Typography } from '@mui/material';

const theme = createTheme();

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
          >
            <AppBar>
              <div style={{ background: "#333", padding: "10px 0", textAlign: "center", color: "white" }}>
                <Typography variant="h4" component="h2">
                  🤵 Enter User general Details
                </Typography>
              </div>
            </AppBar>
            <div style={{ padding: "3rem" }}>
              <TextField
                placeholder='enter your first name'
                label="first name"
                onChange={(e) => handleChange("firstName")(e)}
                value={values.firstName}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder='enter your last name'
                label="last name"
                onChange={(e) => handleChange("lastName")(e)}
                value={values.lastName}
                margin="normal"
                fullWidth
              />
              <TextField
                placeholder='enter your email'
                label="email"
                onChange={(e) => handleChange("email")(e)}
                value={values.email}
                margin="normal"
                fullWidth
              />
            </div>

            <Button
              color="secondary"
              variant="contained"
              style={{ width: "100px", marginLeft: "15rem", marginBottom: "1rem" }}
              onClick={this.continue}
            >Submit</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
