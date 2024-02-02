function submitForm(event) {
    event.preventDefault();
    const form = document.getElementById('surveyForm');
    if (form.checkValidity()) {
        const data = {
            'First Name': document.getElementById('firstName').value,
            'Last Name': document.getElementById('lastName').value,
            'Date of Birth': document.getElementById('dob').value,
            'Country': document.getElementById('country').value,
            'Gender': getSelectedGenders(),
            'Profession': document.getElementById('profession').value,
            'Email': document.getElementById('email').value,
            'Mobile Number': document.getElementById('mobile').value
        };

        displayPopup(data);
        form.reset();
    } else {
        alert('Please fill out all required fields.');
    }
}

function getSelectedGenders() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedGenders = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedGenders.push(checkbox.id);
        }
    });
    return selectedGenders.join(', ');
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function displayPopup(data) {
    const popup = document.getElementById('popup');
    const popupData = document.getElementById('popupData');
    popupData.innerHTML = '';
    for (const key in data) {
        const value = data[key];
        const label = key + ':';
        popupData.innerHTML += `<p><strong>${label}</strong> ${value}</p>`;
    }
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}