import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { allEmployees, newEmployee } from "../../../controllers/employeeControllers"
 
 
const handler = nc()
 
db.Connect()
 
handler.get(allEmployees)

handler.post(newEmployee)
export default handler