const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-input').value.trim();
    const description = document.querySelector('#description-input').value.trim();
    const body = document.querySelector('#body-input').value.trim();

    if(title && description && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, description, body }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        };
    };
};

document.querySelector('.newpost-form').addEventListener('submit', newPostHandler);