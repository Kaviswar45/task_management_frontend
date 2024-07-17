document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://taskmanagement-backend-xalx.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();
        console.log(result)
        if (response.ok) {
            localStorage.setItem('token', result.token);
            //window.location.href='../home/home.html';
            if (result.profileExists==1){
                window.location.href='./home/home.html';
            }
            else{
                window.location.href='./completeProfile.html'
            }
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed');
    }
});
