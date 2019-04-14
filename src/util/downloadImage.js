function download(
  imgNode,
  filter,
  imgName = 'image',
  format = 'png',
  quality = 1.0
) {
  const canvas = document.createElement('canvas');
  canvas.width = imgNode.width;
  canvas.height = imgNode.height;

  const context = canvas.getContext('2d');
  // context.filter = getComputedStyle(imgNode).filter;
  context.filter = filter;

  imgNode.setAttribute('crossOrigin', 'anonymous');

  context.drawImage(imgNode, 0, 0, canvas.width, canvas.height);
  const url = canvas.toDataURL(`image/${format}`, quality);

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${imgName}.${format}`;
  anchor.click();
}

export default download;
