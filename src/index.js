import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import sequelize from './database/database.js';

async function main() {
    await sequelize.authenticate(); // Solo para probar que la conexión a la base de datos es exitosa
    await sequelize.sync({ alter: true }); // Sincroniza los modelos con la base de datos
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server running on port ${process.env.APP_PORT}`);
    });
}


main();