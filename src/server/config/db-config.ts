import { connect, connection, Connection } from 'mongoose';

export class MongoConnection {
  private mongoURL: any = "mongodb+srv://admin:admin@cluster0.hefvo.mongodb.net/rebelde?retryWrites=true&w=majority";
  public db: Connection;

  public async connectToMongo() {
    const MONGO_CONNECTION_OPTIONS = {
      useNewUrlParser: true,
      autoIndex: false,
      poolSize: 10,
      connectTimeoutMS: 10000,
      useUnifiedTopology: true
    };
    connect(this.mongoURL, MONGO_CONNECTION_OPTIONS);
    this.db = connection;
    this.db.on('error', console.error.bind(console, 'Error al conectar a MongoDB:'));
    this.db.on('connected', () => {console.log('Conectado a Mongo...');});

    return true;
  };

  public async closeMongo() {
    this.db.close();
  }
}
