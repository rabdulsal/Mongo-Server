const mongoose = require('mongoose');
const { db_username, db_password } = require('../private/configs');

mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${db_username}:${db_password}@ds121312.mlab.com:21312/react-native-auth`)
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;
