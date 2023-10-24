import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function Fifthblock({selectedPastSurgicalHistory,selectedpatientID, onSubmit,}){
  const [showTextField, setShowTextField] = useState(false);

  const handleAddFreeTextClick = () => {
    setShowTextField(true);
  };
    const [selectedCbc, setSelectedCbc] = useState(''); // Initialize with an empty string or a default value

  const handleCbcChange = (value) => {
    setSelectedCbc(value);
  };
  const [selectedGlucose, setSelectedGlucose] = useState(''); // Initialize with an empty string or a default value

  const handleGlucoseChange = (value) => {
    setSelectedGlucose(value);
  };
  const [selectedLft, setSelectedLft] = useState(''); // Initialize with an empty string or a default value

  const handleLftChange = (value) => {
    setSelectedLft(value);
  };
  const [selectedKft, setSelectedKft] = useState(''); // Initialize with an empty string or a default value

  const handleKftChange = (value) => {
    setSelectedKft(value);
  };
  const [selectedThyroid, setSelectedThyroid] = useState(''); // Initialize with an empty string or a default value

  const handleThyroidChange = (value) => {
    setSelectedThyroid(value);
  };
  const [selectedViralMarkers, setSelectedViralMarkers] = useState(''); // Initialize with an empty string or a default value

  const handleViralMarkersChange = (value) => {
    setSelectedViralMarkers(value);
  };
  const [selectedCardiac, setSelectedCardiac] = useState(''); // Initialize with an empty string or a default value

  const handleCardiacChange = (value) => {
    setSelectedCardiac(value);
  };
  const [selectedWbc, setSelectedWbc] = useState(''); // Initialize with an empty string or a default value

  const handleWbcChange = (value) => {
    setSelectedWbc(value);
  };
  const [selectedRbc, setSelectedRbc] = useState(''); // Initialize with an empty string or a default value

  const handleRbcChange = (value) => {
    setSelectedRbc(value);
  };
  const [selectedHemoglobin, setSelectedHemoglobin] = useState(''); // Initialize with an empty string or a default value

  const handleHemoglobinChange = (value) => {
    setSelectedHemoglobin(value);
  };

  const [selectedHematocrit, setSelectedHematocrit] = useState(''); // Initialize with an empty string or a default value

  const handleHematocritChange = (value) => {
    setSelectedHematocrit(value);
  };
  const [selectedMcv, setSelectedMcv] = useState(''); // Initialize with an empty string or a default value

  const handleMcvChange = (value) => {
    setSelectedMcv(value);
  };
  const [selectedMchc, setSelectedMchc] = useState(''); // Initialize with an empty string or a default value

  const handleMchcChange = (value) => {
    setSelectedMchc(value);
  };
  const [selectedEsr, setSelectedEsr] = useState(''); // Initialize with an empty string or a default value

  const handleEsrChange = (value) => {
    setSelectedEsr(value);
  };
  const [selectedCrp, setSelectedCrp] = useState(''); // Initialize with an empty string or a default value

  const handleCrpChange = (value) => {
    setSelectedCrp(value);
  };
  const [selectedHba, setSelectedHba] = useState(''); // Initialize with an empty string or a default value

  const handleHbaChange = (value) => {
    setSelectedHba(value);
  };
  const [selectedAlt, setSelectedAlt] = useState(''); // Initialize with an empty string or a default value

  const handleAltChange = (value) => {
    setSelectedAlt(value);
  };
  const [selectedAst, setSelectedAst] = useState(''); // Initialize with an empty string or a default value

  const handleAstChange = (value) => {
    setSelectedAst(value);
  };  
  const [selectedAsp, setSelectedAsp] = useState(''); // Initialize with an empty string or a default value

  const handleAspChange = (value) => {
    setSelectedAsp(value);
  }; 
  const [selectedTotalBilirubin, setSelectedTotalBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleTotalBilirubinChange = (value) => {
    setSelectedTotalBilirubin(value);
  }; 
  const [selectedDirectBilirubin, setSelectedDirectBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleDirectBilirubinChange = (value) => {
    setSelectedDirectBilirubin(value);
  }; 
  const [selectedIndirectBilirubin, setSelectedIndirectBilirubin] = useState(''); // Initialize with an empty string or a default value

  const handleIndirectBilirubinChange = (value) => {
    setSelectedIndirectBilirubin(value);
  };  
  const [selectedSalbumin, setSelectedSalbumin] = useState(''); // Initialize with an empty string or a default value

  const handleSalbuminChange = (value) => {
    setSelectedSalbumin(value);
  };
  const [selectedSglobulin, setSelectedSglobulin] = useState(''); // Initialize with an empty string or a default value

  const handleSglobulinChange = (value) => {
    setSelectedSglobulin(value);
  };
  const [selectedAgRation, setSelectedAgRation] = useState(''); // Initialize with an empty string or a default value

  const handleAgRationChange = (value) => {
    setSelectedAgRation(value);
  };
  const [selectedBloodUrea, setSelectedBloodUrea] = useState(''); // Initialize with an empty string or a default value

  const handleBloodUreaChange = (value) => {
    setSelectedBloodUrea(value);
  };
  const [selectedScreatine, setSelectedScreatine] = useState(''); // Initialize with an empty string or a default value

  const handleScreatineChange = (value) => {
    setSelectedScreatine(value);
  };
  const [selectedNaPlus, setSelectedNaPlus] = useState(''); // Initialize with an empty string or a default value

  const handleNaPlusChange = (value) => {
    setSelectedNaPlus(value);
  };
  const [selectedKplus, setSelectedKplus] = useState(''); // Initialize with an empty string or a default value

  const handleKplusChange = (value) => {
    setSelectedKplus(value);
  };
  const [selectedChlorine, setSelectedChlorine] = useState(''); // Initialize with an empty string or a default value

  const handleChlorineChange = (value) => {
    setSelectedChlorine(value);
  };
  const [selectedFtThree, setSelectedFtThree] = useState(''); // Initialize with an empty string or a default value

  const handleFtThreeChange = (value) => {
    setSelectedFtThree(value);
  };
  const [selectedFtFour, setSelectedFtFour] = useState(''); // Initialize with an empty string or a default value

  const handleFtFourChange = (value) => {
    setSelectedFtFour(value);
  };
  const [selectedTsh, setSelectedTsh] = useState(''); // Initialize with an empty string or a default value

  const handleTshChange = (value) => {
    setSelectedTsh(value);
  };
  const [selectedTpo, setSelectedTpo] = useState(''); // Initialize with an empty string or a default value

  const handleTpoChange = (value) => {
    setSelectedTpo(value);
  };
  const [selectedIctc, setSelectedIctc] = useState(''); // Initialize with an empty string or a default value

  const handleIctcChange = (value) => {
    setSelectedIctc(value);
  };
  const [selectedHbsag, setSelectedHbsag] = useState(''); // Initialize with an empty string or a default value

  const handleHbsagChange = (value) => {
    setSelectedHbsag(value);
  };
  const [selectedHcv, setSelectedHcv] = useState(''); // Initialize with an empty string or a default value

  const handleHcvChange = (value) => {
    setSelectedHcv(value);
  };
  const [selectedCardiacsOptions, setSelectedCardiacsOptions] = useState([]);

// Function to handle Cardiacs option changes
const handleCardiacsOptionChange = (selectedOption) => {
  setSelectedCardiacsOptions(selectedOption);
};
const [selectedAdverseReactions, setSelectedAdverseReactions] = useState([]);

const handleAdverseReactionChange = (value) => {
  const updatedAdverseReactions = [...selectedAdverseReactions];
  if (updatedAdverseReactions.includes(value)) {
    updatedAdverseReactions.splice(updatedAdverseReactions.indexOf(value), 1);
  } else {
    updatedAdverseReactions.push(value);
  }
  setSelectedAdverseReactions(updatedAdverseReactions);
};

const handleFifthblockNext = () => {
  onSubmit();
};
const [formData, setFormData] = useState({
  patientId: '', // Include patientId directly from the state
  adverseReactionOption:''
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Join the selected options into a comma-separated string
    const adverseReactionOption = selectedAdverseReactions.join(',');
    // const lateralityOption = selectedLateralityOptions.join(',');
    // const respiratorySystemOption = selectedRespiratorySystem.length > 0 ? selectedRespiratorySystem.join(','): 'NORMAL' ;
    // const cardiovascularSystemOption = selectedCardiovascularSystem.length > 0 ? selectedCardiovascularSystem.join(','): 'NORMAL';
    // const renalSystemOption = selectedRenalSystem.length >0 ? selectedRenalSystem.join(','): 'NORMAL' ;
    // const currentMedicationsOption = selectedCurrentMedications.join(',');
    // const relapseChoice = selectedRelapseOption.join(',') ;
    // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED'; 

    const dataToSend = { patientId: formData.patientId, adverseReactionOption};

    console.log('Form Data:', dataToSend);

    const response = await fetch('http://localhost:5000/fifth_block_option', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      const data = await response.json();
      
      console.log('Data saved successfully:', data);
      // Redirect to the next page if needed
    } else {
      console.error('Error:', response.status, response.statusText);
      // Handle the error response here
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
  return(
        <>
        <div className="container mt-4">
        <form onSubmit={handleSubmit} />
        <div className='patientid col-md-2'>
      <div style={{textAlign: 'center'}}>
        <h3 className='pathed p-2' type='text'
    value={formData.patientId = selectedpatientID}
    onChange={handleInputChange} name="patientid"
     disabled >
          <b>Patient ID:</b> {selectedpatientID}
        </h3>
      </div>
    </div>
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>CBC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCbc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleCbcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CbcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCbc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCbc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleCbcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CbcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCbc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                {/* for free text */}
                
            </div>
            
        </div>
        {/* cbc options started */}
          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>WBC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedWbc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleWbcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="WbcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedWbc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedWbc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleWbcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="WbcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedWbc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter WBC Value"/>
                      <span className="input-group-text">Cells/cmm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>RBC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRbc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleRbcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RbcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedRbc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRbc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleRbcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RbcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedRbc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter RBC Value"/>
                      <span className="input-group-text">millions/cmm</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Hemoglobin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHemoglobin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHemoglobinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HemoglobinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHemoglobin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHemoglobin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHemoglobinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HemoglobinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHemoglobin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Hemoglobin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Hematocrit :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHematocrit === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHematocritChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HematocritOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHematocrit === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHematocrit === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHematocritChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HematocritOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHematocrit === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Hematocrit Value"/>
                      <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>MCV :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMcv === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleMcvChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="McvOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMcv === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMcv === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleMcvChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="McvOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMcv === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter MCV Value"/>
                      <span className="input-group-text">fl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>MCHC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMchc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleMchcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="MchcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMchc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedMchc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleMchcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="MchcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedMchc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter MCHC Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ESR :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedEsr === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleEsrChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="EsrOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedEsr === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedEsr === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleEsrChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="EsrOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedEsr === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter ESR Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {selectedCbc === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>CRP :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCrp === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleCrpChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CrpOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCrp === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCrp === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleCrpChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CrpOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedCrp === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter CRP Value"/>
                      <span className="input-group-text">mg/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        {/* cbc option ended */}

        {/* Glucose pART Started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Glucose Levels :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedGlucose === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleGlucoseChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="GlucoseOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedGlucose === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedGlucose === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleGlucoseChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="GlucoseOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedGlucose === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedGlucose === 'ABNORMAL' && (
          <div className="container" style={{marginLeft:'10%'}}>
          <div className="row">
          <div className="col-md-2 d-flex align-items-center">
            <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>RBS :</b>
          </h1>
            </div>
            <div className="col-md-4 ms-4">
              <div className="input-group mb-3 p-2 m-3">
                  <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter RBS Value"/>
                  <span className="input-group-text">mg/dl</span>
              </div>
            </div>
          </div>
        </div>
         )}

         {selectedGlucose === 'ABNORMAL' && (
          <div className="container" style={{marginLeft:'10%'}}>
          <div className="row">
          <div className="col-md-2 d-flex align-items-center">
            <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>GRBS :</b>
          </h1>
            </div>
            <div className="col-md-4 ms-4">
              <div className="input-group mb-3 p-2 m-3">
                  <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter GRBS Value"/>
                  <span className="input-group-text">mg/dl</span>
              </div>
            </div>
          </div>
        </div>
         )}

          {selectedGlucose === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HbA1c :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHba === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHbaChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbaOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHba === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHba === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHbaChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbaOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHba === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter HbA1c Value"/>
                      <span className="input-group-text">%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        {/* Glucose part ender */}

        {/* Liver Function Test */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Liver Function Test :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedLft === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleLftChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="LftOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedLft === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedLft === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleLftChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="LftOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedLft === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ALT :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAlt === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleAltChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AltOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAlt === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAlt === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleAltChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AltOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAlt === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter ALT Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>AST :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAst === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleAstChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AstOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAst === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAst === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleAstChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AstOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAst === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter AST Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ASP :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAsp === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleAspChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AspOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAsp === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAsp === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleAspChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AspOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAsp === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Asp Value"/>
                      <span className="input-group-text">lu/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Total Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTotalBilirubin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleTotalBilirubinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TotalBilirubinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTotalBilirubin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTotalBilirubin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleTotalBilirubinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TotalBilirubinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTotalBilirubin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Total Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Direct Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedDirectBilirubin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleDirectBilirubinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="DirectBilirubinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedDirectBilirubin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedDirectBilirubin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleDirectBilirubinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="DirectBilirubinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedDirectBilirubin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Direct Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Indirect Bilirubin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIndirectBilirubin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleIndirectBilirubinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IndirectBilirubinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIndirectBilirubin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIndirectBilirubin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleIndirectBilirubinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IndirectBilirubinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIndirectBilirubin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Indirect Bilirubin Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Albumin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSalbumin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleSalbuminChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SalbuminOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSalbumin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSalbumin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleSalbuminChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SalbuminOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSalbumin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Albumin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Globulin :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSglobulin === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleSglobulinChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SglobulinOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSglobulin === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedSglobulin === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleSglobulinChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="SglobulinOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedSglobulin === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Globulin Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedLft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>A/G Ratio:</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAgRation === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleAgRationChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AgRationOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAgRation === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedAgRation === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleAgRationChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="AgRationOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedAgRation === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter A/G Ratio Value"/>
                      <span className="input-group-text">gm/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Liver Function Ended */}

        {/* Kidney Function Test Stat */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Kidney Function Test :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedKft === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleKftChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="KftOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedKft === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedKft === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleKftChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="KftOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedKft === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedKft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Blood Urea :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedBloodUrea === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleBloodUreaChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="BloodUreaOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedBloodUrea === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedBloodUrea === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleBloodUreaChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="BloodUreaOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedBloodUrea === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Blood Urea Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>S.Creatine :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedScreatine === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleScreatineChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ScreatineOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedScreatine === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedScreatine === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleScreatineChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ScreatineOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedScreatine === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter S.Creatine Value"/>
                      <span className="input-group-text">mg/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Na<sup>+ :</sup></b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedNaPlus === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleNaPlusChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="NaPlusOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedNaPlus === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedNaPlus === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleNaPlusChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="NaPlusOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedNaPlus === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter Na+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>K<sup>+ :</sup></b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedKplus === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleKplusChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="KplusOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedKplus === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedKplus === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleKplusChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="KplusOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedKplus === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter K+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedKft === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Chlorine :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedChlorine === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleChlorineChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ChlorineOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedChlorine === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedChlorine === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleChlorineChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ChlorineOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedChlorine === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter K+ Value"/>
                      <span className="input-group-text">mWq/l</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Kidney Function Test Stat */}

        {/* Thyroid start */}
        <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Thyroid :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedThyroid === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleThyroidChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ThyroidOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedThyroid === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedThyroid === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleThyroidChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ThyroidOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedThyroid === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedThyroid === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>T3 :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtThree === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleFtThreeChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtThreeOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtThree === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtThree === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleFtThreeChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtThreeOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtThree === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter T3 Value"/>
                      <span className="input-group-text">ng/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>T4 :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtFour === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleFtFourChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtFourOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtFour === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedFtFour === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleFtFourChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="FtFourOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedFtFour === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter T4 Value"/>
                      <span className="input-group-text">ng/dl</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>TSH :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTsh === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleTshChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TshOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTsh === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTsh === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleTshChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TshOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTsh === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter TSH Value"/>
                      <span className="input-group-text">ug/dl(u=microgram)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedThyroid === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>TPO :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTpo === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleTpoChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TpoOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTpo === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedTpo === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleTpoChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="TpoOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedTpo === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
                <div className="col-md-4 ms-4">
                  <div className="input-group mb-3 p-2 m-3">
                      <input type="text" className="form-control " aria-label="Amount (to the nearest dollar)" placeholder="Enter TPO Value"/>
                      <span className="input-group-text">uU/ml(u=microgram)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

         {/* Thyroid start */}

         {/* Viral Markers Started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Viral Markers :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedViralMarkers === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleViralMarkersChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ViralMarkersOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedViralMarkers === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedViralMarkers === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleViralMarkersChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="ViralMarkersOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedViralMarkers === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedViralMarkers === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>ICTC :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIctc === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleIctcChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IctcOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIctc === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedIctc === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleIctcChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="IctcOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedIctc === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}

          {selectedViralMarkers === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HBsAg :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHbsag === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHbsagChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbsagOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHbsag === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHbsag === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHbsagChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HbsagOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHbsag === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}

          {selectedViralMarkers === 'ABNORMAL' && (
            <div className="container" style={{marginLeft:'10%'}}>
              <div className="row">
              <div className="col-md-2 d-flex align-items-center">
                <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>HCV :</b>
              </h1>
                </div>
                <div className="col-md-4 ms-4">
                <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHcv === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleHcvChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HcvOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHcv === 'NORMAL'}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedHcv === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleHcvChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="HcvOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={selectedHcv === 'ABNORMAL'}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more Cardiacs options here */}
                   </div>
                 </div>
                </div>
              </div>
            </div>
          )}
         {/* Viral Markers Ended */}

         {/* cardiac started */}
         <div className="container">
            <div className="row">
              <hr />
                    <div className="col-md-2 d-flex align-items-center">
                    <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                    <b>Cardiac :</b>
                  </h1>
                    </div>
                    <div className="col-md-4 ms-4">
                    <div className="col-md-8">
                      <div className="marital d-flex m-3 align-items-center">
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedCardiac === 'NORMAL' ? 'active' : ''}`}
                          onClick={() => handleCardiacChange('NORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="CardiacOption"
                            value="NORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedCardiac === 'NORMAL'}
                          />
                          NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <label
                          className={`maritalcircle p-2 m-3 ${selectedCardiac === 'ABNORMAL' ? 'active' : ''}`}
                          onClick={() => handleCardiacChange('ABNORMAL')}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <input
                            type="radio"
                            name="CardiacOption"
                            value="ABNORMAL"
                            style={{ visibility: 'hidden' }}
                            checked={selectedCardiac === 'ABNORMAL'}
                          />
                          ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        {/* Add more Cardiacs options here */}
                      </div>
                    </div>
                    </div>
                    {/* for free text */}
                    
            </div>
         </div>

         {selectedCardiac === 'ABNORMAL' && (
           <div className="container">
            <div className="row">
              <div className="col-md-2">

              </div>
            <div className="col-md-6 ms-4">
                <div className="marital m-3 d-flex align-items-center"  style={{marginLeft:'90%'}}>
             <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'ECG' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="ECG"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'ECG'}
              onChange={() => handleCardiacsOptionChange('ECG')}
            />
            ECG &nbsp;&nbsp;
          </label>
          <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'ECHO' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="ECHO"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'ECHO'}
              onChange={() => handleCardiacsOptionChange('ECHO')}
            />
            ECHO &nbsp;&nbsp;
          </label>
          <label
            className={`maritalcircle p-2 m-3 ${selectedCardiacsOptions === 'EF%' ? 'active' : ''}`}
          >
            <input
              type="radio"
              name="CardiacsOption"
              value="EF%"
              style={{ visibility: 'hidden' }}
              checked={selectedCardiacsOptions === 'EF%'}
              onChange={() => handleCardiacsOptionChange('EF%')}
            />
            EF% &nbsp;&nbsp;
          </label>
          </div>
          </div>
          <div className="col-md-3 ms-auto text-align-right">
              <div className="row">
                <div className="col-md-12" style={{ marginLeft: '20%' }}>
                  <button className="btn" style={{ color: '#fff' }} onClick={handleAddFreeTextClick}>
                    <div className="pulser">
                      <FaPlusCircle />
                    </div>
                  </button>
                </div>
              </div>
              {showTextField && (
                <div className="row mt-3">
                  <div className="col-md-12 offset-md-2">
                    <input
                      type="text"
                      style={{ border: '1px solid #000', borderRadius: '10px' }}
                      className="form-control"
                      placeholder="Enter Free Text Option"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
           </div>
          )}
         {/* cardiac ended*/}

         {/* Adverse Reactions started */}
         <div className="container mt-4">
      <hr />
      <div className="row">
        <div className="col-md-2 d-flex align-items-center">
          <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>Adverse Reactions:</b>
          </h1>
        </div>

        <div className="col-md-6 ms-4">
        <div className="rss">
            <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('QT prolongation') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="QT prolongation"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('QT prolongation')}
                  onChange={() => handleAdverseReactionChange('QT prolongation')}
                />
                QT prolongation &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Seizures') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Seizures"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Seizures')}
                  onChange={() => handleAdverseReactionChange('Seizures')}
                />
                Seizures &nbsp;&nbsp;
              </label>
              
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Diarrhea /flatulence') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Diarrhea /flatulence"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Diarrhea /flatulence')}
                  onChange={() => handleAdverseReactionChange('Diarrhea /flatulence')}
                />
                Diarrhea /flatulence &nbsp;&nbsp;
              </label>
              </div>
              <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Psychotic symptoms') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Psychotic symptoms"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Psychotic symptoms')}
                  onChange={() => handleAdverseReactionChange('Psychotic symptoms')}
                />
                Psychotic symptoms &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Suicidal ideation') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Suicidal ideation"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Suicidal ideation')}
                  onChange={() => handleAdverseReactionChange('Suicidal ideation')}
                />
                Suicidal ideation &nbsp;&nbsp;
              </label>
              
              
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Gastrointestinal symptoms') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Gastrointestinal symptoms"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Gastrointestinal symptoms')}
                  onChange={() => handleAdverseReactionChange('Gastrointestinal symptoms')}
                />
                Gastrointestinal symptoms &nbsp;&nbsp;
              </label>
              </div>
              <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Tendonitis and tendon rupture') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Tendonitis and tendon rupture"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Tendonitis and tendon rupture')}
                  onChange={() => handleAdverseReactionChange('Tendonitis and tendon rupture')}
                />
                Tendonitis and tendon rupture &nbsp;&nbsp;
              </label>
              
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Hepatitis') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Hepatitis"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Hepatitis')}
                  onChange={() => handleAdverseReactionChange('Hepatitis')}
                />
                Hepatitis &nbsp;&nbsp;
              </label>
              </div>
              <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Metallic taste') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Metallic taste"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Metallic taste')}
                  onChange={() => handleAdverseReactionChange('Metallic taste')}
                />
                Metallic taste &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Optic neuritis') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Optic neuritis"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Optic neuritis')}
                  onChange={() => handleAdverseReactionChange('Optic neuritis')}
                />
                Optic neuritis &nbsp;&nbsp;
              </label>
              
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Hypothyroidism') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Hypothyroidism"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Hypothyroidism')}
                  onChange={() => handleAdverseReactionChange('Hypothyroidism')}
                />
                Hypothyroidism &nbsp;&nbsp;
              </label>
              </div>
              <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Arthralgia') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Arthralgia"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Arthralgia')}
                  onChange={() => handleAdverseReactionChange('Arthralgia')}
                />
                Arthralgia &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Peripheral neuropathy') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Peripheral neuropathy"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Peripheral neuropathy')}
                  onChange={() => handleAdverseReactionChange('Peripheral neuropathy')}
                />
                Peripheral neuropathy &nbsp;&nbsp;
              </label>
            
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Alopecia') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Alopecia"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Alopecia')}
                  onChange={() => handleAdverseReactionChange('Alopecia')}
                />
                Alopecia &nbsp;&nbsp;
              </label>
              </div>
              <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Headache') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Headache"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Headache')}
                  onChange={() => handleAdverseReactionChange('Headache')}
                />
                Headache &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Superficial fungal Infection and thrush') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Superficial fungal Infection and thrush"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Superficial fungal Infection and thrush')}
                  onChange={() => handleAdverseReactionChange('Superficial fungal Infection and thrush')}
                />
                Superficial fungal Infection and thrush &nbsp;&nbsp;
              </label>
              </div>
            <div className="col-md-3 marital m-3 d-flex align-items-center">
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Depression') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Depression"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Depression')}
                  onChange={() => handleAdverseReactionChange('Depression')}
                />
                Depression &nbsp;&nbsp;
              </label>
              <label
                className={`maritalcircle p-2 m-3 ${selectedAdverseReactions.includes('Dysglycemia and hyperglycemia') ? 'active' : ''}`}
              >
                <input
                  type="checkbox"
                  name="adverseReactionOption"
                  value="Dysglycemia and hyperglycemia"
                  style={{ visibility: 'hidden' }}
                  checked={selectedAdverseReactions.includes('Dysglycemia and hyperglycemia')}
                  onChange={() => handleAdverseReactionChange('Dysglycemia and hyperglycemia')}
                />
                Dysglycemia and hyperglycemia &nbsp;&nbsp;
              </label>
              {/* Add more adverse reactions here */}
            </div>
          </div>
        </div>

        <div className="col-md-3 ms-auto text-align-right">
          <div className="row">
            <div className="col-md-12" style={{ marginLeft: '20%' }}>
              <button className="btn" style={{ color: '#fff' }} onClick={handleAddFreeTextClick}>
                <div className="pulser">
                  <FaPlusCircle />
                </div>
              </button>
            </div>
          </div>
          {showTextField && (
            <div className="row mt-3">
              <div className="col-md-12 offset-md-2">
                <input
                  type="text"
                  style={{ border: '1px solid #000', borderRadius: '10px' }}
                  className="form-control"
                  placeholder="Enter Free Text Option"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
         {/* Adverse Reactions ended */}
         <div className="text-center  mb-4" style={{paddingLeft:'80%'}}> {/* Use text-right class here */}

<button className="btn btn-primary btn-lg" onClick={(e) => {
  handleFifthblockNext();
handleSubmit(e);
}}  style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Submit &nbsp;&nbsp;
</button>

</div>
        </>
    )
}

export default Fifthblock;