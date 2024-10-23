document.getElementById('yes').addEventListener('click', function() {
    const contentElement = document.getElementById('content');
    
    // Replace the content with the message after the "Yes" button is clicked
    contentElement.innerHTML = `
        <h2>You’ve made me the happiest person in the world!❤️</h2>
        <p>I can’t wait to start this beautiful journey together with you.🤗</p>
    `;
});

document.getElementById('no').addEventListener('click', function() {
    const yesBtn = document.getElementById("yes");
    const noBtn = document.getElementById("no");
    const cta = document.querySelector(".buttons");

    // Switch the positions of the buttons
    const yesIdx = Array.from(cta.children).indexOf(yesBtn);
    const noIdx = Array.from(cta.children).indexOf(noBtn);

    if (yesIdx < noIdx) {
        cta.insertBefore(noBtn, yesBtn);
    } else {
        cta.insertBefore(yesBtn, noBtn);
    }
});
