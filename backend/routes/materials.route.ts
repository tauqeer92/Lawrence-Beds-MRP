import MaterialController from "../controllers/materials.controller";


const materialRoutes = (app: any) => {
    app.get("/material", MaterialController.Index);
    app.post('/creatematerial', MaterialController.Create);
}


export default materialRoutes