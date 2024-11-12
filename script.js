function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const statusDiv = document.getElementById('status');

    // Clear the status message
    statusDiv.innerText = '';

    if (!videoUrl) {
        statusDiv.innerText = 'Please enter a valid video URL.';
        return;
    }

    // In a real-world scenario, you'd send `videoUrl` to your server for processing.
    // For this example, we'll simulate a download request.

    statusDiv.innerText = 'Attempting to download video...';

    // Simulate download process
    setTimeout(() => {
        statusDiv.innerText = `Download successful for video: ${videoUrl}`;
    }, 2000);
}
