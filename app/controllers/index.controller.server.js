//index.controller.server.js Cathy Da 301177731 Sept 26

import { UserDisplayName } from "../utils/index.js"

export function displayHomePage(req, res, next){
    res.render('index.ejs', {title: 'Home', page: 'home', displayName: UserDisplayName(req)});
};

export function displayAboutPage(req, res, next){
    res.render('index.ejs', {title: 'About', page: 'about', displayName: UserDisplayName(req)});
};

export function displayProjectsPage(req, res, next){
    res.render('index.ejs', {title: 'Projects', page: 'projects', displayName: UserDisplayName(req)});
};

export function displayServicesPage(req, res, next){
    res.render('index.ejs', {title: 'Services', page: 'services', displayName: UserDisplayName(req)});
};