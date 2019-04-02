const mongoose=require('mongoose')
const itemschema=mongoose.Schema(
{
    itemname:{
        type:String,
        requires:false

    },
    
    itemquantity:{
        type:Number,
        requires:false

    },
    itembought:{
        type:Boolean,
        requires:false

    },
});

const items=module.exports=mongoose.model('items',itemschema)

