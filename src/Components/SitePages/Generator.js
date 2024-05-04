import React from 'react'
import { useState } from 'react';
import InputBox from '../HelperComponents/InputBox';
import ResponseModal from '../HelperComponents/ResponseModal';
import LoaderOverlay from '../HelperComponents/LoaderOverlay';



const Generator = () => {

  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState(null);
  const [inputValue, setInputValue] = useState('');



  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const openaiApiKey = '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'; 
  const model = 'gpt-3.5-turbo';
  const userMessage = "Create a Skill Matrix for "+inputValue+" in tabular form";
  const temperature = 0.7;

  // Construct the request body
  const requestBody = {
    model,
    messages: [{ role: 'user', content: userMessage }],
    temperature,
  };


  const staticResponse = {
    resp: `Sure, creating a skill matrix for a Java developer involves identifying key skills and categorizing them based on proficiency levels. Here's a sample skill matrix for a Java developer,
    Java Developer Skill Matrix
    Skill Category	Skill	Proficiency Levels
    Programming Languages	Java	Beginner, Intermediate, Advanced, Expert
    Kotlin	Beginner, Intermediate, Advanced
    Core Java	Java SE	Beginner, Intermediate, Advanced, Expert
    Java APIs and Libraries	Beginner, Intermediate, Advanced, Expert
    Java Developer Skill Matrix
    Skill Category	Skill	Proficiency Levels
    Programming Languages	Java	Beginner, Intermediate, Advanced, Expert
    Kotlin	Beginner, Intermediate, Advanced`
}



  const handleButtonClick = () => {
    // Make a POST API call here, using the inputValue
    setShowModal(true);


    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => {
      console.log('HTTP Status Code:', response.status);
      // Check if the response status is OK (200-299 range)
      // if (response.ok) {
      //   return response.json(); // Parse the response if it's successful
      // } else {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      return {
        "id": "chatcmpl-abc123",
        "object": "chat.completion",
        "created": 1677858242,
        "model": "gpt-3.5-turbo-1106",
        "usage": {
            "prompt_tokens": 13,
            "completion_tokens": 7,
            "total_tokens": 20
        },
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": "\n\n"+staticResponse.resp
                    // "content": "\n\n"+requestBody.messages[0].content
                },
                "finish_reason": "stop",
                "index": 0
            }
        ]
  }

    })
    .then(data => {
      // Handle the response data as needed
      console.log('Response:', data);
      setResponse(data.choices[0].message.content);
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors as needed
    });
};
  

  return (
    <div>
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Generator</h1>
          </div>
        </header>
          {showModal ? ( response? (<ResponseModal response={response} setShowModalFalse ={() => setShowModal(false)}/>):<LoaderOverlay/>) : null}
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="isolate bg-white -mt-4 py-24 px-6 sm:py-32 lg:px-8">
              <div className="justify-center mx-auto -mt-24 max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter your query</h2>
              </div>
              <div className="mx-auto mt-8 max-w-4xl ">
                <InputBox inputValue ={inputValue} handleInputChange = {(event)=>setInputValue(event.target.value)}/>
                <div className="flex flex-row mt-8">
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={handleButtonClick} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Skill Matrix Generator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Call Script Generator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Attractive Template Creator
                        </button>
                    </div>
                    <div className = "basis-1/4 md:basis-1/4 mx-auto px-0.5" >
                        <button type="button" onClick={() => setShowModal(true)} className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Interview preparation script Generator
                        </button>
                    </div>
                  
                </div>
              </div>
            </div>
         

          </div>
        </main>
    </div>
  )
}

export default Generator