import mongoose, {Schema} from "mongoose";

const mattressSchema = new Schema({
    name: {type: String},
    size: {type: String},
    type: {type: String},
    cost: {type: Number},
    price: {type: Number},
    description: {type: String}
});

export const Mattress = mongoose.model("Mattress", mattressSchema)