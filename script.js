
function getThumbnail() {
  const url = document.getElementById('youtubeUrl').value;
  const videoID = extractVideoID(url);
  const img = document.getElementById('thumbnail');
  const downloadLink = document.getElementById('downloadBtn');

  if (videoID) {
    const thumbUrl = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    img.src = thumbUrl;
    img.style.display = 'block';
    downloadLink.href = thumbUrl;
    downloadLink.style.display = 'inline-block';
  } else {
    alert("Invalid YouTube URL. Please check and try again.");
    img.style.display = 'none';
    downloadLink.style.display = 'none';
  }
}

function extractVideoID(url) {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
