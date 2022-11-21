const getAllUsers = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:3000/api/v1/companies'
        });
        console.log(res.data);
    }
    catch (err) {
        console.log(err.response.data);
    }
}


document.querySelector('.show_all_users_form').addEventListener('submit', e => {
    e.preventDefault();

    getAllUsers();
})