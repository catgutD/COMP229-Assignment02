//index.controller.server.js Cathy Da 301177731 Sept 26

export function displayHomePage(req, res, next){
    res.render('index.ejs', {title: 'Home', page: 'home'})
};

export function displayAboutPage(req, res, next){
    res.render('index.ejs', {title: 'About', page: 'about'})
};

export function displayProjectsPage(req, res, next){
    res.render('index.ejs', {title: 'Projects', page: 'projects'})
};

export function displayServicesPage(req, res, next){
    res.render('index.ejs', {title: 'Services', page: 'services'})
};
