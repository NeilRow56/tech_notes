import db from '../../../lib/dbConnect'
import nc from "next-connect";
import { newNote , allNotes} from "../../../controllers/noteControllers"

 
 
const handler = nc()
 
db.Connect()
 


handler.post(newNote)
handler.get(allNotes)

export default handler