import { PrismaClient, Prisma } from '@prisma/client'
const express = require('express');

const router = express.Router();
router.use(express.json());


const prisma = new PrismaClient();

///---------------- routers

router.use((req:any, res:any, next:any) => {
    console.log(`Time: ${Date()}; url: ${req.url} method: ${req.method}`)
    next()
  })


router.get('/',async(req:any,res:any) =>{
    res.send(`
     For Get All Contacts: /api/contacts Method GET <br><br>
     For Create New Contact: /api/contacts Method POST json body Example: { name:"example" , number:"50524" }<br><br>
     For Edit Contact: /api/contacts Method PUT json body for Example: {"id":14,"name":"example","number":"0936456"}<br><br>
     For Delete a Contact: /api/contacts/$id Method Delete for Example: /api/contacts/12 <br><br>
     `)
})  

//Get All
router.get('/contacts', async (req:any, res:any) => {
    const contacts = await prisma.contact.findMany();
    res.send(contacts)
});

//Create one
router.post('/contacts', validationParams , async (req:any, res:any) => {
    const number:string = req.body.number
    const name:string = req.body.name

    let contact : Prisma.ContactCreateInput = {
        name,
        number
    }
    await prisma.contact.create({data: contact})
    res.status(200).json(contact)
})

//Edit One
router.put('/contacts',validationParams,async (req:any, res:any) =>{
    const number:string = req.body.number
    const id:number = req.body.id
    const name:string = req.body.name
    let contact : Prisma.ContactUpdateInput = {
        name,
        number,
    }
    try {
        const newContact = await prisma.contact.update({where:{id},data: contact})
        res.status(200).json(newContact)
    } catch (error) {
        res.status(500).json({message:error})
    }
})

//Delete One
router.delete('/contacts/:id',async (req:any, res:any) =>{
    const id = Number(req.params.id)
    if(Number.isNaN(id)){
        res.status(400).json({message:"typeof id should be Number"})
        return
    }
    try{
        await prisma.contact.delete({
            where:{
                id
            }
        })
        res.status(200).json({message:"delete user successfully"})
    }catch (err){
        res.status(500).json({message:err})
        return
    }
})

///---------------- routers

///---------------- functions

async function validationParams(req:any,res:any,next:any) {
    if (!((req.body.name || req.body.id) && req.body.number && typeof req.body.number == "string" )){
        res.status(400).json({message: "body have wrong values or empty"})
        return
    }
    next()
}

module.exports = router

///---------------- functions

