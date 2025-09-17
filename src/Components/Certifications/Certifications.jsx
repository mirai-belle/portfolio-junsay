import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'
function Certifications({certifications = [
    {
        certificate: "Introduction to IoT and Digital Transformation",
        from: "CISCO",
        link: "https://www.netacad.com/certificates?issuanceId=56727637-e9c2-4767-9ab1-4cf365f66475"
    },
    {
        certificate: "Using Computer and Mobile Devices",
        from: "CISCO",
        link: "https://www.netacad.com/certificates?issuanceId=5524afb3-81c1-4a2d-bc07-8c2e094c3f58"
    },
]}) {
  return (
    <div className="certifications">
        <h1 className='heading'>{"<Certifications />"}</h1>
        <div className="certificates">
            {certifications.map((certificate, index) => (
                <Certificate key={index} certificate={certificate} />
            ))}
        </div>
    </div>
  )
}

export default Certifications
