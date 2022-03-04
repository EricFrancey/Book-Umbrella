const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#comment-desc').value.trim();
  const name = document.querySelector('#comment-name').value.trim();
  var pathArray = window.location.pathname.split('/');
  var book_id = pathArray[2];
  if (description) {
    //need to pass it book_id it is in the url this page is in
    //ideally pass it here so it gets assigned when deconstructed in routes
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ name, description, book_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(window.location.pathname);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
