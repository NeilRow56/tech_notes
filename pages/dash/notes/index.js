import React from 'react'
import NotesList from '../../../components/NotesList'
import DashLayout from '../../../components/DashLayout'

const Notes = () => {
  return (
    <div>
      <DashLayout>
      Dash Notes
      <NotesList />
      </DashLayout>
    </div>
  )
}

export default Notes