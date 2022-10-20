//contact.controller.server.js Cathy Da 301177731 Sept 30

import contactModel from '../models/contacts.js'
import { UserDisplayName } from '../utils/index.js';

export function displayContactPage(req, res, next){
    res.render('index.ejs', {title: 'Contact', page: 'contact', displayName: UserDisplayName(req)});
};

export function AddContact(req, res, next){

    //storing message in a variable
    var message = req.body.message;

    let newContact = contactModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    })

    contactModel.create(newContact, (err, Contact) =>{
        if(err){
            console.error(err);
            res.end(err);
        }
    })

    res.redirect('/home');
}