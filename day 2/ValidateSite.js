function ValidateSite(input) {

    var validRegex = /^[a-zA-Z0-9.]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        alert("Valid website!");

        document.form3.text3.focus();

        return true;

    } else {

        alert("Invalid website!");

        document.form3.text3.focus();

        return false;

    }

}
