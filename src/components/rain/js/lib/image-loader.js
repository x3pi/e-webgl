function loadImage(src, i, onLoad) {
  return new Promise((resolve, reject) => {
    if (typeof src == "string") {
      src = {
        name: "image" + i,
        src,
      }
    }

    let img = new Image()
    img.crossOrigin = "anonymous"

    src.img = img
    img.src = src.src
    img.addEventListener("load", (event) => {
      if (typeof onLoad == "function") {
        onLoad.call(null, img, i)
      }
      resolve(src)
    })
  })
}

function loadImages(images, onLoad) {
  return Promise.all(images.map((src, i) => {
    return loadImage(src, i, onLoad)
  }))
}

export default async function ImageLoader(images, onLoad) {
  let r = {}

  await loadImages(images, onLoad).then((loadedImages) => {
    
    loadedImages.forEach((curImage) => {
      r[curImage.name] = {
        img: curImage.img,
        src: curImage.src,
      }
    })

  })

  return r
}
