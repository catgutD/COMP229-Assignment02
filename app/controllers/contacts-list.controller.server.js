//contacts-list.controller.server.js Cathy Da 301177731 Oct 19

import contactsModel from '../models/contacts.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactsModel.find(function(err, contactsCollection){
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index.ejs', {title: 'Contacts List', page: 'contacts/list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactEditPage(req, res, next){
    let id = req.params.id;

    contactsModel.findById(id, (err, contact) =>{
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index.ejs', {title: 'Edit Contact', page: 'contacts/edit', contact: contact, displayName: UserDisplayName(req)});
    });
}

export function ProcessContactsEditPage(req ,res, next){
    let id = req.params.id;

    let newContact = contactsModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        email: req.body.email
    });

    contactsModel.updateOne({_id: id}, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contacts-list');
    });
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactsModel.remove({_id:id}, (err) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contacts-list');
    });
    
}