const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Movie title is required"],
        trim:true,
        index:true,
    },
    genre:{ //genre tells what types of movie it's
        type:String,
        required:[true,"Genre ids required"],
        enum:[
            "Action",
            "comedy",
            "Dramatic",
            "Horror",
            "Sci-Fi",
            "Romantic",
            "Thriller",
        ],
        index:true,
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"Rating must be at least 1"],
        max:[5,"Rating cannot exceed 5"],
        index:true,
    },
    duration:{
        type:Number,
        required:[true,"Duration is required"],
    },
    releaseDate:{
        type:Date,
        required:[true,"Release date is required"],
        index:true,
    },
    poster:{
        type:String,
        default:"",
    },
    language:{
        type:String,
        index:true,
    },
    isActive:{
    type:Boolean,
    deafault:true,
    },
},{
    timestamps:true,
});
//compound index
movieSchema.index({genre:1,rating:-1,duration});

//text index
movieSchema.index({title:"text"});

//Virtual field
movieSchema.virtual("isReleased").get(function(){
    return this.releaseDate<=new Date();
});
module.exports = mongoose.model("Movie",movieSchema);