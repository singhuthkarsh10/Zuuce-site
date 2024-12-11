document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Collect form data
    const formData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      message: document.getElementById('message').value,
    };
  
    // External REST API endpoint
    const apiUrl = 'http://127.0.0.1:5000/'; // Replace with your API URL
  
    try {
      // Send form data to API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Handle API response
      if (response.ok) {
        const result = await response.json();
        alert('Your request has been sent successfully!');
      } else {
        alert('There was an issue sending your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your request. Please try again later.');
    }
  });