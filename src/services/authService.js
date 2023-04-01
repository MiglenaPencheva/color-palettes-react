import { beginRequest, endRequest } from '../helpers/notifications';
// const baseUrl = 'http://localhost:5500';
const baseUrl = 'https://colorpalettes-api.onrender.com';

export const login = async (username, password) => {
    beginRequest();

    let res = await fetch(`${baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    let resJson = await res.json();

    endRequest();

    if (res.ok) {
        return resJson;
    } else {
        throw resJson;
    }
};

export const register = async (username, password) => {
    beginRequest();
    let res = await fetch(`${baseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    let resJson = await res.json();

    endRequest();

    if (res.ok) {
        return resJson;
    } else {
        throw resJson;
    }
};

export const logout = (token) => {
    beginRequest();
    let res = fetch(`${baseUrl}/auth/logout`, {
        headers: {
            'X-Authorization': token,
        }
    });
    endRequest();
    return res;
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};