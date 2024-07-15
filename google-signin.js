function handleCredentialResponse(response) {
    // Decoding the JWT token
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);

    // TODO: Send this information to your backend server for verification and user management
    // For now, we'll just display an alert with the user's name
    alert(`Welcome, ${responsePayload.name}! You've successfully signed in with Google.`);

    // TODO: Redirect the user to a logged-in state or update the UI accordingly
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

// Add event listener for when the Google Sign-In script is loaded
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "526893701730-2kkg4ihno9opnin3llvrsrme054ovu7p.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("g_id_signin"),
        { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}
