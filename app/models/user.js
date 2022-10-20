//user.js Cathy Da 301177731 Oct 19

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose; //specific schema from mongoose
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},
{
    timestamps: true,
    collection: 'users'
});

UserSchema.plugin(passportLocalMongoose); //will encrypt and run the schema imported from mongoose

export default mongoose.model('User', UserSchema);