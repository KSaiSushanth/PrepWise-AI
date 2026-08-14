const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Upload a file buffer to Cloudinary
const uploadToCloudinary = (fileBuffer, folder = 'prepwise-resumes') => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'raw',   // 'raw' for non-image files like PDFs
        format: 'pdf'
      },
      (error, result) => {
        if (error) reject(error)
        else resolve(result)
      }
    )
    // Pipe the buffer into the Cloudinary upload stream
    streamifier.createReadStream(fileBuffer).pipe(stream)
  })
}

module.exports = { uploadToCloudinary }