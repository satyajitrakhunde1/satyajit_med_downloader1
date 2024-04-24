const axios = require('axios');
const fs = require('fs');

async function downloadFile(url, destination) {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream',
  });

  const contentType = response.headers['content-type'];
  const fileExtension = getFileExtension(contentType);

  if (!fileExtension) {
    throw new Error('Unsupported file type');
  }

  const writer = fs.createWriteStream(destination + '.' + fileExtension);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

function getFileExtension(contentType) {
  if (contentType.startsWith('image/')) {
    return 'jpg'; // Support for images (jpg, png, etc.)
  } else if (contentType.startsWith('video/')) {
    return 'mp4'; // Support for videos (mp4, etc.)
  } else if (contentType === 'application/pdf') {
    return 'pdf'; // Support for PDF files
  } else if (contentType.startsWith('audio/')) {
    return 'mp3'; // Support for audio files (mp3, etc.)
  } else if (contentType.startsWith('application/zip')) {
    return 'zip'; // Support for ZIP archives
  } else {
    return null;
  }
}

downloadFile('https://m.media-amazon.com/images/I/41Pi5dfvOoL._SX466_.jpg', './image')
.then(() => console.log('Image downloaded successfully'))
.catch((error) => console.error('Error downloading image:', error));


module.exports = {
  downloadFile
};

