import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './Navbar';
import Personaldetails from './Personaldetails';
import OrganDetails from './Organdetails';
import ThirdBlock from './Thirdblock';
import FourthBlock from './Fourthblock';
import FifthBlock from './Fifthblock';
import Success from './Success';
// import Login from './__pycache__/Login';

function App() {
  const [selectedOrgan, setSelectedOrgan] = useState('');
  const [selectedpatientID, setSelectedpatientID] = useState('');
  const [showOrganDetails, setShowOrganDetails] = useState(false);
  const [showThirdBlock, setShowThirdBlock] = useState(false);
  const [showFourthBlock, setShowFourthBlock] = useState(false);
  const [showFifthBlock, setShowFifthBlock] = useState(false);
  const [selectedPastMedicalHistory, setSelectedPastMedicalHistory] = useState([]);
  const [selectedChiefOptions, setSelectedChiefOptions] = useState([]);
  const [selectedLungOptions, setSelectedLungOptions] = useState([]);
  const [selectedLaterality, setSelectedLaterality] = useState('');
  const [selectedBreathSoundOptions, setSelectedBreathSoundOptions] = useState('');
  const [selectedLateralityOptionsopt, setSelectedLateralityOptionsopt] = useState('');
  const [selectedImagingOptions, setSelectedImagingOptions] = useState('');
  const [selectedDiagnosisOptions, setSelectedDiagnosisOptions] = useState([]);
  const [selectedConfirmedDiagnosisOptions, setSelectedConfirmedDiagnosisOptions] = useState([]);
  const [selectedRelapseOption, setSelectedRelapseOption] = useState([]);
  const [selectedPastSurgicalHistory, setSelectedPastSurgicalHistory] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to set the patientId
 

  const handlePersonalDetailsSubmit = (organ, patientid) => {
    setSelectedOrgan(organ);
    setSelectedpatientID(patientid);
    setShowOrganDetails(true);
  };

  const handleOrganDetailsSubmit = (pastMedicalHistory, chiefOptions, lungOptions) => {
    setSelectedPastMedicalHistory(pastMedicalHistory);
    setSelectedChiefOptions(chiefOptions);
    setSelectedLungOptions(lungOptions);
    setShowThirdBlock(true);
  };

  const handleThirdblockNext = (laterality, breathSoundOptions, lateralityOptionsopt, imagingOptions, diagnosisOptions, confirmedDiagnosisOptions, relapseOption) => {
    setSelectedLaterality(laterality);
    setSelectedBreathSoundOptions(breathSoundOptions);
    setSelectedLateralityOptionsopt(lateralityOptionsopt);
    setSelectedImagingOptions(imagingOptions);
    setSelectedDiagnosisOptions(diagnosisOptions);
    setSelectedConfirmedDiagnosisOptions(confirmedDiagnosisOptions);
    setSelectedRelapseOption(relapseOption);
    setShowFourthBlock(true);
  };
  const handleFourthblockNext = (selectedPastSurgicalHistory) => {
    setSelectedPastSurgicalHistory(selectedPastSurgicalHistory);
    setShowFifthBlock(true);
  };
  const handleFifthblockNext = () => {
    setShowSuccess(true); // Set showSuccess to true to render the Success component.
  };
  
  return (
    <>
    {/* <Login/> */}
      <Navbar />
      <ToastContainer />
      {showSuccess ? (
        <Success
          selectedpatientID={selectedpatientID}
        />
      ) : showFifthBlock ? (
        <FifthBlock
          selectedPastSurgicalHistory={selectedPastSurgicalHistory}
          selectedpatientID={selectedpatientID}
          onSubmit={handleFifthblockNext} 
        />
      ) : showFourthBlock ? (
        <FourthBlock
          selectedOrgan={selectedOrgan}
          selectedPastMedicalHistory={selectedPastMedicalHistory}
          selectedChiefOptions={selectedChiefOptions}
          selectedLungOptions={selectedLungOptions}
          selectedLaterality={selectedLaterality}
          selectedBreathSoundOptions={selectedBreathSoundOptions}
          selectedLateralityOptionsopt={selectedLateralityOptionsopt}
          selectedImagingOptions={selectedImagingOptions}
          selectedDiagnosisOptions={selectedDiagnosisOptions}
          selectedpatientID={selectedpatientID}
          selectedConfirmedDiagnosisOptions={selectedConfirmedDiagnosisOptions}
          selectedRelapseOption={selectedRelapseOption}
          onSubmit={handleFourthblockNext}
        />
      ) : showThirdBlock ? (
        <ThirdBlock
          selectedOrgan={selectedOrgan}
          selectedPastMedicalHistory={selectedPastMedicalHistory}
          selectedChiefOptions={selectedChiefOptions}
          selectedpatientID={selectedpatientID}
          selectedLungOptions={selectedLungOptions}
          onSubmit={handleThirdblockNext}
        />
      ) : showOrganDetails ? (
        <OrganDetails
          selectedOrgan={selectedOrgan}
          selectedpatientID={selectedpatientID}
          onSubmit={handleOrganDetailsSubmit}
        />
      ) : (
        
        <Personaldetails onSubmit={handlePersonalDetailsSubmit}/>
      )}
     
    </>
  );
}

export default App;
