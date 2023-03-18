const editFormHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector('#post-subject').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (subject && content) {
    if (event.target.hasAttribute('data-id')) {
        const response = await fetch(`/api/blogs/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ subject, content }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to edit post!');
        }
      }
    }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete post!');
    }
  }
};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);

document
  .querySelector('.delete-post')
  .addEventListener('click', delButtonHandler);
