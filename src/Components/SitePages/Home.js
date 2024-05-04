import React from 'react'


const Dashboard = (props) => {

  const user = props.userData?.providerData[0] || { displayName: '', email: '', photoURL: '' };

  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">All-in-One Solution for Precision Hiring</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="isolate bg-white -mt-4 py-24 px-6 sm:py-32 lg:px-8">
              Welcome {user.displayName} {'\n'}
              <div>
              Empower Your Tech Recruitment Journey with HireHatch: Your All-in-One Solution for Precision Hiring – Boolean Search, X-Ray Search, Facebook Search, Skill Matrix, Call Scripts, Templates, Interview Prep, Job Requirements, Cover Letters, Resume Perfection, Plagiarism Checks, and Beyond!
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default Dashboard