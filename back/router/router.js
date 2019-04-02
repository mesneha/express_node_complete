var express= require('express')
var route=express.Router();
const item=require('../model/item')

route.get('/', (req,res)=>
{
    console.log('I am from diffrent router module');
});

route.post('/item', (req,res,next)=>
{
    const newitem= new item(
      {
        itemname:req.body.itemname,
        itemquantity:req.body.itemquantity,
        itembought:req.body.itembought

        });//item close
  
newitem.save((err, item)=>{
    if(err)
    {
        res.json(err);
    }

    else{
        res.json({msg:'Inserted'})
    }

});//post close
});

route.get('/items',(req,res)=>

{
    item.find((err,item)=>

{
     if(err)
  {
   res.json(err);
  }
     else
   {
   res.json(item)
}   
});
});

route.delete('/item/:id',(req,res,next)=>{
    item.remove({_id: req.params.id}, function (err, result) {
    if (err)
  { res.json(err);
  }
    else
   { res.json(result);
   }
    });
    });

 route.put('/item/:id', (req,res, next)=>{
    //updating data
    item.findOneAndUpdate({_id: req.params.id}, 
        {
  $set:{
    itemname:req.body.itemname,
    itemquantity:req.body.itemquantity,
    itembought:req.body.itembought
  }
        }, function(err, result)
        {
            if(err)
            {
                res.json(err)
            }
            else{
                
                res.json({msg:'item has been updated successfully'})
            }

        });
 });

 

    
module.exports=route;
