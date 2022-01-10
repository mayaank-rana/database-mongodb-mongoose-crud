const mongoose = require('mongoose');
const { GridFSBucketWriteStream } = require('mongoose/node_modules/mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
mongoose.connect("mongodb://localhost:27017/fruitDB",{useNewUrlParser:true})
// Database Name

// const fruitSchema=new mongoose.Schema({
//     name:String,
//     score : Number,
//     review:String
// })

// validation


const fruitSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
      },
    score : {
        type:Number,
        min:1, 
        max:10
    },
    review:String
})

const peopleSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit:fruitSchema
})
const People=mongoose.model('people',peopleSchema)
const Fruits=mongoose.model("Fruit",fruitSchema)

// const pineapple=new Fruits({
//     name:"pineapple",
//     score:9,
//     review:"Great!"
// })
// pineapple.save();

// const people = new People({
//         name:"raj",
//         age:21,
//         favouriteFruit:pineapple
//     })
//     people.save()
// const kiwi=new Fruits({
//     //name:"kiwi",
//     score:7,
//     review:"The best!!"
// })

// kiwi.save();

// const orange=new Fruits({
//     name:"orange",
//     score:4,
//     review:"too sour"
// })

// const banana=new Fruits({
//     name:"banana",
//     score:3,
//     review:"weird texture"
// })

// Fruits.insertMany([kiwi,orange,banana],function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('done')
//     }
// })

// const People=mongoose.model('people',peopleSchema)

// const people = new People({
//     name:"mayank",
//     age:22
// })
// people.save()

// People.deleteMany({name:"mayank"},function(err){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("deletion done!!")
//             }
//         })
// mongoose.connection.close();



// const fruit=new Fruits({
//     name: "apple",
//      score:8,
//      review:"great productttttt!!!!!"
// })

// fruit.save();

// const Playlist=new mongoose.model('Playlist',playlistSchema);
// //const insertResult = collection.insertMany([{ name: "apple",score:8,review:"great fruit" }, { name:"orange",score:6,reviw:"kinda sound" }, { name:"Banana",score:9,review:"great stuff!!" }]),


// const reacctPlaylist=new Playlist({
//      name: "apple",
//      score:8,
//      review:"great fruit" 
// })
// reacctPlaylist.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   });
  
//   // or
  
//   Playlist.create({ size: 'small' }, function (err, small) {
//     if (err) return handleError(err);
//     // saved!
//   });
  
//   // or, for inserting large batches of documents
//   Playlist.insertMany([{ name: "apple",score:8,review:"great fruit" }, { name:"orange",score:6,reviw:"kinda sound" }, { name:"Banana",score:9,review:"great stuff!!" }], function(err) {
  
//   });




// Fruits.find(function(err,Fruit) {
//     if(err){
//         console.log(err);
//     }
//     else{
//         // to print all data
//         //console.log(Fruit)

//         mongoose.connection.close();

//         Fruit.forEach(function(fruit){
//             console.log(fruit.name);
//         })
//     }
// })

// Fruits.updateOne({_id:"61dc0126cd8ffbef726a2177"},{score:7,review:"Good"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("update done")
//     }

// })

// Fruits.deleteOne({name:"banana"},function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("deletion done!!")
//         }
//     })


//// uppdating mayank

const pears=new Fruits({
        name:"pears",
        score:10,
        review:"so sweet :)"
    })
    pears.save();

People.updateOne({name:"mayank"},{favouriteFruit:pears},function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("update done")
        }
    
    })