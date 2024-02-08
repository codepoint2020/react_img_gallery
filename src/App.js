
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from "react-image-gallery";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));

function App() {

  // console.log(images);
  const imageItems = images.map((image, index) => ({
      original: image,
      thumbnail: image,
  }))
  
  return (
    <>
      <ImageGallery 
        items={imageItems} 
        showThumbnails={false}
        thumbnailPosition="top"
        autoPlay={true}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        showBullets={true}

      />
    </>
  );
}

export default App;
