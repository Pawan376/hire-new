import React from 'react'
import { useState } from 'react';
import InputBox from '../HelperComponents/InputBox';
import ResponseModal from '../HelperComponents/ResponseModal';

const RequirementAnalysis = () => {
  const [showModal, setShowModal] = useState(false);

  let response = {
    value : `I always felt like I could do anything. That’s the main
    thing people are controlled by! Thoughts- their perception
    of themselves! They're slowed down by their perception of
    themselves. If you're taught you can’t do anything, you
    won’t do anything. I was taught I could do everything.`
  }

  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">RequirementAnalysis</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="isolate bg-white -mt-4 py-24 px-6 sm:py-32 lg:px-8">
              <div className="justify-center mx-auto -mt-24 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter your query</h2>
              </div>
              <div className="mx-auto mt-8 max-w-4xl ">
                <InputBox />
                <div className="flex flex-row mt-8">
                    <div className = "basis-1/2 md:basis-1/2 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Job Requirement Simplifier
                        </button>
                    </div>
                  {showModal ? ( <ResponseModal response={response} setShowModalFalse ={() => setShowModal(false)}/>) : null}
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}

export default RequirementAnalysis