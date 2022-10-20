// app.js Cathy Da 301177731 Sept 30

//third-party modules
import express from 'express';
import logger from 'morgan';
import session from 'express-session';
import cookieParser from 'cookie-parser';

//__dirname fix
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//auth step 1 - import modules
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

//auth step 2 - define auth strategy
let localStrategy = passportLocal.Strategy;

//auth step 3 - import the user model
import User from './models/user.js';

//import routes
import indexRouter from './routes/index.route.server.js';
import contactRouter from './routes/contact.route.server.js'
import contactsListRouter from './routes/contacts-list.route.server.js';
import authRouter from './routes/auth.route.server.js';

//import mongoose module
import mongoose from 'mongoose';

//configuration module
import { MongoURI, Secret } from '../config/config.js';

//instantiate express application
const app = express();

//completing DB configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//listen for conection success or error
db.on('open', () => console.log("MongoDB Connection Success"));
db.on('error', () => console.log("MongoDB Connection Failed"))

//set up viewengine ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//auth setp 4 - setup express session
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

//auth step 5 - set up flash
app.use(flash());

//auth step 6 - initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//auth step 7 - implementing the auth strategy
passport.use(User.createStrategy());

//auth step 8 - setup serialization and deserialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//use routes
app.use('/', indexRouter);
app.use('/', contactRouter);
app.use('/', contactsListRouter);
app.use('/', authRouter);

export default app;