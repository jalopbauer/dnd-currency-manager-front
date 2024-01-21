<script>
    import Header from "$lib/Header/Header.svelte";
    import { goto } from "$app/navigation";
    import Cookies from 'js-cookie';
    import "../../../styles.css";

    let username = "";
    let password = "";

    async function login() {
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch("http://localhost:8080/auth/token", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formData
            });

            if (response.ok) {
                const { access_token } = await response.json();
                Cookies.set('access_token', access_token); // Set the access token using js-cookie
                goto('/'); // Redirect to the home page
            } else {
                console.error('Login failed:', response.status);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
</script>

<Header headerText="Login" />

<form on:submit|preventDefault={login}>
    <label>
        Username
        <input bind:value={username} type="text" />
    </label>
    <label>
        Password
        <input bind:value={password} type="password" />
    </label>
    <button type="submit">Login</button>
</form>
