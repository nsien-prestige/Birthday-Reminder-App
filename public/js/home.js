document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = sanitizeInput(document.getElementById('name').value.trim());
        const DOB = sanitizeInput(document.getElementById('dob').value.trim());
        const email = sanitizeInput(document.getElementById('email').value.trim());

        try {
            const res = await fetch('/records/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    DOB,
                    email
                })
            });

            const data = await res.json();

            if (!res.ok) {
                const errMsg = data.error || 'An error occurred. Please try again.';
                addAnnouncement(errMsg, 'error'); 
            }

            if (res.ok) {
                addAnnouncement('Your reminder has been set successfully!', 'success'); 
                // TODO: Create to a page showing a list of completed or awaiting reminders
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            addAnnouncement('An error occurred while submitting the form. Please try again.', 'error');
        }
        
    })
})

const sanitizeInput = (input = '') => {
    return String(input)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}