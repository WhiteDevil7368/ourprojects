import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function FourthBlock({
  selectedOrgan,
  selectedPastMedicalHistory,
  selectedChiefOptions,
  selectedLungOptions,
  selectedLaterality,
  selectedBreathSoundOptions,
  selectedLateralityOptionsopt,
  selectedImagingOptions,
  selectedDiagnosisOptions,
  selectedConfirmedDiagnosisOptions,
  selectedpatientID,
  selectedRelapseOption,
  onSubmit,
}) {
  const [selectedPastSurgicalHistory, setSelectedPastSurgicalHistory] = useState([]);
  const [showPastSurgicalHistoryOptions, setShowPastSurgicalHistoryOptions] = useState(false);
  const handlePastSurgicalHistoryChange = (isChecked) => {
    setShowPastSurgicalHistoryOptions(isChecked);
  };
  const [showTextField, setShowTextField] = useState(false);

  const handleAddFreeTextClick = () => {
    setShowTextField(true);
  };
    // Function to handle options selection for Past Surgical History
    const handlePastSurgicalHistoryOptionChange = (option) => {
      if (selectedPastSurgicalHistory.includes(option)) {
        setSelectedPastSurgicalHistory((prevSelected) =>
          prevSelected.filter((item) => item !== option)
        );
      } else {
        setSelectedPastSurgicalHistory((prevSelected) => [...prevSelected, option]);
      }
    };
    const [selectedRespiratorySystem , setselectedRespiratorySystem] = useState([]);
  // const [showRespiratorySystemOptions, setShowRespiratorySystemOptions] = useState(false);
  // // const handleRespiratorySystemChange = (isChecked) => {
  // //   setShowRespiratorySystemOptions(isChecked);
  // // };

    // Function to handle options selection for Respiratory System
  const handleRespiratorySystemOptionChange = (option) => {
    if (selectedRespiratorySystem.includes(option)) {
      setselectedRespiratorySystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setselectedRespiratorySystem((prevSelected) => [...prevSelected, option]);
    }
  };
  const [selectedCardiovascularSystem, setSelectedCardiovascularSystem] = useState([]);
 
   // Function to handle options selection for Cardiovascular System
   const handleCardiovascularSystemOptionChange = (option) => {
    if (selectedCardiovascularSystem.includes(option)) {
      setSelectedCardiovascularSystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedCardiovascularSystem((prevSelected) => [...prevSelected, option]);
    }
  };

  const [selectedRenalSystem, setSelectedRenalSystem] = useState([]);
  
   // Function to handle options selection for Renal System
   const handleRenalSystemOptionChange = (option) => {
    if (selectedRenalSystem.includes(option)) {
      setSelectedRenalSystem((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedRenalSystem((prevSelected) => [...prevSelected, option]);
    }
  };
  const [selectedCurrentMedications, setSelectedCurrentMedications] = useState([]);
  const [showCurrentMedicationsOptions, setShowCurrentMedicationsOptions] = useState(false);
  const handleCurrentMedicationsChange = (isChecked) => {
    setShowCurrentMedicationsOptions(isChecked);
  };
   // Function to handle options selection for Current Medications
   const handleCurrentMedicationsOptionChange = (option) => {
    if (selectedCurrentMedications.includes(option)) {
      setSelectedCurrentMedications((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      setSelectedCurrentMedications((prevSelected) => [...prevSelected, option]);
    }
  };

  
  const [selectedResipatery, setSelectedResipatery] = useState(''); // Initialize with an empty string or a default value

  const handleResipateryChange = (value) => {
    setSelectedResipatery(value);
  };

  const [selectedCardio, setSelectedCardio] = useState(''); // Initialize with an empty string or a default value

  const handleCardioChange = (value) => {
    setSelectedCardio(value);
  };
  const [selectedRenal, setSelectedRenal] = useState(''); // Initialize with an empty string or a default value

  const handleRenalChange = (value) => {
    setSelectedRenal(value);
  };

  const handleFourthblockNext = () => {
    onSubmit(selectedPastSurgicalHistory);
  };
  const [formData, setFormData] = useState({
    patientId: '', // Include patientId directly from the state
    pastSurgicalHistoryOption: '',
    ResipateryOption: '',
    respiratorySystemOption: '',
    CardioOption:'',
    cardiovascularSystemOption:'',
    RenalOption:'',
    renalSystemOption:'',
    currentMedicationsOption:''
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Join the selected options into a comma-separated string
      const pastSurgicalHistoryOption = selectedPastSurgicalHistory.join(',');
      // const lateralityOption = selectedLateralityOptions.join(',');
      const respiratorySystemOption = selectedRespiratorySystem.length > 0 ? selectedRespiratorySystem.join(','): 'NORMAL' ;
      const cardiovascularSystemOption = selectedCardiovascularSystem.length > 0 ? selectedCardiovascularSystem.join(','): 'NORMAL';
      const renalSystemOption = selectedRenalSystem.length >0 ? selectedRenalSystem.join(','): 'NORMAL' ;
      const currentMedicationsOption = selectedCurrentMedications.join(',');
      // const relapseChoice = selectedRelapseOption.join(',') ;
      // const substanceAbuseOption = selectedsubstanceAOptions.length > 0 ? selectedsubstanceAOptions.join(',') : 'NOT SELECTED'; 
  
      const dataToSend = { patientId: formData.patientId, ResipateryOption: formData.ResipateryOption, CardioOption: formData.CardioOption, RenalOption: formData.RenalOption, pastSurgicalHistoryOption, respiratorySystemOption, cardiovascularSystemOption, renalSystemOption, currentMedicationsOption};
  
      console.log('Form Data:', dataToSend);
  
      const response = await fetch('http://localhost:5000/fourth_block_option', {
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
        {/* past surgical history started */}
        <div className="container">
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
                <b>Past Surgical History</b>
              </h1>
              <div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={showPastSurgicalHistoryOptions}
                  onChange={(e) => handlePastSurgicalHistoryChange(e.target.checked)}
                  style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
                />
              </div>
            </div>

            <div className="col-md-6 ms-4">
              {/* Additional options for Breath Sound */}
              {showPastSurgicalHistoryOptions && selectedOrgan && (
               
               <div className="rah">
               <div className="marital d-flex align-items-center">
                 {/* Content for Past Surgical History Options */}
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Appendectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Appendectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Appendectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Appendectomy')}
                   />
                   Appendectomy &nbsp;&nbsp;
                 </label>
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Cholecystectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Cholecystectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Cholecystectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Cholecystectomy')}
                   />
                   Cholecystectomy &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="marital d-flex align-items-center">
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('CoronaryArteryBypass') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="CoronaryArteryBypass"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('CoronaryArteryBypass')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('CoronaryArteryBypass')}
                   />
                   Coronary Artery Bypass &nbsp;&nbsp;
                 </label>
                 
                 <label
                   className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Hysterectomy') ? 'active' : ''}`}
                 >
                   <input
                     type="checkbox"
                     name="pastSurgicalHistoryOption"
                     value="Hysterectomy"
                     style={{ visibility: 'hidden' }}
                     checked={selectedPastSurgicalHistory.includes('Hysterectomy')}
                     onChange={() => handlePastSurgicalHistoryOptionChange('Hysterectomy')}
                   />
                   Hysterectomy &nbsp;&nbsp;
                 </label>
                 </div>
                 <div className="marital d-flex align-items-center">
                 <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('InguinalHerniaRepair') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="InguinalHerniaRepair"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('InguinalHerniaRepair')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('InguinalHerniaRepair')}
                  />
                  Inguinal Hernia Repair &nbsp;&nbsp;
                </label>
                </div>
                 <div className="marital d-flex align-items-center">
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Oophorectomy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Oophorectomy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Oophorectomy')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Oophorectomy')}
                  />
                  Oophorectomy &nbsp;&nbsp;
                </label>
                {/* Add more cloned options as needed */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('Vasectomy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="Vasectomy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('Vasectomy')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('Vasectomy')}
                  />
                  Vasectomy &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedPastSurgicalHistory.includes('WhippleSurgery') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="pastSurgicalHistoryOption"
                    value="WhippleSurgery"
                    style={{ visibility: 'hidden' }}
                    checked={selectedPastSurgicalHistory.includes('WhippleSurgery')}
                    onChange={() => handlePastSurgicalHistoryOptionChange('WhippleSurgery')}
                  />
                  Whipple Surgery &nbsp;&nbsp;
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
        {/* past surgical history ended */}
      
        {/* repiratory option started */}
          {Array.isArray(selectedPastMedicalHistory) && selectedPastMedicalHistory.includes('Respiratory') && (

<div className="container mt-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Respiratory System</b>
</h1>
</div>
<div className="col-md-6 ms-4">
               {/* Additional options for Laterality */}
               {selectedOrgan && (
                 <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedResipatery === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleResipateryChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ResipateryOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedResipatery === 'NORMAL'}
                         onChange={handleInputChange}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedResipatery === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleResipateryChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="ResipateryOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedResipatery === 'ABNORMAL'}
                         onChange={handleInputChange}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more laterality options here */}
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
          )}
          <div className="row">
            <div className="col-md-12">
            <div className="col-md-6 ms-4">
{/* Additional options for Breath Sound */}
{selectedResipatery === 'ABNORMAL' && selectedOrgan && (
  <div className="ddd">
              <div className="marital d-flex align-items-center" style={{marginLeft:'38%'}}>
                {/* Content for Respiratory System Options */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Asthma') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="Asthma"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('Asthma')}
                    onChange={() => handleRespiratorySystemOptionChange('Asthma')}
                  />
                  Asthma &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Bronchiectasis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="Bronchiectasis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('Bronchiectasis')}
                    onChange={() => handleRespiratorySystemOptionChange('Bronchiectasis')}
                  />
                  Bronchiectasis &nbsp;&nbsp;
                </label>
                {/* Add more cloned options as needed */}
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('Covid-19') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="Covid-19"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('Covid-19')}
                    onChange={() => handleRespiratorySystemOptionChange('Covid-19')}
                  />
                  Covid - 19 &nbsp;&nbsp;
                </label>
                </div>
                <div className="marital d-flex align-items-center" style={{marginLeft:'38%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('ChronicObstructivePulmonaryDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="ChronicObstructivePulmonaryDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('ChronicObstructivePulmonaryDisease')}
                    onChange={() => handleRespiratorySystemOptionChange('ChronicObstructivePulmonaryDisease')}
                  />
                  Chronic Obstructive Pulmonary Disease (COPD) &nbsp;&nbsp;
                </label>
                </div>
                <div className="marital d-flex align-items-center" style={{marginLeft:'38%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('CysticFibrosis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="CysticFibrosis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('CysticFibrosis')}
                    onChange={() => handleRespiratorySystemOptionChange('CysticFibrosis')}
                  />
                  Cystic Fibrosis &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRespiratorySystem.includes('InterstitialLungDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="respiratorySystemOption"
                    value="InterstitialLungDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRespiratorySystem.includes('InterstitialLungDisease')}
                    onChange={() => handleRespiratorySystemOptionChange('InterstitialLungDisease')}
                  />
                  Interstitial Lung Disease (ILD) &nbsp;&nbsp;
                </label>
              </div>
            </div>
  
)}
</div>
            </div>
          </div>
        {/* respiratory option ended */}
         {/* Cardiovascular option started */}
         {selectedPastMedicalHistory.includes('Cardiovascular') && (

<div className="container mt-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Cardiovascular System</b>
</h1>

</div>

<div className="col-md-6 ms-4">
{selectedOrgan && (
                 <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCardio === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleCardioChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CardioOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedCardio === 'NORMAL'}
                         onChange={handleInputChange}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedCardio === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleCardioChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="CardioOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedCardio === 'ABNORMAL'}
                         onChange={handleInputChange}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more laterality options here */}
                   </div>
                 </div>
               )}
{/* Additional options for Breath Sound */}

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
       
          <div className="row">
            <div className="col-md-12">
            {selectedCardio === 'ABNORMAL' && selectedOrgan && (
 <div className="dsd">
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
   {/* Content for Cardiovascular System Options */}
   <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('CoronaryArteryDisease') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="CoronaryArteryDisease"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('CoronaryArteryDisease')}
       onChange={() => handleCardiovascularSystemOptionChange('CoronaryArteryDisease')}
     />
     Coronary Artery Disease &nbsp;&nbsp;
   </label>
   <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('Hypertension') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="Hypertension"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('Hypertension')}
       onChange={() => handleCardiovascularSystemOptionChange('Hypertension')}
     />
     Hypertension &nbsp;&nbsp;
   </label>
   </div>
   <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
   <label
     className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('MyocardialInfarction') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="cardiovascularSystemOption"
       value="MyocardialInfarction"
       style={{ visibility: 'hidden' }}
       checked={selectedCardiovascularSystem.includes('MyocardialInfarction')}
       onChange={() => handleCardiovascularSystemOptionChange('MyocardialInfarction')}
     />
     Myocardial Infarction (Heart Attack) &nbsp;&nbsp;
   </label>
   </div>
   <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
   <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('PeripheralArteryDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="PeripheralArteryDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('PeripheralArteryDisease')}
                    onChange={() => handleCardiovascularSystemOptionChange('PeripheralArteryDisease')}
                  />
                  Peripheral Artery Disease (PAD) &nbsp;&nbsp;
                </label>
                </div>
   <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('RheumaticHeartDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="RheumaticHeartDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('RheumaticHeartDisease')}
                    onChange={() => handleCardiovascularSystemOptionChange('RheumaticHeartDisease')}
                  />
                  Rheumatic Heart Disease &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCardiovascularSystem.includes('ValvularHeartDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="cardiovascularSystemOption"
                    value="ValvularHeartDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCardiovascularSystem.includes('ValvularHeartDisease')}
                    onChange={() => handleCardiovascularSystemOptionChange('ValvularHeartDisease')}
                  />
                  Valvular Heart Disease &nbsp;&nbsp;
                </label>
            
   {/* Add more cloned options as needed */}
 </div>
</div>
  
)}
            </div>
          </div>
       
        {/* Cardiovascular option ended */}
        {/* Renal option started */}
        {selectedPastMedicalHistory.includes('Renal') && (

<div className="container mt-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Renal System</b>
</h1>
</div>

<div className="col-md-6 ms-4">
{selectedOrgan && (
                 <div className="col-md-8">
                   <div className="marital d-flex m-3 align-items-center">
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRenal === 'NORMAL' ? 'active' : ''}`}
                       onClick={() => handleRenalChange('NORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RenalOption"
                         value="NORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedRenal === 'NORMAL'}
                         onChange={handleInputChange}
                       />
                       NORMAL &nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     <label
                       className={`maritalcircle p-2 m-3 ${selectedRenal === 'ABNORMAL' ? 'active' : ''}`}
                       onClick={() => handleRenalChange('ABNORMAL')}
                     >
                       &nbsp;&nbsp;&nbsp;&nbsp;
                       <input
                         type="radio"
                         name="RenalOption"
                         value="ABNORMAL"
                         style={{ visibility: 'hidden' }}
                         checked={formData.selectedRenal === 'ABNORMAL'}
                         onChange={handleInputChange}
                       />
                       ABNORMAL&nbsp;&nbsp;&nbsp;&nbsp;
                     </label>
                     {/* Add more laterality options here */}
                   </div>
                 </div>
               )}
{/* Additional options for Breath Sound */}

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

          <div className="row">
            <div className="col-md-12">
            {selectedRenal === 'ABNORMAL' && selectedOrgan && (
 <div className="jsj">
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
   {/* Content for Renal System Options */}
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('AcuteKidneyInjury') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="AcuteKidneyInjury"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('AcuteKidneyInjury')}
       onChange={() => handleRenalSystemOptionChange('AcuteKidneyInjury')}
     />
     Acute Kidney Injury (AKI) &nbsp;&nbsp;
   </label>
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('ChronicKidneyDisease') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="ChronicKidneyDisease"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('ChronicKidneyDisease')}
       onChange={() => handleRenalSystemOptionChange('ChronicKidneyDisease')}
     />
     Chronic Kidney Disease&nbsp;&nbsp;
   </label>
   </div>
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
   <label
     className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Cystitis') ? 'active' : ''}`}
   >
     <input
       type="checkbox"
       name="renalSystemOption"
       value="Cystitis"
       style={{ visibility: 'hidden' }}
       checked={selectedRenalSystem.includes('Cystitis')}
       onChange={() => handleRenalSystemOptionChange('Cystitis')}
     />
     Cystitis &nbsp;&nbsp;
   </label>
   
   <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('DiabeticNephropathy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="DiabeticNephropathy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('DiabeticNephropathy')}
                    onChange={() => handleRenalSystemOptionChange('DiabeticNephropathy')}
                  />
                  Diabetic Nephropathy &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Glomerulonephritis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Glomerulonephritis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Glomerulonephritis')}
                    onChange={() => handleRenalSystemOptionChange('Glomerulonephritis')}
                  />
                  Glomerulonephritis &nbsp;&nbsp;
                </label>
                
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('HypertensiveNephropathy') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="HypertensiveNephropathy"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('HypertensiveNephropathy')}
                    onChange={() => handleRenalSystemOptionChange('HypertensiveNephropathy')}
                  />
                  Hypertensive Nephropathy &nbsp;&nbsp;
                </label>

                </div>
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}} >
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('KidneyStones') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="KidneyStones"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('KidneyStones')}
                    onChange={() => handleRenalSystemOptionChange('KidneyStones')}
                  />
                  Kidney Stones &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('NephroticSyndrome') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="NephroticSyndrome"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('NephroticSyndrome')}
                    onChange={() => handleRenalSystemOptionChange('NephroticSyndrome')}
                  />
                  Nephrotic Syndrome &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('PolycysticKidneyDisease') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="PolycysticKidneyDisease"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('PolycysticKidneyDisease')}
                    onChange={() => handleRenalSystemOptionChange('PolycysticKidneyDisease')}
                  />
                  Polycystic Kidney Disease &nbsp;&nbsp;
                </label>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('Pyelonephritis') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="Pyelonephritis"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('Pyelonephritis')}
                    onChange={() => handleRenalSystemOptionChange('Pyelonephritis')}
                  />
                  Pyelonephritis &nbsp;&nbsp;
                </label>
                </div>
 <div className="marital d-flex align-items-center" style={{marginLeft:'20.5%'}}>
                <label
                  className={`maritalcircle p-2 m-3 ${selectedRenalSystem.includes('UrinaryTractInfections') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="renalSystemOption"
                    value="UrinaryTractInfections"
                    style={{ visibility: 'hidden' }}
                    checked={selectedRenalSystem.includes('UrinaryTractInfections')}
                    onChange={() => handleRenalSystemOptionChange('UrinaryTractInfections')}
                  />
                  Urinary Tract Infections (UTIs) &nbsp;&nbsp;
                </label>
   {/* Add more cloned options as needed */}
 </div>
</div>
  
)}
            </div>
          </div>
        {/* Renal option ended */}
        {/* Current Medication Started */}
        <div className="container mt-4 mb-4">
  <hr/>
<div className="row">
<div className="col-md-2 d-flex align-items-center">
<h1 className="titl" style={{ fontWeight: '600', fontSize: '0.9rem' }}>
  <b>Current Medication</b>
</h1>
<div className="form-check form-switch ml-2" style={{ marginLeft: '15%' }}>
  <input
    className="form-check-input"
    type="checkbox"
    id="flexSwitchCheckDefault"
    checked={showCurrentMedicationsOptions}
    onChange={(e) => handleCurrentMedicationsChange(e.target.checked)}
    style={{ fontSize: '1rem', transform: 'scale(1.2)' }}
  />
</div>
</div>

<div className="col-md-6 ms-4">
{/* Additional options for Breath Sound */}
{showCurrentMedicationsOptions && selectedOrgan && (
  <div className="col-md-12">
              <div className="marital d-flex align-items-center">
                {/* Content for Current Medications Options */}
                {(selectedCardiovascularSystem.includes('CoronaryArteryDisease') || selectedCardiovascularSystem.includes('MyocardialInfarction') || selectedCardiovascularSystem.includes('ValvularHeartDisease'))  &&(
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antiarrhythmics') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antiarrhythmics"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antiarrhythmics')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antiarrhythmics')}
                  />
                  Antiarrhythmics &nbsp;&nbsp;
                </label>
                )}

              {(selectedRespiratorySystem.includes('Bronchiectasis') || selectedRespiratorySystem.includes('CysticFibrosis') || selectedRenalSystem.includes('UrinaryTractInfections') || selectedRenalSystem.includes('Pyelonephritis') || selectedRenalSystem.includes('Cystitis')) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antibiotics') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antibiotics"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antibiotics')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antibiotics')}
                  />
                  Antibiotics &nbsp;&nbsp;
                </label>
                )}
                {(selectedCardiovascularSystem.includes('CoronaryArteryDisease') || selectedCardiovascularSystem.includes('MyocardialInfarction') || selectedCardiovascularSystem.includes('ValvularHeartDisease') || selectedLungOptions.includes('Pulmonary Embolism') || selectedPastSurgicalHistory.includes('CoronaryArteryBypass') ) &&(
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Anticoagulants') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Anticoagulants"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Anticoagulants')}
                    onChange={() => handleCurrentMedicationsOptionChange('Anticoagulants')}
                  />
                  Anticoagulants &nbsp;&nbsp;
                </label>
                )}

                {selectedPastMedicalHistory.includes('Epilepsy') && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Anticonvulsants') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Anticonvulsants"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Anticonvulsants')}
                    onChange={() => handleCurrentMedicationsOptionChange('Anticonvulsants')}
                  />
                  Anticonvulsants &nbsp;&nbsp;
                </label>
                )}
                {selectedPastMedicalHistory.includes('Any Psychiatric illness') &&(
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antidepressants') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antidepressants"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antidepressants')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antidepressants')}
                  />
                  Antidepressants &nbsp;&nbsp;
                </label>
                )}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antimalarials') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antimalarials"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antimalarials')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antimalarials')}
                  />
                  Antimalarials &nbsp;&nbsp;
                </label> */}
                {(selectedCardiovascularSystem.includes('PeripheralArteryDisease') || selectedPastSurgicalHistory.includes('CoronaryArteryBypass')) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antiplatelet') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antiplatelet"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antiplatelet')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antiplatelet')}
                  />
                  Antiplatelet &nbsp;&nbsp;
                </label>
                )}
                {selectedPastMedicalHistory.includes('Any Psychiatric illness')&&(
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antipsychotics') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antipsychotics"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antipsychotics2')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antipsychotics')}
                  />
                  Antipsychotics &nbsp;&nbsp;
                </label>
                )}
                {selectedRespiratorySystem.includes('Covid-19') && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Antivirals') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Antivirals"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Antivirals')}
                    onChange={() => handleCurrentMedicationsOptionChange('Antivirals')}
                  />
                  Antivirals &nbsp;&nbsp;
                </label>
                )}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('AzoleAntifungals') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="AzoleAntifungals"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('AzoleAntifungals')}
                    onChange={() => handleCurrentMedicationsOptionChange('AzoleAntifungals')}
                  />
                  Azole Antifungals &nbsp;&nbsp;
                </label> */}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Barbiturates') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Barbiturates"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Barbiturates')}
                    onChange={() => handleCurrentMedicationsOptionChange('Barbiturates')}
                  />
                  Barbiturates &nbsp;&nbsp;
                </label> */}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Benzodiazepines') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Benzodiazepines"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Benzodiazepines')}
                    onChange={() => handleCurrentMedicationsOptionChange('Benzodiazepines')}
                  />
                  Benzodiazepines &nbsp;&nbsp;
                </label> */}
              {(selectedCardiovascularSystem.includes('CoronaryArteryDisease') || selectedCardiovascularSystem.includes('MyocardialInfarction') || selectedCardiovascularSystem.includes('Hypertension') || selectedRespiratorySystem.includes('Asthma') )&&(
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Beta-blockers') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Beta-blockers"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Beta-blockers')}
                    onChange={() => handleCurrentMedicationsOptionChange('Beta-blockers')}
                  />
                  Beta-blockers &nbsp;&nbsp;
                </label>
                )}
                {selectedCardiovascularSystem.includes('CoronaryArteryDisease') && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('CardiacGlycosidePreparations') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="CardiacGlycosidePreparations"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('CardiacGlycosidePreparations')}
                    onChange={() => handleCurrentMedicationsOptionChange('CardiacGlycosidePreparations')}
                  />
                  Cardiac Glycoside Preparations &nbsp;&nbsp;
                </label>
                )}
                {(selectedRespiratorySystem.includes('Asthma') || selectedRespiratorySystem.includes('Bronchiectasis') || selectedRespiratorySystem.includes('Covid-19') || selectedRespiratorySystem.includes('ChronicObstructivePulmonaryDisease') || selectedLungOptions.includes('Intersitial Lung Disease (ILD)') || selectedRenalSystem.includes('AcuteKidneyInjury') || selectedRenalSystem.includes('NephroticSyndrome')) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Corticosteroids') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Corticosteroids"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Corticosteroids')}
                    onChange={() => handleCurrentMedicationsOptionChange('Corticosteroids')}
                  />
                  Corticosteroids &nbsp;&nbsp;
                </label>
                )}

                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Fibrates') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Fibrates"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Fibrates')}
                    onChange={() => handleCurrentMedicationsOptionChange('Fibrates')}
                  />
                  Fibrates &nbsp;&nbsp;
                </label> */}
                { (selectedPastMedicalHistory.includes('Diabetes') || selectedRenalSystem.includes('DiabeticNephropathy') ) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('OralHypoglycemicAgents') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="OralHypoglycemicAgents"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('OralHypoglycemicAgents')}
                    onChange={() => handleCurrentMedicationsOptionChange('OralHypoglycemicAgents')}
                  />
                  Oral Hypoglycemic Agents &nbsp;&nbsp;
                </label>
                )}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('HormonalContraceptives') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="HormonalContraceptives"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('HormonalContraceptives')}
                    onChange={() => handleCurrentMedicationsOptionChange('HormonalContraceptives')}
                  />
                  Hormonal Contraceptives / Progestins &nbsp;&nbsp;
                </label> */}
                {(selectedLungOptions.includes('Intersitial Lung Disease (ILD)') || selectedRenalSystem.includes('ChronicKidneyDisease') ) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Immunosuppressants') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Immunosuppressants"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Immunosuppressants')}
                    onChange={() => handleCurrentMedicationsOptionChange('Immunosuppressants')}
                  />
                  Immunosuppressants &nbsp;&nbsp;
                </label>
                )}
                {selectedRespiratorySystem.includes('Covid-19') && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('ImmunomodulatoryDrugs') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="ImmunomodulatoryDrugs"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('ImmunomodulatoryDrugs')}
                    onChange={() => handleCurrentMedicationsOptionChange('ImmunomodulatoryDrugs')}
                  />
                  Immunomodulatory Drugs &nbsp;&nbsp;
                </label>
                )}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Methylxanthines') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Methylxanthines"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Methylxanthines')}
                    onChange={() => handleCurrentMedicationsOptionChange('Methylxanthines')}
                  />
                  Methylxanthines &nbsp;&nbsp;
                </label> */}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('NarcoticAnalgesics') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="NarcoticAnalgesics"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('NarcoticAnalgesics')}
                    onChange={() => handleCurrentMedicationsOptionChange('NarcoticAnalgesics')}
                  />
                  Narcotic Analgesics &nbsp;&nbsp;
                </label> */}
                {/* <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('Phosphodiesterase-5') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="Phosphodiesterase-5"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('Phosphodiesterase-5')}
                    onChange={() => handleCurrentMedicationsOptionChange('Phosphodiesterase-5')}
                  />
                  Phosphodiesterase-5 (PDE-5) Inhibitors &nbsp;&nbsp;
                </label> */}
                {(selectedPastMedicalHistory.includes('Hyperthyroid') || selectedPastMedicalHistory.includes('Hypothyroid') ) && (
                <label
                  className={`maritalcircle p-2 m-3 ${selectedCurrentMedications.includes('ThyroidPreparations') ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    name="currentMedicationsOption"
                    value="ThyroidPreparations"
                    style={{ visibility: 'hidden' }}
                    checked={selectedCurrentMedications.includes('ThyroidPreparations')}
                    onChange={() => handleCurrentMedicationsOptionChange('ThyroidPreparations')}
                  />
                  Thyroid Preparations &nbsp;&nbsp;
                </label>
                )}
                {/* Add more cloned options as needed */}
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
 {/* Current Medication ended */}
 <div className="text-center mt-4" style={{paddingLeft:'80%'}}> {/* Use text-right class here */}

<button className="btn btn-primary btn-lg" 
onClick={(e) => {
  handleFourthblockNext();
handleSubmit(e);
}}

style={{ backgroundColor: '#795CED', color: '#fff' }}>
  &nbsp;&nbsp; Next &nbsp;&nbsp;
</button>

</div>

      </div>
    </>
  );
}

export default FourthBlock;
