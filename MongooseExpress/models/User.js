import mongoose from "mongoose"

const schema = mongoose.Schema({
    email: String,
    ethAddress: String,
    pool:Number,
    lastBalance :Number,
    lastUpdate: Number,
    stats: Boolean,
    poolStats: Boolean,
    nextPayout: Boolean,
    daysSinceLast: Boolean,
    avgPerDaySincePayout: Boolean,
    ethPrice:Boolean,
    avgHashrate: Number,
    currency:String,

})

const User = mongoose.model("User",schema);

export default User;