const newFormHandler = async (event) => {
    event.preventDefault();
  
    const subject = document.querySelector('#post-subject').value.trim();
    const content = document.querySelector('#post-content').value.trim();
  
    if (subject && content) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ subject, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create new post!');
      }
    }
  };

  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);

  