const Image = require('../models/fileUpload')
const { uploadCloudinary } = require('../cloudhelpers/cloudinaryHelpers')
const uploadImage = async (req, res) => {
    try {

        //file is missing
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "file is required !please upload a image"

            })
        }
        const { url, publicID } = await uploadCloudinary(req.file.path)
        const newUploadImage = new Image({
            url,
            publicID,
            uploadedBy: req.userInfo.userId
        })
        await newUploadImage.save()
        res.status(201).json({
            success: true,
            message: "Image uploaded succesfully",
            data: newUploadImage

        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! please try again"
        })


    }
}
module.exports = {
    uploadImage
}