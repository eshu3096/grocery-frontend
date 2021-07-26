import { Grid, Paper, Avatar, Typography, TextField, Button, Link} from '@material-ui/core';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Login() {
    const papaerStyle={padding: 20, height: '70vh', width: 280, margin: "20px auto"}
    const headerStyle={margin:0}
    const avatarStyle={backgroundColor: '#1bbd7e'}
    const btnStyle={margin: '8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={papaerStyle}>
                <Grid aligin='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                </Grid>
                <form>
                    <TextField label="Username" placeholder="Enter your username" fullwidth requied></TextField>
                    <TextField label="Password" placeholder="Enter your password" type="password" style={btnStyle} fullwidth requied></TextField>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />}
                        label="Remember me"
                    />
                    <Button type='submit' variant='contained' color='primary' fullwidth>Sign in</Button>
                    <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                    </Typography>
                    <Typography> Do you have an account ?
                    <Link href="#">
                        Sign Up 
                    </Link>
                    </Typography>
                </form>

            </Paper>
        </Grid>

    )
}

export default Login;