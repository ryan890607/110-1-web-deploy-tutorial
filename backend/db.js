// import mongoose from "mongoose";

// const { Schema } = mongoose;
// mongoose.set('useCreateIndex', true);

// const peopleSchema = new Schema({
//   ssn: { type: String, required: true, unique: true },
//   name: { type: String, required: true },
//   severity: { type: Number, required: true },
//   location: {
//     name: { type: String, required: true },
//     description: { type: String, required: false },
//   },
// });

// const People = mongoose.model("People", peopleSchema);
// const db = { People };

// export default db;



import mongoose from 'mongoose';
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const storeSchema = new Schema({
    name: { type: String, required: true},
    score: { type: Number, required: true },
    location: { type: String, required: true },
    posts: [{type: mongoose.Types.ObjectId, ref: 'Post'}],
    postCount: { type: Number, required: true }
});

const userSchema = new Schema({
    name: { type: String, required: true },
    biography: { type: String, required: false},
    password: { type: String, required: true },
    posts: [{type: mongoose.Types.ObjectId, ref: 'Post'}],
    favs: [{type: mongoose.Types.ObjectId, ref: 'Store'}],
    // image: { type: String, required: false }
});

const commentSchema = new Schema({
    text: { type: String, required: true },
    sender: { type: String, required: true },
    post: { type: mongoose.Types.ObjectId, ref: 'Post' }
});


const postSchema = new Schema({
    title: { type: String, required : true },
    body: { type: String, required: true },
    author: { type: String, required: true},
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
    store: { type: Object, required: true},
    score: { type: Number, required: true }
});

const StoreModel = mongoose.model('Store', storeSchema);
const UserModel = mongoose.model('User', userSchema);
const CommentModel = mongoose.model('Comment', commentSchema);
const PostModel = mongoose.model('Post', postSchema);

const db = {
    StoreModel,
    UserModel,
    CommentModel,
    PostModel
}

export default db;