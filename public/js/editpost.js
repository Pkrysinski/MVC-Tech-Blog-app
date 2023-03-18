const editFormHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector('#post-subject').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (subject && content) {
    if (event.target.hasAttribute('data-id')) {

      //TODO: It doesn't have the ID, so not sure how to get it...
      console.log("HAS ID");

        const id = event.target.getAttribute('data-id');

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

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);