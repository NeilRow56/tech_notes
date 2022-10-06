//  /api/notes/:id

import nc from 'next-connect'
import db from '../../../lib/dbConnect'

import { getSingleNote, updateSingleNote, deleteSingleNote } from '../../../controllers/noteControllers'


const handler = nc()

db.Connect()

handler.get(getSingleNote)

handler.put(updateSingleNote)

handler.patch(updateSingleNote)



handler.delete(deleteSingleNote)



export default handler