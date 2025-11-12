const cloudinary = require('../database/cloudinary')

const uploadCloudinary = async (filepath) => {
    try {
        const result = await cloudinary.uploader.upload(filepath)
        return {
            url: result.secure_url,
            publicID: result.public_id
        }

    } catch (error) {
        console.error("Error while uploading to cloudinary", error);
        throw new Error('Error while uploading to cloudinary')


    }

}
module.exports = { uploadCloudinary }