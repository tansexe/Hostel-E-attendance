const video = document.getElementById("video");

// Load face-api.js models
Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/Face-detection/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/Face-detection/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/Face-detection/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/Face-detection/models"),
]).then(startVideo);

const dummyLabels = ["Person 1", "Person 2", "Person 3", "Person 4"]; // Dummy labels
const attendanceList = [];

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: {} })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((err) => console.error("Error accessing webcam: ", err));
}

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withFaceDescriptors();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    // Clear the canvas before drawing the new detections
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the detections
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    const labels = resizedDetections.map(
      (_, index) => dummyLabels[index % dummyLabels.length]
    );

    labels.forEach((label, i) => {
      const box = resizedDetections[i].detection.box;
      const drawOptions = { label: label, lineWidth: 2 };

      const drawBox = new faceapi.draw.DrawBox(box, drawOptions);
      drawBox.draw(canvas);
      console.log(`Face detected: ${label}`);
    });

    labels.forEach((label, i) => {
      if (!attendanceList.some((entry) => entry.name === label)) {
        attendanceList.push({ name: label, timestamp: new Date() });
        const faceImage = context.getImageData(
          resizedDetections[i].detection.box.x,
          resizedDetections[i].detection.box.y,
          resizedDetections[i].detection.box.width,
          resizedDetections[i].detection.box.height
        );
        console.log(`Captured face of ${label}`);
      }
    });
  }, 100);
});
