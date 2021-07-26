import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Signup() {
const papaerStyle={padding: '30px 20px', width: 300, margin: "20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor: '#1bbd7e'}
const marginTop={marginTop:5}
    return (
        <Grid>
            <Paper elevation={20} style={papaerStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption'>please this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullwidth='Name' placeholder="Enter your name" />
                    <TextField fullwidth='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{display:'initial'}}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullwidth='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullwidth='Password' placeholder="Enter your password" />
                    <TextField fullwidth='Confirm Password' placeholder="Enter your confirm password" />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and condition"
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>

                </form>
            </Paper>
        </Grid>

    )
}

export default Signup;