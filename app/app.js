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

//import routes
import indexRouter from './routes/index.route.server.js';
import contactRouter from './routes/contact.route.server.js';

//instantiate express application
const app = express();

//set up viewengine ejs
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//use routes
app.use('/', indexRouter);
app.use('/', contactRouter);

export default app;