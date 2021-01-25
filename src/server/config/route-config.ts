import satelites from '../routes/satelites'

export class RouteConfig {

  public init(app: any){
    app.use('/api', satelites);
  }

}
