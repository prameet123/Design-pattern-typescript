import {mongodbClient, Db} from "mongodb";
class mongodb {
    private static instance:mongodb;
    private db!:Db;
    private constructor(){};
    public static async getInstance():Promise<mongodb>{
        if(!mongodb.instance){
            mongodb.instance = new mongodb();
           await mongodb.instance.connect();
        }
    }
    private async connect (){
        const connection = await mongodbClient.connect('mongodb://localhost:2701');
        this.db = connection.db('test');
        console.log("connected");
    }
    public getdb(){
        return this.db;
    }
}
//uses
const mgInstance = await mongodb.getInstance()
const users = mgInstance.getdb().collection('users')
users.insertOne({});

