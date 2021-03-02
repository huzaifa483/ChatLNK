import mongoose from 'mongoose';

const ChatLNKSchema= mongoose.Schema
(
    {
        message:String,
        name:String,
        timestamp:String
    }
);

export default mongoose.model("messages",ChatLNKSchema);