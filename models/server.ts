import express, {Application} from "express";
import routerUser from "../routes/usuario";
import cors from "cors";
import db from "../db/connection";
class Server {

    private app: Application;
    private port: string;
    constructor (){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }

    async dbConnection () {
        try{
            await db.authenticate();
            console.log('Database online');
        }catch(error){
            throw new Error(error); 
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors() );
        //Lectura del body
        this.app.use( express.json() );
        
        // carpeta publica
        // this.app.use(express.static('public'));
        // this.app.use( express.static('/public') );

    }

    routes(){
        this.app.use('/api/usuario', routerUser);
        this.app.use('/', express.static('public'));
    }
}

export default Server;