import mongoose, { Schema } from "mongoose"

const CounterInstanceSchema = new Schema(
    {
        value: Number,
        color: String,
    }
);

const CounterInstance = mongoose.models.CounterInstance || mongoose.model("CounterInstance", CounterInstanceSchema)

export default CounterInstance