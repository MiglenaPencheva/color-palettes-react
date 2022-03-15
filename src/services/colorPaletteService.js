const baseUrl = 'http://localhost:5500';

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/color-palettes`);
        let result = await response.json();

        let colorPalettes = Object.values(result);
        return colorPalettes;
    } catch (error) {
        return { msg: error };
    }
};

export const create = async (data, token) => {

    let response = await fetch(`${baseUrl}/color-palettes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const getOne = async (colorPaletteId) => {
    let response = await fetch(`${baseUrl}/color-palettes/${colorPaletteId}`);
    let result = await response.json();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const remove = async (id, token) => {
    try {
        let response = await fetch(`${baseUrl}/color-palettes/${id}/delete`, {
            method: 'DELETE',
            headers: { 'X-Authorization': token }
        });
        let result = await response;
        return result;
    } catch (error) {
        console.log(error);
    }
};