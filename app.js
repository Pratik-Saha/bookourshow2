const express = require('express');
const app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var emps = [
    {
        'id' : '1',
        'Name' : 'Pratik',
        'Designation' : 'Learner'
    },
    {
        'id' : '2',
        'Name' : 'Rajeev',
        'Designation' : 'Trainer'
    },
    {
        'id' : '3',
        'Name' : 'Dhoni',
        'Designation' : 'Keeper-Batsman'
    }
];

app.get('/api/employees',function(req,res){
    res.status(200).json(emps);
});

app.get('/api/employees/:id',function(req,res){
    const emp = emps.filter((e) => e.id === req.params.id);
    if(emp.length){
        res.status(200).send(emp);
    }else{
        res.status(404).json({
            'statusCode' : 404,
            'message' : `Employee with id ${req.params.id} not found`
        });
    }
});

app.post('/api/employees',function(req,res){
    emps.push(req.body);
    res.status(200).json({
        'message' : `Employee with id ${req.body.id} added successfully`
    });
});

app.put('/api/employees/:id',function(req,res){
    const emp = emps.filter((e) => e.id === req.params.id); //returns an array of 1 object 
    if(emp.length){
        if(emp[0].id === req.body.id){
            var count =0;
            for(var i=0;i<emps.length;i++){
                if(emps[i].id === emp[0].id){
                    count = i;
                    break;
                }
            }
            console.log(count);
            emps.splice(count, 1, req.body);
            res.status(200).json({
                'statusCode' : 200,
                'message' : `Employee with id ${req.params.id} updated successfully`
            });

        }
        else{
            res.status(403).json({
                'statusCode' : 403,
                'message' : `Employee id in request parameter  ${req.params.id} and in ${req.body.id} did not match`
            });
        }
    }
    else{
        res.status(404).json({
            'statusCode' : 404,
            'message' : `Employee with id ${req.params.id} not found`
        });
    }
});

app.delete('/api/employees/:id',function(req,res){
    const emp = emps.filter((e) => e.id === req.params.id);
    if(emp.length){
        for(var i=0;i<emps.length;i++){
            if(emps[i].id === emp[0].id){
                count = i;
                break;
            }
        }
        emps.splice(count,1);
        res.status(200).json({
            'statusCode' : 200,
            'message' : `Employee with id ${req.params.id} deleted successfully`
        });
    }
    else{
        res.status(404).json({
            'statusCode' : 404,
            'message' : `Employee with id ${req.params.id} not found`
        });
    }
});

app.patch('/api/employees/:id',function(req,res){
    const emp = emps.filter((e) => e.id === req.params.id);
});

app.listen(3000,function(){
    console.log('listening to port no 3000');
});
