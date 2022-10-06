
// /api/employees/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleEmployee, updateSingleEmployee, deleteSingleEmployee } from '../../../controllers/employeeControllers'


const handler = nc()

db.Connect()

handler.get(getSingleEmployee)

handler.put(updateSingleEmployee)

handler.patch(updateSingleEmployee)



handler.delete(deleteSingleEmployee)



export default handler