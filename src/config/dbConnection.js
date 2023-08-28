import { connect } from 'mongoose';

export const connectionString = 'mongodb+srv://admin:admin@cluster0.ybm7tig.mongodb.net/ecommerce?retryWrites=true&w=majority';

try {
    await connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB!');
} catch (error) {
    console.log(error);
}