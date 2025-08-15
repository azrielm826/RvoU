// Uncomment to automatically trigger welcome message
welcomeSpeech();

/**
 * Prompts the user for their name and displays it in the greeting element.
 * If the user enters a name, it updates the content of the element with id 'user-greeting'.
 * If no name is provided, the greeting remains unchanged.
 */
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

/**
 * Handles the message sending functionality.
 * Retrieves the message from the input field with id 'user-message'.
 * Displays an alert with the message if one is provided,
 * otherwise shows an error message asking the user to enter text.
 */
document.getElementById("messageForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tanggalLahir = document.getElementById("tanggalLahir").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let pesan = document.getElementById("pesan").value;
    let currentTime = new Date().toString();

    document.getElementById("result").innerHTML = `
        <p><b>Current time :</b> ${currentTime}</p>
        <p><b>Nama :</b> ${nama}</p>
        <p><b>Tanggal Lahir :</b> ${tanggalLahir}</p>
        <p><b>Jenis Kelamin :</b> ${gender}</p>
        <p><b>Pesan :</b> ${pesan}</p>
    `;
});