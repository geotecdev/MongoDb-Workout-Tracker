const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "workout type is a required field"
            },
            name: {
                type: String,
                trim: true,
                required: "name is a required field"
            },
            duration: {
                type: Number,
                required: "duration is a required field"
            },
            distance: {
                type: Number,
                default: 0
            },
            weight: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            },
            reps: {
                type: Number,
                default: 0
            },
        }
    ],
    day: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
