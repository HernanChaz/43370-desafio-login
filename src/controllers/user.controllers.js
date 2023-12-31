import UserDao from "../daos/mongodb/user.dao.js";
const userDao = new UserDao();

export const registerUser = async(req, res) => {
    try {
        const newUser = await userDao.registerUser(req.body);
        if(newUser) res.redirect('/');
        else res.redirect('/error-register');
    } catch (error) {
        console.log(error);
    }
};

export const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userDao.loginUser(email, password);
        if(user) {
            req.session.user = user;
            res.redirect('/api/products');
        } else {
            res.redirect('/error-login')
        };
    } catch (error) {
        console.log(error);
    }
};

export const logoutUser = async(req, res) => {
    req.session.destroy();
    res.redirect("/");
};