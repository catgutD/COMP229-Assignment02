//contact.controller.server.js Cathy Da 301177731 Sept 30

export function displayContactPage(req, res, next){
    res.render('contact.ejs', {title: 'Contact', page: 'contact'})
};

export function RetainContactInfo(req, res, next){

    //storing the info in variables
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var contactNumber = req.body.contactNumber;
    var email = req.body.email;
    var message = req.body.message;

    res.redirect('/home');
}