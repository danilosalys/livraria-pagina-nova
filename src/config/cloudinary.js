const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "drderxybw",
  api_key: "148611135442137",
  api_secret: "3XFByNwFdKZvYHYV2OYxg9R8cb0"
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
