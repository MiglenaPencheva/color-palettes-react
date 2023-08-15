// const baseUrl = 'http://localhost:5500';
const baseUrl = 'https://colorpalettes-api.onrender.com';

export const upload = async (src) => {
    const obj = {
        src
    };
    const response = await fetch(`${baseUrl}/color-picker`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': ''
        },
        body: JSON.stringify(obj)
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};