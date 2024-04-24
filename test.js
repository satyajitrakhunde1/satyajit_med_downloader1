import {downloadFile} from "satyajit_med_downloader";

downloadFile('https://m.media-amazon.com/images/I/41Pi5dfvOoL._SX466_.jpg', './image')
.then(() => console.log('Image downloaded successfully'))
.catch((error) => console.error('Error downloading image:', error));

