const baseUrl = 'http://localhost:5500';

export const upload = async (image) => {
    let response = await fetch(`${baseUrl}/color-picker`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': ''
        },
        body: JSON.stringify(image)
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};