const baseUrl = '';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/color-palettes`);
    let result = await response.json();

    let colorPalettes = Object.values(result);
    return colorPalettes;
};

export const create = async (data) => {
    let response = await fetch(`${baseUrl}/color-palettes`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    });

    let result = await response.json();
    return result;
};

export const getOne = async (id) => {
    let response = await fetch(`${baseUrl}/color-palettes/${id}`);
    let result = await response.json();
    return result;
};