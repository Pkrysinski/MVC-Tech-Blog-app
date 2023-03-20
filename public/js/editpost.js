const editFormHandler = async (event) => {
  event.preventDefault();

  const subject = document.querySelector('#post-subject').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  const postID = document.querySelector('input[name="postId"]').value;

  if (subject && content) {

    if (postID) {
        const response = await fetch(`/api/blogs/${postID}`, {
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
      } else {
        res.status(400).end();
      }
    } else {
      window.alert("Please make sure Title and Content are populated!");
    }
};



document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);