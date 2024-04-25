document.addEventListener('DOMContentLoaded', function() {
    const reservationButton = document.querySelector('.reservation-button');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const monthInput = document.querySelector('#month');
    const dayInput = document.querySelector('#day');
    const yearInput = document.querySelector('#year');
    const hoursInput = document.querySelector('#hours');
    const minutesInput = document.querySelector('#minutes');
    const dayNightInput = document.querySelector('#dayNight');
    const guestNumberInput = document.querySelector('#guest-number');
    const minusGuestButton = document.querySelector('#minus-guest-button');
    const plusGuestButton = document.querySelector('#plus-guest-button');

    minusGuestButton.addEventListener('click', function(event) {
        event.preventDefault();
        let currentGuestNumber = parseInt(guestNumberInput.textContent);
        if (currentGuestNumber > 1) {
            guestNumberInput.textContent = currentGuestNumber - 1;
        }
    });

    plusGuestButton.addEventListener('click', function(event) {
        event.preventDefault();
        let currentGuestNumber = parseInt(guestNumberInput.textContent);
        guestNumberInput.textContent = currentGuestNumber + 1;
    });

    reservationButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (!nameInput.value || !emailInput.value || !monthInput.value || !dayInput.value || !yearInput.value || !hoursInput.value || !minutesInput.value || !dayNightInput.value) {
            alert("Please fill in all the details.");
            return;
        }

        // Save reservation data to localStorage
        const reservationData = {
            name: nameInput.value,
            email: emailInput.value,
            date: `${monthInput.value}/${dayInput.value}/${yearInput.value}`,
            time: `${hoursInput.value}:${minutesInput.value} ${dayNightInput.value}`,
            guestNumber: guestNumberInput.textContent
        };
        localStorage.setItem('reservationData', JSON.stringify(reservationData));

        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `
            <i class="fa-regular fa-circle-check"></i>
            <p>Your reservation is <b>CONFIRMED</b></p>
            <hr class="dotted-line">
            <p><strong>Name:</strong> ${reservationData.name}</p>
            <p><strong>Date:</strong> ${reservationData.date}</p>
            <p><strong>Time:</strong> ${reservationData.time}</p>
            <p><strong>People:</strong> ${reservationData.guestNumber}</p>
            <p><strong>Email:</strong> ${reservationData.email}</p>
            <hr class="dotted-line">
            <p><b>See you soon!</b></p>
        `;
        document.body.appendChild(popup);
        setTimeout(function() {
            document.body.removeChild(popup);
        }, 3000);

        // Reset form after submission
        nameInput.value = "";
        emailInput.value = "";
        monthInput.value = "";
        dayInput.value = "";
        yearInput.value = "";
        hoursInput.value = "";
        minutesInput.value = "";
        dayNightInput.value = "";
        guestNumberInput.textContent = "4"; 
    });
});
