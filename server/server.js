const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/database')

const app = express();
const port = process.env.PORT || 6500;
const appRoutes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', appRoutes);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }) 
        .then(() => console.log('Database is connected'))
        .catch(err => console.log('Cannot connect to the database' + err));

app.listen(port, () => console.log('Server running on ' + port));