const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema(
    {
        userId:{type: String , required:true },
        products:[
            {
                productId:{
                    type:String
                },
                quantity:{
                    type: Number,
                    defailt: 1,
                }
            }
        ],
       amount:{type:Number,require: true },
       address:{type : Object, require : true},
       state :{type : String, default : "pending" },
       
    },
    {timestamps: true}
);
module.exports = mongoose.model("Order", OrderSchema);