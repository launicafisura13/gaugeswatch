// Get elements
const stitchCount = document.getElementById('stitchCount');
const orgWidth = document.getElementById('orgWidth');
const desWidth = document.getElementById('desWidth');

document.getElementById('submit').addEventListener('click', () => {
    try {
        // Convert input values to numbers
        const stCount = Number(stitchCount.value);
        const oWidth = Number(orgWidth.value);
        const dWidth = Number(desWidth.value);

        // Validate input
        if (
            isNaN(stCount) || isNaN(oWidth) || isNaN(dWidth) ||
            stCount <= 0 || oWidth <= 0 || dWidth <= 0
        ) {
            throw new Error("Please enter valid numbers in all fields.");
        }

        // Calculate
        const stPerCM = stCount / oWidth;
        const newStitchCount = Math.round(stPerCM * dWidth);

        // Output result
        document.body.innerHTML = `
            <div id="container">
                <p>You should cast on <strong>${newStitchCount}</strong> stitches!</p>
                <button onclick="location.href='index.html'">Go back</button>
            </div>
        `;

    } catch (error) {
        alert(error.message);
        window.location.href = "/gaugeswatch/";
    }
});
