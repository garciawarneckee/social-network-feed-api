import { Router, IRoute } from 'express'

class Main {
    
    router: Router;
    routes: IRoute;

    constructor() {
        this.router = Router();
    }

    public greet() { return (req, res) => { res.json({ message: "Hello World!" }) } }

    get Routes() { 
        this.router.get('/', this.greet())
        return this.router;  
    }
}

export default Main;