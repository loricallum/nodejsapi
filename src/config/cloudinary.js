const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.lorilewis,
    api_key: process.env.(749289124289874),
    api_secret: process.env._E7FHe6h7skgUNCPa_dv8Op1c1E
});

module.exports = cloudinary;