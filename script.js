// get elements
const stitchCount = document.getElementById('stitchCount');
const orgWidth = document.getElementById('orgWidth');
const desWidth = document.getElementById('desWidth');

document.getElementById('submit').addEventListener('click', () => {
    // convert input values to numbers
    const stCount = Number(stitchCount.value);
    const oWidth = Number(orgWidth.value);
    const dWidth = Number(desWidth.value);

    // calculate
    const stPerCM = stCount / oWidth;
    const newStitchCount = Math.round(stPerCM * dWidth);

    // check for invalid input
    function validateInput() {
        try {
            if(isNaN(stitchCount) || isNaN(orgWidth) || isNaN(desWidth)) {
                throw new Error("The input is invalid or incomplete.");
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert(error.message);
            window.location.href = "index.html"; // Redirects to index.html
        }
    }

    // output
    document.body.innerHTML =
    validateInput();
    `
        <div id="container">
            <p> You should cast on <strong>${newStitchCount}</strong> stitches! </p>
            <button onclick="location.reload()"> Go back </button>
        </div>
    `;
});
