async function  logout() {
  console.log("CLICKED")
  // same error path in login users does not exist and path is wrong 
    const response = await fetch('/api/users/logout', {
       method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
}
  
document.querySelector('#logout').addEventListener('click', logout);