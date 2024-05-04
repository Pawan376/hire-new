import React from 'react'


const Footer = () => {
    return (
        <footer
            className="flex flex-col items-center bg-gray-800 text-center text-white">
            <div
                className="w-full p-2 text-center"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright : HireHatch Inc
            </div>
        </footer>
    )
}

export default Footer