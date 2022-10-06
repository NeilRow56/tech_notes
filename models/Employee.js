import mongoose from 'mongoose';

    
  
const employeeSchema = new mongoose.Schema({
    employeeName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Technician"
    }],
    active: {
        type: Boolean,
        default: true
    }
    
},
{
    timestamps: true,
}
)

const Employee =
  mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
export default Employee;