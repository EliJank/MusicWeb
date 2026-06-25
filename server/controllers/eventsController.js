import Events from "../models/eventsModel.js";


const eventsGet = ("/", 
    async (req, res) => {
        console.log("veikia");
        const allEvents = await Events.find({date: {$gte: new Date()}}).sort({date: 1});
        res.json(allEvents);
    }
);

const eventGetById = ("/:id",
    async (req, res) => {
        const {id} = req.params;
        const event = await Events.findById(id);
        if (!event) {
            return res.status(404).json({error: "Event is not found"})
        }
        res.json(event)
    });

    const eventPost = ("/create",
        async (req, res) => {
            const {title, date, location, time, url, eventType, description, genre, price} = req.body;
            try {
                const newEvent = await Events.create({title, date, location, time, url, eventType, description, genre, price});
                res.status(201).json(newEvent);
            } catch (error) {
                res.status(400).json({error: error.message})
            }
            }
    );

    const eventDelete = ("/:id", 
        async (req, res) => {
            const {id} = req.params;
            const event = await Events.findByIdAndDelete(id);
            if (!event) return res.status(404).json({error: "event is not found"});
            res.status(200).json(event);
        }
    );

    const eventPatch = ("/:id",
        async (req, res) => {
            const {id} = req.params;
            const event = await Events.findByIdAndUpdate(id, req.body, {new: true});
            if (!event) return res.status(404).json({error: "event is not found"});
            res.status(200).json(event)

        }
    );

    export default { eventsGet, eventGetById, eventPost, eventDelete, eventPatch };