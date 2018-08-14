const mongoose = require('mongoose');
const mongoConfigs = require('../private/mongo_configs');

mongoose.Promise = global.Promise;

const { username, password } = mongoConfigs.configs;

mongoose.connect(`mongodb://${username}:${password}@ds121312.mlab.com:21312/react-native-auth`)
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

module.exports = mongoose;
