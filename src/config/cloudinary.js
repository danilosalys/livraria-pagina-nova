const cloudinary = require("cloudinary");
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

//metodo que vai executar o upload no cloudinary

exports.uploads = (file, folder) => {
  return new Promise(
    (resolve) => {
        cloudinary.uploader.upload(
            file,
            (cloudinaryReturn) => {
                resolve({
                    imageUrl:cloudinaryReturn.url
                })
            },
            {
                folder: folder,
                resource_type:"auto"
            }
        )
    })
};
