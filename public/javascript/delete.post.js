async function deleteFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
      });
     
      }
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);