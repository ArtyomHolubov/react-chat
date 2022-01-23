import React, {useContext} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Avatar, Button, Grid} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    // eslint-disable-next-line no-console
    console.log('user', user);

    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                {!!user && <Grid container>
                    <Avatar src={user.photoURL}/>
                    <div>{user.displayName}</div>
                </Grid>}
                <Grid container justify={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
