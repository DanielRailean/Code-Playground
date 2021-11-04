import User from "../models/User.js"
import mongoose from "mongoose"
import e from "express";

async function connect(){
    let password = "fOfHBgvczOTnRJoC";
    let name = "ddKamatera";
    const uri = "mongodb+srv://"+name+":"+password+"@db1.jijvj.mongodb.net/pooltrack";
    let client = await mongoose.connect(uri);
}

async function getUsers(){
    const users = await User.find();
    return users;
}
async function addUser(user){
    const exist = await User.findOne({ email: user.email,ethAddress: user.ethAddress, pool: user.pool, });
    if(exist ==null){
        const add = new User({
            ...user
        })
        await add.save();
        return add;
    } else{
        throw "User already registered for this combination of parameters!";
    }
    
}

async function getById(id){
    const exist = await User.findOne({ _id: id });
    if(exist !=null){
        return exist;
    } else{
        throw "Such user does not exist!";
    }
}
async function getByEmailEthPool(user){
    const exist = await User.deleteOne({ email: user.email,ethAddress: user.ethAddress, pool: user.pool });
    return exist;
}

async function deleteById(id){
    const exist = await User.deleteOne({ _id: id });
    return exist;
}
async function deleteByEmail(email){

}
async function deleteAllByEmail(email){
    const exist = await User.deleteMany({ email: email});
    return exist;
}
async function deleteAllByEmailAddressPool(user){
    const exist = await User.deleteMany({ email: user.email,ethAddress: user.ethAddress, pool: user.pool });
    return exist;
}
async function update(user){
    const filter = { _id: user._id };
    const update = { ...user};

    let updated = await User.findOneAndUpdate(filter,update, {
        new: true
    })
    return updated;
}


const userService = {
    connect,
    addUser,
    getUsers,
    getById,
    getByEmailEthPool,
    deleteById,
    deleteByEmail,
    deleteAllByEmailAddressPool,
    update,
    deleteAllByEmail
}

export default userService;