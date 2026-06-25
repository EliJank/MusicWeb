import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        requires: true
    },
    time: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
}
, {timestamps: true});

export default mongoose.model(
    'Events',
    eventsSchema
);