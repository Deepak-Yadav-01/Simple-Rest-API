const express=require("express"); //importing module
const bodyParser=require("body-parser");
const app=express();   //this is the object we are going to use to handle api request
app.use(bodyParser.json());  //give express app ability to use bodyparser //to use body in postman


let patients=new Object();   //database of patients
patients["232345345"]=["deepak","yadav","465789132"]
patients["232345390"]=["rahul","yadav","sadfsghad"]
patients["232345312"]=["deepakxzcv","sadfasdf","sadfsa987d"]
patients["232345335"]=["deepak234","s'lkadfasdf","098098sadfsad"]

let records=new Object();   //database of patients records
records["232345345"]="Status=Healthy"
records["232345390"]="Status=AIDS"
records["232345312"]="Status=Cancer"
records["232345335"]="Status=Vitamin"


//get a profile
app.get("/records",(req,res)=>{    //to get data from api  //req receives all the request made to api

    //verify patients exist
    if(records[req.headers.ssn]=== undefined){
        res.status(404).send({"msg":"Patients records not found"})
        return;
    }

    //verify ssn matcher first name and last name
    if(req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]){
        if(req.body.reason== "medical records"){
            res.status(200).send(records[req.headers.ssn]);
            return;
        }else{
            res.status(501).send({"msg":"unable to find medical records "})
            return;
        }
        
    }
    else{
        res.status(401).send({"msg":"First or lastname did not match"})
        return;
    }
    //return appropriate records
    res.status(200).send({"msg":"HTTP GET - SUCCESS" })

});               

//create a profile
app.post("/",(req,res)=>{    //to post data on api
    patients[req.headers.ssn]=[req.headers.firstname,req.headers.lastname,req.headers.phone];
    res.status(200).send(patients)
});   

//update a profile
app.put("/",(req,res)=>{    //to put data on api
    //verify patients exist
    if(records[req.headers.ssn]=== undefined){
        res.status(404).send({"msg":"Patients records not found"})
        return;
    }

     //verify ssn matcher first name and last name
     if(req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]){
        patients[req.headers.ssn]=[req.headers.firstname,req.headers.lastname,req.body.phone];
        res.status(202).send(patients[req.headers.ssn]);
        return;
    }
    else{
        res.status(401).send({"msg":"First or lastname did not match"})
        return;
    }


    res.status(200).send({"msg":"HTTP put - SUCCESS" })
});   

//delete a profile
app.delete("/",(req,res)=>{    //to delete data on api\
     //verify patients exist
     if(records[req.headers.ssn]=== undefined){
        res.status(404).send({"msg":"Patients records not found"})
        return;
    }

    //verify ssn matcher first name and last name
    if(req.headers.firstname == patients[req.headers.ssn][0] && req.headers.lastname == patients[req.headers.ssn][1]){
        delete patients[req.headers.ssn]
        delete records[req.headers.ssn]
        res.status(200).send(patients)
    }
    else{
        res.status(401).send({"msg":"First or lastname did not match"})
        return;
    }
});   



app.listen(3000);