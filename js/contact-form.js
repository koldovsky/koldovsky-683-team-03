(function (){
    const form = document.querySelector('.contact-form');

    async function handleSubmit(event) {
        const status = document.querySelector('.contact-form-status');
        fetch(event.target.action, {
            method: form.method,
            body: new FormData(event.target),
            headers: {
                'Accept': 'application/json'
            }
        }).then( () => {
            status.innerHTML = "Thanks for submission";
            form.reset()
        }).catch( () => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit)
})();