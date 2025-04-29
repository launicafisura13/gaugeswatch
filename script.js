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

    // output
    document.body.innerHTML = `
        <div id="container">
            <p> You should cast on <strong>${newStitchCount}</strong> stitches! </p>
            <button onclick="location.reload()"> Go back </button>
        </div>
    `;
});
