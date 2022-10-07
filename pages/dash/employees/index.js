import React from 'react'
import EmployeeList from '../../../components/EmployeeList'
import DashLayout from '../../../components/DashLayout'


const Employees = () => {
  return (
    <div>
      <DashLayout>
      Dash Employees
      <EmployeeList />
      </DashLayout>
    </div>
  )
}

export default Employees