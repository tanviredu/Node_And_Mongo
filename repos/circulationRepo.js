const MongoClient = require('mongodb').MongoClient;

function circulationRepo() {
    const url = 'mongodb://localhost:27017';
    const dbName = 'circulation'
    
    function get(query,limit){
        return new Promise( async (resolve,reject)=>{
            const client = new MongoClient(url);
            try{
                await client.connect();
                const db = client.db(dbName);
                let items = db.collection('newspaper').find(query);// this is the cursor
                if(limit > 0){
                    items = items.limit(limit);
                }
                resolve(await items.toArray());
            }catch(error){
                reject(error);
                
            }
        })
    }
    
    function loadData(data){
        return new Promise( async (resolve,reject)=>{
            const client = new MongoClient(url);
            try{
                await client.connect();
                const db = client.db(dbName);
                result = await db.collection('newspaper').insertMany(data);
                resolve(result);
                client.close();
                
                
            }catch(error){
                reject(error);
            }
            
            })        
    }
    
    
    return {loadData,get}
}

module.exports = circulationRepo(); 