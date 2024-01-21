import {redirect} from "@sveltejs/kit";

export function load({ cookies }) {
    const authToken = cookies.get('access_token');
    if (!authToken) {
        throw redirect(308, '/auth/login')
    }
}