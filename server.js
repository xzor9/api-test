const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Joseph',
        'birthLocation': 'London'
    },
    'chance':{
        'age': 29,
        'birthName': 'Chancelor',
        'birthLocation': 'Chicago'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
    console.log('index.html loaded')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLocaleLowerCase()
    if( rappers[rapperName] ){
        res.json(rappers[rapperName])
        console.log(`sending json for ${rapperName}`)
    }else{
        res.json(rappers['unknown'])
        console.log(`sending unknown json`)
    }
    
    
})

app.listen(proccess.env.PORT || PORT, ()=>{
    console.log(`the server is now running on port ${PORT}...`)
})