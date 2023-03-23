import { beginRequest, endRequest } from '../helpers/notifications';
// const baseUrl = 'http://localhost:5500';
const baseUrl = 'https://colorpalettes-api.onrender.com';

export const getAll = async (page = 1, limit = 10) => {
    try {
        beginRequest();
        let response = await fetch(`${baseUrl}/color-palettes?page=${page}&limit=${limit}`);
        let { data, totalPages } = await response.json();
        endRequest();
        return { data, totalPages };

    } catch (error) {
        return { msg: error };
    }
};

// export const getMine = async (token) => {
//     try {
//         // let query = encodeURIComponent(`creator="${userId}"`);
//         // let response = await fetch(`${baseUrl}/color-palettes?where=${query}`);
//         let response = await fetch(`${baseUrl}/color-palettes/my`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-authorization': token
//             }
//         });
//         return await response.json();
//     } catch (error) {
//         return { msg: error };
//     }
// };

// export const getFavorites = async (token) => {
//     try {
//         let response = await fetch(`${baseUrl}/color-palettes/favorites`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-authorization': token
//             }
//         });
//         return await response.json();
//     } catch (error) {
//         return { msg: error };
//     }
// };

export const create = async (data, token) => {
    for (const key of data.keys()) {
        console.log(key, data.get(key));
    }

    beginRequest();

    let response = await fetch(`${baseUrl}/color-palettes`, {
        method: 'POST',
        headers: { 
            'x-authorization': token
        },
        body: data
    });

    let result = await response.json();

    endRequest();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const save = async (data, token) => {
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

export const update = async (colorPaletteId, data, token) => {
    beginRequest();

    let response = await fetch(`${baseUrl}/color-palettes/${colorPaletteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    endRequest();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const getOne = async (colorPaletteId) => {
    beginRequest();

    let response = await fetch(`${baseUrl}/color-palettes/${colorPaletteId}`);
    let result = await response.json();

    endRequest();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const like = async (colorPaletteId, data, token) => {
    beginRequest();

    let response = await fetch(`${baseUrl}/color-palettes/${colorPaletteId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'x-authorization': token
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    endRequest();

    if (response.ok) {
        return result;
    } else {
        throw result;
    }
};

export const remove = async (id, token) => {
    try {
        beginRequest();

        let response = await fetch(`${baseUrl}/color-palettes/${id}`, {
            method: 'DELETE',
            headers: { 'X-Authorization': token }
        });
        let result = await response;

        endRequest();

        return result;
    } catch (error) {
        console.log(error);
    }
};

