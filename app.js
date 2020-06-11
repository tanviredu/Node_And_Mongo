// property
const MongoClient = require('mongodb').MongoClient;


// adding the testing functionality
const assert = require('assert');
const circulationRepo = require('./repos/circulationRepo');
const data = require('./circulation.json')
const url = 'mongodb://localhost:27017'
const dbName = 'circulation'


async function main(){
    const client = new MongoClient(url);
    await client.connect();
    
    // load the data
    const result = await circulationRepo.loadData(data)
    const result_count = data.length;
    const expected_count =  result.insertedCount;
    
    const getData = await circulationRepo.get();
    
    const filterData = await circulationRepo.get({Newspaper: getData[4].Newspaper})
    
    
    const limitData = await  circulationRepo.get({},10);
    
    
    
    console.log(getData[4]._id)
    //console.log(filterData);
    //console.log(limitData);
    //console.log(getData.length);
    //console.log(getData[4].Newspaper)
    // drop the database
    await client.db(dbName).dropDatabase();
    // make an admin so we can  use for the introspection
     const admin = client.db(dbName).admin();
    // console.log(await admin.listDatabases())
     client.close();
    
}

main()
