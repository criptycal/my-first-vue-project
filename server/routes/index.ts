import {Router} from 'express';
const router = Router();
import Task from '../models/Task';

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

router.post('/tasks', (req, res) => {
    const {title, description} = req.body;
    const task = new Task({title, description});
    task.save();
    res.json(task)
});

router.get('/tasks/:id', async (req, res) => {

    const {id} = req.params;
    console.log(id);

    try {
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).send('Task not found');
        }
        return res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
    
});

router.delete('/tasks/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).send('Task not found');
        }
        return res.json(task);
    } catch (error) {
        return res.status(500).send(error);
    }
    
});

router.put('/tasks/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true});
        if(!task) {
            return res.status(404).send('Task not found');
        }
        return res.json(task); 
        
    } catch (error) {
        return res.status(500).send(error);
    }
});




export default router;