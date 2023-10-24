import React, { useState, useEffect, useRef } from 'react';
import BWIPJS from 'bwip-js';

function Success(props) {
  const { selectedpatientID } = props;
  const [userData, setUserData] = useState({});
  const barcodeRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:5000/get_user_data?patient_id=${selectedpatientID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data);
        setUserData(data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, [selectedpatientID]);

  useEffect(() => {
    if (userData.patientid) {
      generateBarcode(userData.patientid);
    }
  }, [userData.patientid]);

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    const days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
  }

  const handlePrint = () => {
    const contentToPrint = document.getElementById('print-content');

    if (contentToPrint) {
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = contentToPrint.outerHTML;

      window.print();

      // Restore the original content
      document.body.innerHTML = originalContents;
    } else {
      console.error("Content to print not found.");
    }
  };

  const generateBarcode = (patientID) => {
    const canvas = BWIPJS.toCanvas(barcodeRef.current, {
      bcid: 'code128', // Use the Code 128 barcode format (change to your desired format)
      text: patientID,  // The text to encode in the barcode
      scale: 3,        // Adjust the scale as needed
      width: 120,       // Set the barcode width (adjust as needed)
      height: 50,       // Set the barcode height (adjust as needed)
    });

    if (canvas) {
      // The barcode has been generated, you can do further actions if needed
    }
  };

  const formatDateAndTime = (timestamp) => {
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <>
      <div id="print-content">
        <div className="container mt-4 mb-4" style={{ border: '1px solid rgb(211, 215, 215)', padding: '0px' }}>
          <div className="head p-4" style={{ backgroundColor: '#893487', color: '#fff' }}>
            <h1 style={{ fontSize: '1.2rem' }}><b>Branding Hospital Name</b></h1>
            
          </div>
          <h4 className="mt-4 ps-4" style={{ fontWeight: '600' }}>PATIENT INFORMATION</h4><div ref={barcodeRef}></div>
          <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgb(211, 215, 215)' }}>
            <p className="ps-4" style={{ marginBottom: '0px' }}><b>Name:</b> {userData.firstname} {userData.lastname}</p>
            <p className="" style={{ marginBottom: '0px' }}><b>Patient ID:</b> {selectedpatientID}</p>
            <p className="pe-4" style={{ marginBottom: '0px' }}><b>Sex:</b> {userData.sex}</p>
          </div>
          <div className="mt-4" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgb(211, 215, 215)' }}>
            <p className="ps-4" style={{ marginBottom: '0px' }}><b>Age:</b> {calculateAge(userData.dob)}</p>
            <p className="" style={{ marginBottom: '0px' }}><b>Marital Status:</b> {userData.marital}</p>
            <p className="pe-4" style={{ marginBottom: '0px' }}><b>Weight:</b> {userData.weight} Kg</p>
          </div>
          <div className="content mt-4">
            <p className="ps-4"><b>Date of Admission:</b> {formatDateAndTime(userData.created_at)}</p>
            <p className="ps-4"><b>Chief Complaints:</b>The patient presents with {userData.chiefcomplaints}</p>
            <p className="ps-4"><b>Past Medical History:</b> Clinical evaluation reveals a notable past medical history marked by {userData.pastmedicalhistory}</p>
            <p className="ps-4"><b>Substance Abuse:</b>{userData.substanceabuse}</p>
            <p className="ps-4"><b>Resipratory System:</b>{userData.resipateryoption} ({userData.respiratorysystemoption})</p>
            <p className="ps-4"><b>Past Surgical History:</b>The patient had surgery in the past for {userData.pastsurgicalhistoryoption}</p>
            <p className="ps-4"><b>Chest Imaging:</b>{userData.chestimaging} are avilable </p>
            <p className="ps-4"><b>Current Medications:</b>The patient is currently taking {userData.currentmedicationsoption}</p>
            <p className="ps-4"><b>Diagnosis:</b>The patient has been diagnosed with {userData.diagnosis} by {userData.cnfdiagnosis}</p>
            <br></br>
            <p className="ps-4"><b>Treatment Advised:</b> {userData.currentmedicationsoption}  {userData.adversereaction}  
<br/>

Rifamycins accelerating metabolism and decreasing blood levels
 Isoniazid inhibiting metabolism and increasing blood levels
 
 
 	
Rifamycins accelerating metabolism and decreasing blood levels
 Isoniazid inhibiting metabolism and increasing blood levels
</p>
          </div>
          <hr></hr>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handlePrint}>
              Print
            </button>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Success;
