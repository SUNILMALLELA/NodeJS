const Image = require('../models/fileUpload')
const fs = require('fs')
const cloudinary = require('../database/cloudinary')
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
            uploadBy: req.userInfo.userId
        })
        await newUploadImage.save()

        res.status(201).json({
            success: true,
            message: "Image uploaded succesfully",
            data: newUploadImage

        })
        fs.unlinkSync(req.file.path)//delete storage file

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! please try again"
        })


    }
}
const getImage = async (req, res) => {
    try {
        const result = await Image.find({})
        if (result) {
            res.status(200).json({
                success: true,
                message: "Images fetched successfully",
                data: result
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong! please try again"
        })


    }

}
const deleteImage = async (req, res) => {
    try {
        const getCurrentIdOfImageDeleted = req.params.id;
        const userID = req.userInfo.userID;
        const image = await Image.findById(getCurrentIdOfImageDeleted)
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"

            })

        }
        if (image.uploadBy.toString() !== userID) {
            return res.status(403).json({
                success: false,
                message: "You are not Authorized to delete Image"
            })
        }
        await cloudinary.uploader.destroy(Image.publicID)
        await Image.findByIdAndUpdate(getCurrentIdOfImageDeleted)
        res.status(200).json({
            success: true,
            message: "Image deleted succesfuuly"
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
    uploadImage,
    getImage,
    deleteImage
}