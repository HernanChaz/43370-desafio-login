import { UserModel } from "./models/user.model.js";

export default class UserDao {
    async registerUser(user) {
        try {
            const { email } = user;
            const existUser = await UserModel.findOne({ email });
            if(!existUser) {
                if(email === 'adminCoder@coder.com' && password === 'adminCod3r123'){
                    const adminUser = {...user, role: 'admin'}; //No lo persisto en la DB
                    return adminUser;
                }
                if(email !== 'adminCoder@coder.com'){ //Evito que se cree un usuario con este email
                    const newUser = await UserModel.create(user);
                    return newUser;
                }
            } else return false;
        } catch (error) {
            console.log(error);
        }
    };

    async loginUser(email, password) {
        try {
            const userExist = await UserModel.findOne({ email, password });
            if(userExist) return userExist;
            else return false;
        } catch (error) {
            console.log(error);
        }
    };
}