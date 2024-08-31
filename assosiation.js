const User = require("./models/user.model.js");
const Profile = require("./models/profile.model.js");

User.hasOne(Profile , {
    foreignKey: 'userId',
    as: 'profile'
})

Profile.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})