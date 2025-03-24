// Function to go to the proposal page
function goToProposal() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('proposalPage').style.display = 'block';
}

// Counter for button clicks
let clickCount = 0;

// Function to handle proposal response
function handleProposalResponse(response) {
    if (response === 'yes') {
        alert('Yay! She said YES!');
    } else if (response === 'no') {
        // Move the "No" button to a new position each time it's clicked
        moveNoButton();
    }
}

// Function to move the "No" button to a new position on each click
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    
    // Increment click count
    clickCount++;

    // Define a list of positions to move to (adjust these values for your needs)
    const positions = [
        { top: '100px', left: '100px' },
        { top: '200px', left: '300px' },
        { top: '300px', left: '500px' },
        { top: '400px', left: '700px' }
    ];

    // Loop back to the start of positions after reaching the last position
    const position = positions[clickCount % positions.length];

    // Apply the new position to the button using CSS transform
    noButton.style.transform = `translate(${position.left}, ${position.top})`;
}
