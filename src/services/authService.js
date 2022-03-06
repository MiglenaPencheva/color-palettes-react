const baseUrl = 'http://localhost:5500';

export const login = async (username, password) => {
    let res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    let resJson = await res.json();

    if (res.ok) {
        return resJson;
    } else {
        throw resJson;
    }
};

export const register = async (username, password) => {
    let res = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    let resJson = await res.json();

    if (res.ok) {
        return resJson;
    } else {
        throw resJson;
    }
};

export const logout = (token) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};