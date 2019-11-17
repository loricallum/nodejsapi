const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.your id,
    api_key: process.env.(your api key),
    api_secret: process.env.your api secret
});

module.exports = cloudinary;
