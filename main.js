// Get the audio element
const introAudio = document.getElementById('introAudio');
// Get the play button container
const playButtonContainer = document.querySelector('.play-button-container');
// Get the SVG path for the play icon (first path child of the SVG)
const playIconPath = playButtonContainer.querySelector('.play-icon path:first-child');

let isPlaying = false; // To keep track of audio state

// Function to toggle audio playback
function toggleAudio() {
    if (isPlaying) {
        // Pause audio
        introAudio.pause();
        // Reset playback to start for next play
        introAudio.currentTime = 0; 
        isPlaying = false;
        // Change icon to play
        playIconPath.setAttribute('d', 'M8 5v14l11-7z'); // Play icon path
        playButtonContainer.classList.remove('playing');
    } else {
        // Play audio
        introAudio.play()
            .then(() => {
                isPlaying = true;
                // Change icon to pause
                playIconPath.setAttribute('d', 'M6 19h4V5H6v14zm8-14v14h4V5h-4z'); // Pause icon path
                playButtonContainer.classList.add('playing');
            })
            .catch(error => {
                console.error("Audio playback failed:", error);
                // Handle autoplay policy restrictions if needed
                alert("Audio playback might be blocked by your browser's autoplay policy. Please interact with the page first.");
            });
    }
}

// Optional: If the audio finishes playing by itself, reset the icon
introAudio.addEventListener('ended', () => {
    isPlaying = false;
    playIconPath.setAttribute('d', 'M8 5v14l11-7z'); // Play icon path
    playButtonContainer.classList.remove('playing');
});
