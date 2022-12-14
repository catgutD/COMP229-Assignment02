//contacts.js Cathy Da 301177731 Oct 19

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema =  new Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String
},
{
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema)