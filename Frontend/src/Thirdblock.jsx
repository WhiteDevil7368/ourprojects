import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function Thirdblock({
    selectedOrgan,
    selectedPastMedicalHistory,
    selectedChiefOptions,
    selectedLungOptions,
    selectedpatientID,
    onSubmit,
  }) {
    
  const [showBreathSoundOptions, setShowBreathSoundOptions] = useState(false);

  const handleBreathSoundChange = (isChecked) => {
    setShowBreathSoundOptions(isChecked);
  };

  const [showTextField, setShowTextField] = useState(false);

  const handleAddFreeTextClick = () => {
    setShowTextField(true);
  };

  const [selectedBreathSoundOptions, setSelectedBreathSoundOptions] = useState([]);

  const handleBreathSoundOptionChange = (value) => {
    const updatedOptions = [...selectedBreathSoundOptions];
    const index = updatedOptions.indexOf(value);

    if (index === -1) {
      // If the value is not in the selected options array, add it
      updatedOptions.push(value);
    } else {
      // If the value is already in the selected options array, remove it
      updatedOptions.splice(index, 1);
    }

    setSelectedBreathSoundOptions(updatedOptions);
  };
  const [selectedLaterality, setSelectedLaterality] = useState(''); // Initialize with an empty string or a default value

  const handleLateralityChange = (value) => {
    setSelectedLaterality(value);
  };
  

// Function to handle laterality option changes

const [selectedLateralityOptionsopt, setSelectedLateralityOptionsopt] = useState([]);

// Function to handle laterality option changes
const handleLateralityOptionoptChange = (selectedOption) => {
  setSelectedLateralityOptionsopt(selectedOption);
};
const [selectedImagingOptions, setSelectedImagingOptions] = useState([]);

const handleImagingOptionChange = (option) => {
  // Check if the option is already selected
  const isOptionSelected = selectedImagingOptions.includes(option);

  if (isOptionSelected) {
    // If the option is already selected, remove it from the array
    const updatedOptions = selectedImagingOptions.filter((selectedOption) => selectedOption !== option);
    setSelectedImagingOptions(updatedOptions);
  } else {
    // If the option is not selected, add it to the array
    setSelectedImagingOptions([...selectedImagingOptions, option]);
  }
};

const [selectedDiagnosisOptions, setSelectedDiagnosisOptions] = useState([]);

// Function to handle the selection of diagnosis options
const handleDiagnosisOptionChange = (option) => {
  if (selectedDiagnosisOptions.includes(option)) {
    setSelectedDiagnosisOptions(
      selectedDiagnosisOptions.filter((item) => item !== option)
    );
  } else {
    setSelectedDiagnosisOptions([...selectedDiagnosisOptions, option]);
  }
};


const [showCnfDiagnosisOptions, setShowCnfDiagnosisOptions] = useState(false);

  const handleCnfDiagnosisChange = (isChecked) => {
    setShowCnfDiagnosisOptions(isChecked);
  };

  // State to store selected confirmed diagnosis options
const [selectedConfirmedDiagnosisOptions, setSelectedConfirmedDiagnosisOptions] = useState([]);

// Function to handle the selection of confirmed diagnosis options
const handleConfirmedDiagnosisOptionChange = (option) => {
  if (selectedConfirmedDiagnosisOptions.includes(option)) {
    setSelectedConfirmedDiagnosisOptions(
      selectedConfirmedDiagnosisOptions.filter((item) => item !== option)
    );
  } else {
    setSelectedConfirmedDiagnosisOptions([...selectedConfirmedDiagnosisOptions, option]);
  }
};

const [showRelapseOptions, setShowRelapseOptions] = useState(false);

const handleRelapseChange = (isChecked) => {
  setShowRelapseOptions(isChecked);
};

// State to store selected relapse option
const [selectedRelapseOption, setSelectedRelapseOption] = useState('');

// Function to handle the selection of relapse options
const handleRelapseChoice = (option) => {
  setSelectedRelapseOption(option);
};
const handleThirdblockNext = () => {
  onSubmit(selectedLaterality, selectedBreathSoundOptions, selectedLateralityOptionsopt,selectedImagingOptions,selectedDiagnosisOptions,selectedConfirmedDiagnosisOptions, selectedRelapseOption  );
};
const [formData, setFormData] = useState({
  patientId: '',
  breathSoundOption: '',
  lateralityOption:'',
  lateralityOptionopt:'',
  imagingOption:'',
  diagnosisOption:'',
  cnfdiagnosisOption:'',
  relapseChoice:''// Include patientId directly from the state
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Join the selected options into a comma-separated string
    const breathSoundOption = selectedBreathSoundOptions.join(',');
    // const lateralityOption = selectedLateralityOptions.join(',');
    const imagingOption = selectedImagingOptions.join(',') ;
    const diagnosisOption = selectedDiagnosisOptions.join(',') ;
    const cnfdiagnosisOption = selectedConfirmedDiagnosisOptions.join(',') ;
    // const relapseChoice = selectedRelapseOption.join(',') ;
    // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED'; 

    const dataToSend = { patientId: formData.patientId, lateralityOption: formData.lateralityOption, lateralityOptionopt: formData.lateralityOptionopt, breathSoundOption,  imagingOption, diagnosisOption, cnfdiagnosisOption};

    console.log('Form Data:', dataToSend);

    const response = await fetch('http://localhost:5000/third_block_option', {
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


  return (
    <>
      <div className="container mt-4">
      <form onSubmit={handleSubmit} />
        {/* breathsound option started */}
        <div className="container mt-4">
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
                <b>Breath Sound</b>
              </h1>
              <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showBreathSoundOptions}
                  onChange={(e) => handleBreathSoundChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div>
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {showBreathSoundOptions && selectedOrgan && (
                <div className="row mt-3">
                  <div className="col-md-4 marital d-flex align-items-center">
                    {/* Content for Breath Sound Options */}
                    <label
                      className={`maritalcircle p-2 m-3 ${selectedBreathSoundOptions.includes('Decreased Breath Sounds') ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Decreased Breath Sounds"
                        style={{ visibility: 'hidden' }}
                        checked={selectedBreathSoundOptions.includes('Decreased Breath Sounds')}
                        onChange={() => handleBreathSoundOptionChange('Decreased Breath Sounds')}
                        readonly
                      />
                      Decreased Breath Sounds &nbsp;&nbsp;
                    </label>
                    <label
                      className={`maritalcircle p-2 m-3 ${selectedBreathSoundOptions.includes('Crackles') ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Crackles"
                        style={{ visibility: 'hidden' }}
                        checked={selectedBreathSoundOptions.includes('Crackles')}
                        onChange={() => handleBreathSoundOptionChange('Crackles')}
                        readOnly
                      />

                      Crackles &nbsp;&nbsp;
                    </label>
                    </div>
                    <div className="col-md-4 marital d-flex align-items-center">
                    <label
                      className={`maritalcircle p-2 m-3 ${selectedBreathSoundOptions.includes('Decreased') ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Decreased"
                        style={{ visibility: 'hidden' }}
                        checked={selectedBreathSoundOptions.includes('Decreased')}
                        onChange={() => handleBreathSoundOptionChange('Decreased')}
                        readonly
                      />
                      Decreased &nbsp;&nbsp;
                    </label>
                    
                    <label
                      className={`maritalcircle p-2 m-3 ${selectedBreathSoundOptions.includes('Pleural Rub') ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Pleural Rub"
                        style={{ visibility: 'hidden' }}
                        checked={selectedBreathSoundOptions.includes('Pleural Rub')}
                        onChange={() => handleBreathSoundOptionChange('Pleural Rub')}
                        readonly
                      />
                      Pleural Rub &nbsp;&nbsp;
                    </label>
                    <label
                      className={`maritalcircle p-2 m-3 ${selectedBreathSoundOptions.includes('Wheezing') ? 'active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        name="breathSoundOption"
                        value="Wheezing"
                        style={{ visibility: 'hidden' }}
                        checked={selectedBreathSoundOptions.includes('Wheezing')}
                        onChange={() => handleBreathSoundOptionChange('Wheezing')}
                        readonly
                      />
                      Wheezing &nbsp;&nbsp;
                    </label>

                    {/* Add more options for Breath Sound here */}
                  </div>
                </div>
              )}
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
{/* breathsound option ended*/}

{/* laterality option started */}
        {showBreathSoundOptions && (
          
           <div className="container mt-4">
            <hr></hr>
           <div className="row">
             <div className="col-md-2 d-flex align-items-center">
               <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                 <b>Laterality</b>
               </h1>
             </div>
         
             <div className="col-md-6 ms-4">
               {/* Additional options for Laterality */}
               {showBreathSoundOptions && selectedOrgan && (
                 <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedLaterality === 'RIGHT' ? 'active' : ''}`}
                       onClick={() => handleLateralityChange('RIGHT')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="lateralityOption"
                         value="RIGHT"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedLaterality === 'RIGHT'}
                         onChange={handleInputChange}
                       />
                       RIGHT &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedLaterality === 'LEFT' ? 'active' : ''}`}
                       onClick={() => handleLateralityChange('LEFT')}
                       
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="lateralityOption"
                         value="LEFT"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedLaterality === 'LEFT'}
                         onChange={handleInputChange}
                       />
                       LEFT &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more laterality options here */}
                   </div>
                 </div>
               )}
             </div>
           </div>
         </div>
         
        )}
<div className="row">
  <div className="col-md-2">

  </div>
              <div className="col-md-6 ms-4">
                <div className="marital m-3 d-flex align-items-center"  style={{marginLeft:'90%'}}>
                {showBreathSoundOptions && selectedLaterality === 'RIGHT' && (
  <>
    {/* Content for Right laterality */}
    <label
      className={`maritalcircle p-2 m-3 ${selectedLateralityOptionsopt === 'RUL' ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="lateralityOptionopt"
        value="RUL"
        style={{ visibility: 'hidden' }}
        checked={formData.selectedLateralityOptionsopt === 'RUL'}
        onChange={handleInputChange}
      />
      RUL &nbsp;&nbsp;
    </label>
    <label
      className={`maritalcircle p-2 m-3 ${selectedLateralityOptionsopt === 'RML' ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="lateralityOptionopt"
        value="RML"
        style={{ visibility: 'hidden' }}
        checked={formData.selectedLateralityOptionsopt === 'RML'}
        onChange={handleInputChange}
      />
      RML &nbsp;&nbsp;
    </label>
    <label
      className={`maritalcircle p-2 m-3 ${selectedLateralityOptionsopt === 'RLL' ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="lateralityOptionopt"
        value="RLL"
        style={{ visibility: 'hidden' }}
        checked={formData.selectedLateralityOptionsopt === 'RLL'}
        onChange={handleInputChange}
      />
      RLL &nbsp;&nbsp;
    </label>
    {/* Add more options for Right laterality here */}
  </>
)}


{showBreathSoundOptions && selectedLaterality === 'LEFT' && (
  <>
    {/* Content for Left laterality */}
    <label
      className={`maritalcircle p-2 m-3 ${selectedLateralityOptionsopt === 'LUL' ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="lateralityOptionopt"
        value="LUL"
        style={{ visibility: 'hidden' }}
        checked={formData.selectedLateralityOptionsopt === 'LUL'}
        onChange={handleInputChange}
      />
      LUL &nbsp;&nbsp;
    </label>
    <label
      className={`maritalcircle p-2 m-3 ${selectedLateralityOptionsopt === 'LLL' ? 'active' : ''}`}
    >
      <input
        type="radio"
        name="lateralityOptionopt"
        value="LLL"
        style={{ visibility: 'hidden' }}
        checked={formData.selectedLateralityOptionsopt === 'LLL'}
        onChange={(e) => {
          handleLateralityOptionoptChange('LLL');
          handleInputChange(e);
        }}
        
      />
      LLL &nbsp;&nbsp;
    </label>
    {/* Add more options for Left laterality here */}
  </>
)}

                </div>
              </div>
            </div>
            {/* laterality option ended*/}

            {/* chest imaging  started*/}
           {Array.isArray(selectedPastMedicalHistory) && selectedPastMedicalHistory.includes('Respiratory')&& (
            <div className="container mt-4">
              <hr></hr>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Chest Imaging</b>
              </h1>
            </div>

            <div className="col-md-6 ms-4">
              <div className="col-md-12">
              {/* Additional options for Breath Sound */}
              <div className="marital d-flex m-3 align-items-center">
              <label
    className={`maritalcircle p-2 m-3 ${selectedImagingOptions.includes('XRay') ? 'active' : ''}`}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="checkbox"
      name="imagingOption"
      value="XRay"
      style={{ visibility: 'hidden' }}
      checked={selectedImagingOptions.includes('XRay')}
      onChange={() => handleImagingOptionChange('XRay')}
    />
    XRay &nbsp;&nbsp;&nbsp;&nbsp;
  </label>
  <label
    className={`maritalcircle p-2 m-3 ${selectedImagingOptions.includes('CT') ? 'active' : ''}`}
    
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="checkbox"
      name="imagingOption"
      value="CT"
      style={{ visibility: 'hidden' }}
      checked={selectedImagingOptions.includes('CT')}
      onChange={() => handleImagingOptionChange('CT')}
    />
    CT &nbsp;&nbsp;&nbsp;&nbsp;
  </label>
 
  <label
    className={`maritalcircle p-2 m-3 ${selectedImagingOptions.includes('MRI') ? 'active' : ''}`}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="checkbox"
      name="imagingOption"
      value="MRI"
      style={{ visibility: 'hidden' }}
      checked={selectedImagingOptions.includes('MRI')}
      onChange={() => handleImagingOptionChange('MRI')}
    />
    MRI &nbsp;&nbsp;&nbsp;&nbsp;
  </label>
  </div>
  <div className="marital d-flex m-3 align-items-center">
  <label
    className={`maritalcircle p-2 m-3 ${selectedImagingOptions.includes('Fluoroscopy') ? 'active' : ''}`}
    
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="checkbox"
      name="imagingOption"
      value="Fluoroscopy"
      style={{ visibility: 'hidden' }}
      checked={selectedImagingOptions.includes('Fluoroscopy')}
      onChange={() => handleImagingOptionChange('Fluoroscopy')}
    />
    Fluoroscopy &nbsp;&nbsp;&nbsp;&nbsp;
  </label>
  <label
    className={`maritalcircle p-2 m-3 ${selectedImagingOptions.includes('Ultrasound') ? 'active' : ''}`}
  >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <input
      type="checkbox"
      name="imagingOption"
      value="Ultrasound"
      style={{ visibility: 'hidden' }}
      checked={selectedImagingOptions.includes('Ultrasound')}
      onChange={() => handleImagingOptionChange('Ultrasound')}
    />
    Ultrasound &nbsp;&nbsp;&nbsp;&nbsp;
  </label>
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
        )}
             {/* chest imaging  ended*/}

             {/* diagnosis started */}
             <div className="container mt-4">
      <hr />
      <div className="row">
        <div className="col-md-2 d-flex align-items-center">
          <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
            <b>Diagnosis</b>
          </h1>
        </div>

        <div className="col-md-6 ms-4">
          <div className="raj">
            <div className="marital d-flex align-items-center">
              
                <label
                  className={`maritalcircle p-2 m-3 ${selectedDiagnosisOptions.includes('Drug Sensitive TB') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="Drug Sensitive TB"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('Drug Sensitive TB')}
                    onChange={() => handleDiagnosisOptionChange('Drug Sensitive TB')}
                  />
                  Drug Sensitive TB
                </label>
              
              
                <label
                  className={`maritalcircle p-2 m-3 ${selectedDiagnosisOptions.includes('Drug Resistance TB') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="Drug Resistance TB"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('Drug Resistance TB')}
                    onChange={() => handleDiagnosisOptionChange('Drug Resistance TB')}
                  />
                  Drug Resistance TB
                </label>
             
            </div>
            <div className="marital d-flex align-items-center">
              
                <label
                  className={`maritalcircle p-2  m-3 ${selectedDiagnosisOptions.includes('R resistance detected and FQ not detected') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="R resistance detected and FQ not detected"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('R resistance detected and FQ not detected')}
                    onChange={() => handleDiagnosisOptionChange('R resistance detected and FQ not detected')}
                  />
                  R resistance detected and FQ not detected
                </label>
              
            </div>
            <div className="marital d-flex align-items-center">
              
                <label
                  className={`maritalcircle p-2 m-3 ${selectedDiagnosisOptions.includes('R resistance detected and FQ detected') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="R resistance detected and FQ detected"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('R resistance detected and FQ detected')}
                    onChange={() => handleDiagnosisOptionChange('R resistance detected and FQ detected')}
                  />
                  R resistance detected and FQ detected
                </label>
                </div>
            <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedDiagnosisOptions.includes('Ultrasound') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="diagnosisOption"
                    value="Ultrasound"
                    style={{ visibility: 'hidden' }}
                    checked={selectedDiagnosisOptions.includes('Ultrasound')}
                    onChange={() => handleDiagnosisOptionChange('Ultrasound')}
                  />
                  Ultrasound
                </label>
             
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
              {/* diagnosis ended*/}

              {/* cnf diagnosis started */}
              <div className="container mt-4">
                <hr/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Confirmed Diagnosis</b>
              </h1>
              <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showCnfDiagnosisOptions}
                  onChange={(e) => handleCnfDiagnosisChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div>
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {showCnfDiagnosisOptions && selectedOrgan && (
               
               <div className="row mt-3">
               <div className="col-md-4 marital d-flex align-items-center">
                 {/* Content for Confirmed Diagnosis Options */}
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('Tuberculin Skin Test (TST)') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="Tuberculin Skin Test (TST)"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('Tuberculin Skin Test (TST)')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('Tuberculin Skin Test (TST)')}
                   />
                   Tuberculin Skin Test (TST) &nbsp;&nbsp;
                 </label>
                 </div>
             <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('Interferon-Gamma Release Assays (IGRAs)') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="Interferon-Gamma Release Assays (IGRAs)"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('Interferon-Gamma Release Assays (IGRAs)')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('Interferon-Gamma Release Assays (IGRAs)')}
                   />
                   Interferon-Gamma Release Assays (IGRAs) &nbsp;&nbsp;
                 </label>
             </div>
             <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('GeneXpert (CBNAAT)') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="GeneXpert (CBNAAT)"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('GeneXpert (CBNAAT)')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('GeneXpert (CBNAAT)')}
                   />
                   GeneXpert (CBNAAT) &nbsp;&nbsp;
                 </label>
                 </div>
             <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('Sputum Microscopy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="Sputum Microscopy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('Sputum Microscopy')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('Sputum Microscopy')}
                   />
                   Sputum Microscopy &nbsp;&nbsp;
                 </label>
             
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('Sputum Culture') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="Sputum Culture"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('Sputum Culture')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('Sputum Culture')}
                   />
                   Sputum Culture &nbsp;&nbsp;
                 </label>
                 </div>
             <div className=" marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('Urine Lipoarabinomannan (LAM) Test') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="Urine Lipoarabinomannan (LAM) Test"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('Urine Lipoarabinomannan (LAM) Test')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('Urine Lipoarabinomannan (LAM) Test')}
                   />
                   Urine Lipoarabinomannan (LAM) Test &nbsp;&nbsp;
                 </label>
                 </div>
             <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedConfirmedDiagnosisOptions.includes('T-SPOT.TB') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="cnfdiagnosisOption"
                     value="T-SPOT.TB"
                     style={{ visibility: 'hidden' }}
                     checked={selectedConfirmedDiagnosisOptions.includes('T-SPOT.TB')}
                     onChange={() => handleConfirmedDiagnosisOptionChange('T-SPOT.TB')}
                   />
                   T-SPOT.TB &nbsp;&nbsp;
                 </label>
               </div>
             </div>
             
                
              )}
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
               {/* cnf diagnosis ended */}

               {/* relapse option started */}
              {selectedPastMedicalHistory.includes('Tuberculosis') && (

              <div className="container mt-4 mb-4">
                <hr/>
          <div className="row">
            <div className="col-md-2 d-flex align-items-center">
              <h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                <b>Relapse</b>
              </h1>
              <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showRelapseOptions}
                  onChange={(e) => handleRelapseChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div>
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {showRelapseOptions && selectedOrgan && (
               
               <div className="row mt-3">
               <div className="col-md-4 marital d-flex align-items-center">
                 {/* Content for Relapse Options */}
                 {[
                   '1st',
                   '2nd',
                   '3rd',
                 ].map((option) => (
                   <label
                     key={option}
                     className={`maritalcircle p-2 m-3 ${selectedRelapseOption === option ? 'active' : ''}`}
                   >
                     <input
                       type="radio"
                       name="relapseChoice"
                       value={option}
                       style={{ visibility: 'hidden' }}
                       checked={selectedRelapseOption === option}
                       onChange={() => handleRelapseChoice(option)}
                     />
                     {option} &nbsp;&nbsp;
                   </label>
                 ))}
               </div>
             </div>
                
              )}
            </div>

           
          </div>
        </div>
        )}
                {/* relapse option ended */}
                <div className="text-center mt-4" style={{paddingLeft:'80%'}}> {/* Use text-right class here */}

<button className="btn btn-primary btn-lg" onClick={(e) => {
  handleThirdblockNext(); 
  handleSubmit(e);
}}
  style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Next &nbsp;&nbsp;
</button>

</div>
      </div>

      {/* Breath Sound ended */}
    </>
  );
}

export default Thirdblock;
