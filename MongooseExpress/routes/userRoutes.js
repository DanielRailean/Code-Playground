import express from "express"
import userService from "../data/userService.js";
import errorHandler from "../errorHandler.js";

const router = express.Router();

router.get("/users", async(req,res)=>{
    res.send(await userService.getUsers());
})

router.post("/users",async(req,res)=>{
    try{
    res.send(await userService.addUser(req.body));   
    }catch(err){
    res.status(403).send(errorHandler.getNewError(403,err));
    }
})

router.get("/users/:id", async(req,res)=>{
    try{
        res.send(await userService.getById(req.params.id));   
        }catch(err){
        res.status(404).send(errorHandler.getNewError(404,err.message));
    }
})

router.put("/users", async(req,res)=>{
    try {
        res.send(await userService.update(req.body));
    } catch (err) {
        res.status(404).send(errorHandler.getNewError(404,err.message));
    }
})

router.delete("/users/:id", async(req,res)=>{
    try {
        res.send(await userService.deleteById(req.params.id));
    } catch (err) {
        res.status(404).send(errorHandler.getNewError(404,err.message));
    }
})
router.delete("/users", async(req,res)=>{
    try {
        res.send(await userService.deleteAllByEmailAddressPool(req.body));
    } catch (err) {
        res.status(404).send(errorHandler.getNewError(404,err.message));
    }
})
router.delete("/users/unsubscribe/:email", async(req,res)=>{
    try {
        res.send(await userService.deleteAllByEmail(req.params.email));
    } catch (err) {
        res.status(404).send(errorHandler.getNewError(404,err.message));
    }
})

export default router;