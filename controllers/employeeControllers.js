
import Employee from "../models/Employee"
import Note from '../models/Note'
import bcrypt from 'bcrypt'
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middleware/catchAsyncErrors'



 
//GET all employees
 
const allEmployees =  async (req, res) => {

    const employeesCount = await Employee.countDocuments();

   try {
    const employees = await Employee.find().select('-password').lean()

    // If no employees 
    if (!employees?.length) {
        return res.status(400).json({ message: 'No employees found' })
    }

 
    res.status(200).json({
        success: true,
        employeesCount,
        employees
    })

      
   } catch (error) {
       res.status(400).json({
           success: false,
           error: error.message
       })
   }

     
}
// Create new employee = /api/employees
 
const newEmployee = catchAsyncErrors(async (req, res) => {
    const { employeeName, password, roles } = req.body

    // Confirm data
    if (!employeeName || !password || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Check for duplicate username
    const duplicate = await Employee.findOne({ employeeName }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate employee name' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const employeeObject = { employeeName, "password": hashedPwd, roles }

    // Create and store new user 
    const employee = await Employee.create(employeeObject)

    if ( employee ) { //created 
        res.status(201).json({ message: `New employee ${employeeName} created` })
    } else {
        res.status(400).json({ message: 'Invalid employee data received' })
    }
})

 //GET single employee details => api/employees/:id
 const getSingleEmployee = async (req, res) => {
 
    try {
        const singleEmployee = await Employee.findById(req.query.id);
  
        if(!singleEmployee) {
            return res.status(404).json({
                success: false,
                error: "Employee not found with this ID"
            })
  
        }
  
        res.status(200).json({
            success: true,
            singleEmployee
        })
       
   
       
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
            
    }
 }
 
 //UPDATE single employee details => api/employees/:id

 const updateSingleEmployee = catchAsyncErrors(async (req, res) => {

    const { id, employeeName, roles, active, password } = req.body

    // Confirm data 
    if (!id || !employeeName || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields except password are required' })
    }

    // Does the employeee exist to update?
    const employee = await Employee.findById(id).exec()

    if (!employee) {
        return res.status(400).json({ message: 'Employee not found' })
    }

    // Check for duplicate 
    const duplicate = await Employee.findOne({ employeeName }).lean().exec()

    // Allow updates to the original employee 
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'Duplicate employee name' })
    }

    employee.employeeName = employeeName
    employee.roles = roles
    employee.active = active

    if (password) {
        // Hash password 
        employee.password = await bcrypt.hash(password, 10) // salt rounds 
    }

    const updatedEmployee = await employee.save()

    res.json({ message: `${updatedEmployee.employeeName} updated` })
})
       
 
    
// DELETE images associated with employee

 //DELETE single employee details => api/employees/:id

 const deleteSingleEmployee = catchAsyncErrors(async (req, res)  => {
 
    const { id } = req.body

    // Confirm data
    if (!id) {
        return res.status(400).json({ message: 'User ID Required' })
    }

    // Does the user still have assigned notes?
    const note = await Note.findOne({ employee: id }).lean().exec()
    if (note) {
        return res.status(400).json({ message: 'Employee has assigned notes' })
    }

    // Does the user exist to delete?
    const employee = await Employee.findById(id).exec()

    if (!employee) {
        return res.status(400).json({ message: 'Employee not found' })
    }

    const result = await employee.deleteOne()

    const reply = `Employee name ${result.employeeName} with ID ${result._id} deleted`

    res.json(reply)
})
 
export {
allEmployees,
newEmployee,
getSingleEmployee,
updateSingleEmployee,
deleteSingleEmployee
}