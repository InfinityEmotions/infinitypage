import Cookies from "universal-cookie";


export const Signin = async (user) =>{
    const url = "https://infinityslots.net/app/signin";
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    };

    const res = await fetch(url, requestOptions);
    const data = await res.json();
    if(res.status === 200)
    {
        const cookie = new Cookies();
        const userdata = {
            username: user.username,
            token: data.token,
            iduser: data.iduser
        }
        cookie.set("userdata", userdata);
    }

    return res.status;
};