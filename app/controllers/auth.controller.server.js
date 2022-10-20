//auth.controller.server.js Cathy Da 301177731 Oct 20

import passport from "passport";

//need to include the user model for authentication
import User from '../models/user.js';

//import displayname utility method
import { UserDisplayName } from "../utils/index.js";

//Display functions
export function DisplayLoginPage(req, res, next){
    //check if user is logged in or not
    if (!req.user){
        return res.render('index.ejs', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }

    //send user to private area if user is logged in
    return res.redirect('/contacts-list');
}

export function DisplayRegisterPage(req, res, next){
    //check if user is logged in or not
    if(!req.user){
        return res.render('index.ejs', {title: 'Register', page: 'register', messages: req.flash('RegisterMessage'), displayName: UserDisplayName(req)});
    }

    //send user to private area once user is registered
    return res.redirect('/contacts-list');
}

export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function (err, user, info){
        if(err){
            console.error(err);
            res.end(err);
        }
        //if the user doesn't exit, then cannot login
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }

            return res.redirect('/');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req, res, next){
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + ' ' + req.body.lastName
    });
    User.register(newUser, req.body.password, function(err){
        //function to deal with errors
        if(err){
            if(err.name == 'UserExistsError'){
                console.error('Error: User Already Exists!');
                req.flash('registerMessage', 'Registration Error');
            }
            else{
                console.error(err.name);
                req.flash('reigsterMessage', 'Server Error');
            }

            return res.redirect('/register');
        }

        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/')
        });
    });
}

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log('User logged out successfully');

        return res.redirect('/login');
    });
}