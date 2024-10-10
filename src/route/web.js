import express from "express"
import homeController from "../controller/homeController";
import userController from '../controller/userController';
let router = express.Router();
let initWebRoutes = (app) =>{
    router.get('/',homeController.getHome);
    router.get('/crud',homeController.getCRUD);
    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.displayGetCRUD);
    router.get('/edit-crud',homeController.getEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    router.get('/delete-crud',homeController.deleteCRUD);
    router.post('/create-user',userController.createUser);
    router.get('/api/get-allcode',userController.getAllCode);
    router.post('/api/add-new-user',userController.addNewUser);
    router.get('/api/get-all-user',userController.getAllUser);
    router.put('/api/put-save-user',userController.putSaveUser);
    router.delete('/api/delete-user',userController.deleteUser);
    router.get('/api/get-user-by-rfid',userController.getUserByRfid);
    router.get('/api/get-all-attendance-today',userController.getAllAttendanceToday)
    router.post('/api/create-attendance-and-history',userController.createTimeKeepingAndHistory);
    router.delete('/api/delete-attendance',userController.deleteAttendance);
    router.get('/api/get-all-history',userController.getAllHistory)
    return app.use("/",router);
}
module.exports = initWebRoutes;
