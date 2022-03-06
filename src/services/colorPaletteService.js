const baseUrl = 'http://localhost:5500';

export const getAll = async () => {
    try {
        let response = await fetch(`${baseUrl}/color-palettes/`);
        let result = await response.json();

        let colorPalettes = Object.values(result);
        return colorPalettes;
    } catch (error) {
        return { msg: error };
    }
};

export const create = async (data, token) => {
    try {
        let response = await fetch(`${baseUrl}/color-palettes/`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        return result;
    } catch (error) {
        return { msg: error };
    }

};

export const getOne = async (id) => {
    let response = await fetch(`${baseUrl}/color-palettes/${id}`);
    let result = await response.json();
    return result;
};

export const remove = async (id, token) => {
    try {
        let response = await fetch(`${baseUrl}/color-palettes/${id}`, {
            method: 'DELETE',
            headers: { 'X-Authorization': token }
        });
        let result = await response;
        return result;
    } catch (error) {
        console.log(error);
    }
};