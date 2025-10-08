import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './formwizard.css';
import { LuHouse } from "react-icons/lu";
import { BsHouses } from "react-icons/bs";
import { MdOutlineViewModule } from "react-icons/md";
import { MdOutlineBungalow } from "react-icons/md";
import { 
  FaBan, 
  FaPowerOff, 
  FaClock, 
  FaFileAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { RxDimensions } from "react-icons/rx";
import { IoKeyOutline } from "react-icons/io5";
import { GiPaintRoller } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { GiHandSaw } from "react-icons/gi";
import { PiRocketLaunchThin } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { PiBinocularsLight } from "react-icons/pi";


const HouseRequestWizard = () => {
  // Initialize EmailJS with your user ID
  emailjs.init('U8Ut1x04tnVbXP2h8');

  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [budgetAmount, setBudgetAmount] = useState(300000);
  const [requestData, setRequestData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    email: '',
    phone: '',
    hasProperty: '',
    catalogPreference: '',
    contactTime: 'anytime',
    privacyPolicy: false
  });
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [inputValidationError, setInputValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const wizardSteps = [
    {
      id: 1,
      title: "Schritt 1 von 7",
      question: "Wo stehen Sie derzeit im Hausbauprozess? *",
      options: [
        { icon: <FaBan />, text: "No concrete plans yet" },
        { icon: <FaPowerOff />, text: "Just starting" },
        { icon: <FaClock />, text: "Active planning" },
        { icon: <FaFileAlt />, text: "Comparing offers" }
      ]
    },
    {
      id: 2,
      title: "Schritt 2 von 7",
      question: "Welchen Haustyp bevorzugen Sie? *",
      options: [
        { icon: <LuHouse />, text: "Einfamilienhaus" },
        { icon: <BsHouses />, text: "Düppelhaus" },
        { icon: <MdOutlineViewModule />, text: "Modulares Haus" },
        { icon: <MdOutlineBungalow />, text: "Bungalow" },
        { icon: <GiFamilyHouse />, text: "Mehrfamilienhaus" }
      ]
    },
    {
      id: 3,
      title: "Schritt 3 von 7",
      question: "Welche Wohnfläche soll das Haus haben? *",
      options: [
        { icon: <RxDimensions />, text: "< 80m²" },
        { icon: <RxDimensions />, text: "80m² - 150m²" },
        { icon: <RxDimensions />, text: "150m² - 200m²" },
        { icon: <RxDimensions />, text: "> 200m²" }
      ]
    },
    {
      id: 4,
      title: "Schritt 4 von 7",
      question: "Sie möchten Ihren Hausbau mit eigenen Arbeitskräften durchführen? *",
      options: [
        { icon: <IoKeyOutline />, text: "Schlüsselfertig" },
        { icon: <GiPaintRoller />, text: "Fast fertig" },
        { icon: <VscTools />, text: "Technische Fertigstellung" },
        { icon: <GiHandSaw />, text: "Rohbau" }
      ]
    },
    {
      id: 5,
      title: "Schritt 5 von 7",
      question: "Wann planen Sie, mit Ihrem Hausbauprojekt zu beginnen? *",
      options: [
        { icon: <PiRocketLaunchThin />, text: "Ab Sofort" },
        { icon: <FaRegCalendarAlt />, text: "Innerhalb 1 Jahres" },
        { icon: <FaRegHourglassHalf />, text: "In 1-2 Jahren" },
        { icon: <PiBinocularsLight />, text: "In mehr als 2 Jahren" }
      ]
    },
    {
      id: 6,
      title: "Schritt 6 von 7",
      question: "Wie hoch ist Ihr ungefähres Budget für Ihr Eigenheimprojekt? (Ohne Grundstück)"
    },
    {
      id: 7,
      title: "Schritt 7 von 7",
      heading: "Fordern Sie jetzt Ihr persönliches Informationspaket an!"
    }
  ];

  const handleSelection = (stepId, option) => {
    setSelectedChoices({
      ...selectedChoices,
      [stepId]: option
    });
    setInputValidationError('');
  };

  const handleFormInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRequestData({
      ...requestData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleBudgetUpdate = (e) => {
    setBudgetAmount(e.target.value);
  };

  const navigateToStep = (step) => {
    if (currentStepIndex < 6 && !selectedChoices[currentStepIndex]) {
      setInputValidationError("Bitte wählen Sie eine Option aus, bevor Sie fortfahren.");
      return;
    }
    setCurrentStepIndex(step);
    setInputValidationError('');
  };

  const goBackToPreviousStep = (step) => {
    setCurrentStepIndex(step);
    setInputValidationError('');
  };

  const submitRequestForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!requestData.privacyPolicy) {
      setInputValidationError("Bitte akzeptieren Sie die Datenschutzerklärung.");
      setIsSubmitting(false);
      return;
    }

    // Prepare all form data for email
    const emailParams = {
      // Personal information
      salutation: requestData.salutation,
      firstName: requestData.firstName,
      lastName: requestData.lastName,
      email: requestData.email,
      phone: requestData.phone,
      street: requestData.street,
      postalCode: requestData.postalCode,
      city: requestData.city,
      
      // Project details
      hasProperty: requestData.hasProperty === 'yes' ? 'Yes' : 'No',
      catalogPreference: requestData.catalogPreference,
      contactTime: requestData.contactTime,
      budget: `${new Intl.NumberFormat('de-DE').format(budgetAmount)} €`,
      
      // Selected options from all steps
      step1: selectedChoices[1]?.text || 'Not selected',
      step2: selectedChoices[2]?.text || 'Not selected',
      step3: selectedChoices[3]?.text || 'Not selected',
      step4: selectedChoices[4]?.text || 'Not selected',
      step5: selectedChoices[5]?.text || 'Not selected',
      
      // Date and time
      submissionDate: new Date().toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_11q91b4',   // Your service ID
        'template_c6ur45z',  // Your template ID
        emailParams
      );

      setShowConfirmationDialog(true);
      
      // Reset form after successful submission
      setCurrentStepIndex(1);
      setSelectedChoices({});
      setRequestData({
        salutation: '',
        firstName: '',
        lastName: '',
        street: '',
        postalCode: '',
        city: '',
        email: '',
        phone: '',
        hasProperty: '',
        catalogPreference: '',
        contactTime: 'anytime',
        privacyPolicy: false
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setInputValidationError("Ein Fehler ist aufgetreten. Versuchen Sie es später noch einmal.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeConfirmationDialog = () => {
    setShowConfirmationDialog(false);
  };

  const calculateProgressWidth = () => {
    const progressPercentages = [14, 28, 42, 57, 71, 85, 100];
    return progressPercentages[currentStepIndex - 1] + '%';
  };

  return (
    <div className="home-request-wizard">
      {wizardSteps.map((step) => (
        <section 
          key={step.id} 
          className={`wizard-step-panel ${currentStepIndex === step.id ? 'is-active' : ''}`}
          id={`wizard-step-${step.id}`}
        >
          <div className="step-header">{step.title}</div>
          <h1 className="step-main-heading">{step.heading || "Häuser sind so individuell wie ihre Bewohner. Was passt zu Ihnen?"}</h1>

          <div className="wizard-progress-tracker">
            <div className="progress-fill" style={{ width: calculateProgressWidth() }}></div>
          </div>

          {inputValidationError && (
            <div className="validation-error-message">
              {inputValidationError}
            </div>
          )}

          {step.id === 6 ? (
            <>
              <div className="step-question-text">{step.question}</div>
              <div className="budget-selection-container">
                <input
                  type="range"
                  id="budgetRangeInput"
                  min="100000"
                  max="1000000"
                  step="10000"
                  value={budgetAmount}
                  onChange={handleBudgetUpdate}
                  className="budget-range-slider"
                />
                <div className="budget-display-value">
                  {new Intl.NumberFormat('de-DE').format(budgetAmount)} €
                </div>
              </div>
              
              <div className="action-buttons single-button">
                <button 
                  className="next-step-button" 
                  onClick={() => navigateToStep(step.id + 1)}
                >
                  <FaArrowRight /> Weiter
                </button>
              </div>
            </>
          ) : step.id === 7 ? (
            <form id="requestForm" onSubmit={submitRequestForm}>
              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Anrede *</label>
                  <select
                    name="salutation"
                    value={requestData.salutation}
                    onChange={handleFormInputChange}
                    required
                    className="form-input-field"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                  </select>
                </div>
              </div>

              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Vornamen *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={requestData.firstName}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie den Vornamen ein"
                    className="form-input-field"
                  />
                </div>
                <div className="form-field-group">
                  <label>Nachnamen *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={requestData.lastName}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie den Nachnamen ein"
                    className="form-input-field"
                  />
                </div>
              </div>

              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Straße und Hausnummer *</label>
                  <input
                    type="text"
                    name="street"
                    value={requestData.street}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte Straße und Hausnummer eingeben"
                    className="form-input-field"
                  />
                </div>
                <div className="form-field-group">
                  <label>Postleitzahl *</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={requestData.postalCode}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie die Postleitzahl ein"
                    className="form-input-field"
                  />
                </div>
              </div>

              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Stadt *</label>
                  <input
                    type="text"
                    name="city"
                    value={requestData.city}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie die Stadt ein"
                    className="form-input-field"
                  />
                </div>
                <div className="form-field-group">
                  <label>E-Mail-Adresse *</label>
                  <input
                    type="email"
                    name="email"
                    value={requestData.email}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie die E-Mail-Adresse ein"
                    className="form-input-field"
                  />
                </div>
              </div>

              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Telefonnummer *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={requestData.phone}
                    onChange={handleFormInputChange}
                    required
                    placeholder="Bitte geben Sie die Telefonnummer ein"
                    className="form-input-field"
                  />
                </div>
                <div className="form-field-group">
                  <label>Besitzen Sie eine Immobilie? *</label>
                  <select
                    name="hasProperty"
                    value={requestData.hasProperty}
                    onChange={handleFormInputChange}
                    required
                    className="form-input-field"
                  >
                    <option value="">Besitzen Sie bereits eine Immobilie?</option>
                    <option value="Ja">Ja</option>
                    <option value="NEIN">NEIN</option>
                  </select>
                </div>
              </div>

              <div className="form-row-container">
                <div className="form-field-group">
                  <label>Katalog *</label>
                  <select
                    name="catalogPreference"
                    value={requestData.catalogPreference}
                    onChange={handleFormInputChange}
                    required
                    className="form-input-field"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="online">Online</option>
                    <option value="print">Drucken</option>
                  </select>
                </div>
                <div className="form-field-group">
                  <label>Wann sollen wir Sie kontaktieren? *</label>
                  <select
                    name="contactTime"
                    value={requestData.contactTime}
                    onChange={handleFormInputChange}
                    required
                    className="form-input-field"
                  >
                    <option value="anytime">Jederzeit</option>
                    <option value="morning">Vormittag</option>
                    <option value="afternoon">Nachmittag</option>
                  </select>
                </div>
              </div>

              <div className="form-row-container checkbox-row">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={requestData.privacyPolicy}
                    onChange={handleFormInputChange}
                    required
                    className="checkbox-input"
                  />
                  <span className="checkbox-label">
                    Ich bin damit einverstanden, dass die im Rahmen der Internet-Nutzung erhobenen Daten zum Zwecke der Kommunikation zwischen mir und der Firma Wolf verwendet und gespeichert werden dürfen. Diese Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden. Ausführliche Informationen und Ihre Rechte zum Thema Datenschutz finden Sie unter diesem
                  </span>
                </label>
              </div>

              <div className="action-buttons single-button">
                <button 
                  type="submit" 
                  className="next-step-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : <><FaArrowRight /> Anfrage Senden</>}
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="step-question-text">{step.question}</div>
              <div className="step-options-grid">
                {step.options.map((option, index) => (
                  <div
                    key={index}
                    className={`step-choice-card ${
                      selectedChoices[step.id]?.text === option.text ? 'is-selected' : ''
                    }`}
                    onClick={() => handleSelection(step.id, option)}
                  >
                    {option.icon ? (
                      <div className="choice-icon">{option.icon}</div>
                    ) : option.image ? (
                      <img
                        src={option.image}
                        alt={option.text}
                        className={step.id === 3 ? 'house-type-icon' : 'choice-icon-img'}
                      />
                    ) : null}
                    <span className="choice-label">{option.text}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="action-buttons single-button">
            {step.id < 6 && (
              <button 
                className="next-step-button" 
                onClick={() => navigateToStep(step.id + 1)}
                disabled={!selectedChoices[step.id]}
              >
                <FaArrowRight /> Weiter
              </button>
            )}
          </div>
        </section>
      ))}

      {showConfirmationDialog && (
        <div className="confirmation-modal">
          <div className="modal-content-container">
            <span className="modal-close-button" onClick={closeConfirmationDialog}>
              <FaTimes />
            </span>
            <h2>Danke schön!</h2>
            <p>Ihre Anfrage wurde erfolgreich abgeschickt.</p>
            <button className="modal-close-confirm" onClick={closeConfirmationDialog}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseRequestWizard;