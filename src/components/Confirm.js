import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";

const theme = createTheme();

class Confirm extends Component {
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
                <h1>Cofirm Details Page</h1>
              </div>
            </AppBar>
            <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />} label="I agree to all the terms and conditions"
                />
              </FormGroup>
              
              <Button
                color="secondary"
                variant="contained"
                style={{ width: "100px",  marginBottom: "1rem" }}
                onClick={this.continue}
              >Confirm</Button>
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

export default Confirm
