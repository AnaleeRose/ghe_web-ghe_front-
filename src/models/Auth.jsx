export const validateSession = (admin = false) => {
    let address = process.env.REACT_APP_BACKEND_URL + `/auth/`
    try {
        fetch(address, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: "include",
            }).then((res) => {
                let data = res.json()
                console.log("fucking implement me pls")
                console.log(data.headers)
                console.log(data)
            });
    } catch (error) {
        console.error("ERR");
        console.error(error);
    }

    if (sessionStorage.getItem('isLoggedIn') !== null) {
        if (admin) {
            // update to pull from db!!!
            if (sessionStorage.getItem('isAdmin') === null) {
                let address = process.env.REACT_APP_SITE_URL + "/user"
                window.location.replace(address);
                return false;
            }
        }
        return true;
    } else {
        let address = process.env.REACT_APP_SITE_URL + "/user/login"
        window.location.replace(address);
        return false;
    }

    
}