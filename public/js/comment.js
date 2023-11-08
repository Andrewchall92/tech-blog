const commentFormHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment-form').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(body);
    if (body) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                body,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);
        if (response.ok) {
            document.location.reload("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
}

document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);