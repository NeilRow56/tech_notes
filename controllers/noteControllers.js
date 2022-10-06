import Employee from "../models/Employee"
import Note from '../models/Note'


import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middleware/catchAsyncErrors'

// Get all notes

const allNotes = catchAsyncErrors(async (req, res) => {
    // Get all notes from MongoDB
    const notes = await Note.find().lean()

    // If no notes 
    if (!notes?.length) {
        return res.status(400).json({ message: 'No notes found' })
    }

    // Add employeeName to each note before sending the response 
    // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
    // You could also do this with a for...of loop
    const notesWithEmployee = await Promise.all(notes.map(async (note) => {
        const employee = await Employee.findById(note.employee).lean().exec()
        return { ...note, employeeName: employee.employeeNname }
    }))

    res.json(notesWithEmployee)
})

// Create new note = /api/notes

const newNote = catchAsyncErrors(async (req, res) => {

   
    
    const { employee, title, text } = req.body

    // Confirm data
    if (!employee || !title || !text) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate title
    const duplicate = await Note.findOne({ title }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    // Create and store the new user 
    const note = await Note.create({ employee, title, text })

    if (note) { // Created 
        return res.status(201).json({ message: 'New note created' })
    } else {
        return res.status(400).json({ message: 'Invalid note data received' })
    }

})

//GET single note details => api/note/:id
const getSingleNote = catchAsyncErrors(async (req, res) => {
    
    try {
        const singleNote = await Note.findById(req.query.id);
  
        if(!singleNote) {
            return res.status(404).json({
                success: false,
                error: "Note not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleNote
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 })

const updateSingleNote = catchAsyncErrors(async (req, res) => {
    const { id, employee, title, text, completed } = req.body

    // Confirm data
    if (!id || !employee || !title || !text || typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm note exists to update
    const note = await Note.findById(id).exec()

    if (!note) {
        return res.status(400).json({ message: 'Note not found' })
    }

    // Check for duplicate title
    const duplicate = await Note.findOne({ title }).lean().exec()

    // Allow renaming of the original note 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate note title' })
    }

    note.employee = employee
    note.title = title
    note.text = text
    note.completed = completed

    const updatedNote = await note.save()

    res.json(`'${updatedNote.title}' updated`)
})

const deleteSingleNote = catchAsyncErrors(async (req, res) => {
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'Note ID required' })
    }

    // Confirm note exists to delete 
    const note = await Note.findById(id).exec()

    if (!note) {
        return res.status(400).json({ message: 'Note not found' })
    }

    const result = await note.deleteOne()

    const reply = `Note '${result.title}' with ID ${result._id} deleted`

    res.json(reply)
})

export {
    
newNote,
allNotes,
getSingleNote,
updateSingleNote,
deleteSingleNote
    
    }