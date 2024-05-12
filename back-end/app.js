const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const app = express();
const dbConfig = require('./config/database');
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT' , 'DELETE'], // Allow specified HTTP methods
};
app.use(cors(corsOptions));
const publicDirectory = path.join(__dirname, '/public'); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(publicDirectory));
const getOriginRoutes = require('./routes/pages');
const getAuthRoutes = require('./routes/auth');
const getCalcRoutes = require('./routes/calc');
const getOptionsRoutes = require('./routes/getOptions');
const getSendRoutes = require('./routes/sendings');
const getproductRoutes = require('./routes/productRoutes');
const getScopesRoutes = require('./routes/getScopes');
const getcompanyRoutes = require('./routes/infoRoute');
const getsecurityRoutes = require('./routes/securiteRoute');
const getaddproductRoutes = require('./routes/addBddRoute');
const getdeleteproductRoutes = require('./routes/deleteBddRoute');
const getnumbercompaniesRoutes = require('./routes/numberUsers');
const getmanagecompaniesRoutes = require('./routes/companyMethRoute')
const gethistoryRoutes = require('./routes/historyRoute');
const gettablehistoryRoutes = require('./routes/Displayhistory')
/*
app.use(session({
  secret: 'some secret', 
  cookie: {maxAge: 30000}, 
  saveUninitialized: false
}))
*/


// defining routes
app.use('/', getOriginRoutes);
app.use('/auth', getAuthRoutes);
app.use('/calc', getCalcRoutes); // Assuming calcRoutes are for calculation-related endpoints
app.use('/getters', getOptionsRoutes);
app.use('/sendings', getSendRoutes);
app.use('/api', getproductRoutes);
app.use('/scopes', getScopesRoutes)
app.use('/info', getcompanyRoutes);
app.use('/securite', getsecurityRoutes);
app.use('/addproduct', getaddproductRoutes);
app.use('/deleteproduct', getdeleteproductRoutes);
app.use('/countUsers', getnumbercompaniesRoutes);
app.use('/manage', getmanagecompaniesRoutes);
app.use('/bilans', gethistoryRoutes)
app.use('/table_bilans', gettablehistoryRoutes)


app.use((req, res, next) => {
  res.status(404).render("404");
});


app.listen(port, (err) => {
  if (err) console.log(`Error listening on port ${port}`);
  else  console.log(`Running on port ${port}`);
});

