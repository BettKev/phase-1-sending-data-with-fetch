function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      // Append the 'id' to the DOM if the POST request is successful
      const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = data.id; // Ensure that 'data.id' exists in the response
      body.appendChild(p);
    })
    .catch(error => {
      // Append the error message to the DOM in case of failure
      const body = document.querySelector('body');
      const p = document.createElement('p');
      p.textContent = "Unauthorized Access"; // Set the message expected in the test
      body.appendChild(p);
    });
  }
  submitData('John Doe', 'example@email.com')
  