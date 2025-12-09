const video = document.getElementById('mirror');
navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => { video.srcObject = stream; })
.catch(err => console.error("Camera error:", err));
