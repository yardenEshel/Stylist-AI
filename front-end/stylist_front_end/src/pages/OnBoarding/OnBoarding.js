// src/components/OnBoarding/OnBoarding.js

import React, { useState, useEffect } from 'react';
import './OnBoarding.css';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  FormHelperText,
  Slider,
  Button,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete'; // Import Autocomplete
import PropTypes from 'prop-types';

// Extended Values Options
const valuesOptions = [
  { label: 'Sustainability', value: 'Sustainability' },
  { label: 'Innovation', value: 'Innovation' },
  { label: 'Customer-Centric', value: 'Customer-Centric' },
  { label: 'Quality', value: 'Quality' },
  { label: 'Integrity', value: 'Integrity' },
  { label: 'Collaboration', value: 'Collaboration' },
  { label: 'Excellence', value: 'Excellence' },
  { label: 'Diversity', value: 'Diversity' },
  { label: 'Transparency', value: 'Transparency' },
  { label: 'Accountability', value: 'Accountability' },
  { label: 'Agility', value: 'Agility' },
  { label: 'Empowerment', value: 'Empowerment' },
  { label: 'Respect', value: 'Respect' },
  { label: 'Creativity', value: 'Creativity' },
  { label: 'Passion', value: 'Passion' },
  { label: 'Simplicity', value: 'Simplicity' },
  { label: 'Reliability', value: 'Reliability' },
  // Add more values as needed
];

// Extended Brand Type Options
const brandTypeOptions = [
  { label: 'Luxury', value: 'Luxury' },
  { label: 'Budget', value: 'Budget' },
  { label: 'Tech', value: 'Tech' },
  { label: 'Fashion', value: 'Fashion' },
  { label: 'Eco-Friendly', value: 'Eco-Friendly' },
  { label: 'Organic', value: 'Organic' },
  { label: 'Artisan', value: 'Artisan' },
  { label: 'Minimalist', value: 'Minimalist' },
  { label: 'Avant-Garde', value: 'Avant-Garde' },
  { label: 'Casual', value: 'Casual' },
  { label: 'Sportswear', value: 'Sportswear' },
  { label: 'Streetwear', value: 'Streetwear' },
  { label: 'High-End', value: 'High-End' },
  { label: 'Fast Fashion', value: 'Fast Fashion' },
  { label: 'Luxury Streetwear', value: 'Luxury Streetwear' },
  { label: 'Vintage', value: 'Vintage' },
  { label: 'Bohemian', value: 'Bohemian' },
  { label: 'Preppy', value: 'Preppy' },
  { label: 'Punk', value: 'Punk' },
  // Add more brand types as needed
];

const OnBoarding = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define the steps
  const steps = [
    { id: 1, title: 'Event Type' },
    { id: 2, title: 'Price Range' },
    { id: 3, title: 'Sizes' },
    { id: 4, title: 'Additional Points' },
    { id: 5, title: 'Upload Images' },
  ];

  // State to track the current step
  const [currentStep, setCurrentStep] = useState(null); // null means no step selected
  const [completedSteps, setCompletedSteps] = useState([]);

  // State to store form data
  const [formData, setFormData] = useState({
    eventType: '',
    eventTypeOther: '', // Added to handle 'Other' specification
    priceRange: [100, 1000], // Initialize with default min and max values
    venueSize: '',
    attendees: '',
    values: [],
    brandType: [],
    images: [],
  });

  // State to track if 'Other' is selected
  const [isOther, setIsOther] = useState(formData.eventType === 'Other');

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, selectedOptions, files } = e.target;
    if (type === 'select-multiple') {
      const selectedValues = Array.from(selectedOptions).map((option) => option.value);
      setFormData((prev) => ({ ...prev, [name]: selectedValues }));
    } else if (type === 'file') {
      const fileArray = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFormData((prev) => ({ ...prev, [name]: fileArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle radio button changes
  const handleRadioChange = (e) => {
    handleChange(e);
    setIsOther(e.target.value === 'Other');
  };

  // Slider Change Handler
  const handleSliderChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      priceRange: newValue,
    }));

    // Clear any existing errors related to price
    setErrors((prev) => ({
      ...prev,
      priceRange: '',
    }));
  };

  // Validate each step
  const validateStep = () => {
    let stepErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.eventType) {
          stepErrors.eventType = 'Please select a type of event.';
        }
        if (formData.eventType === 'Other' && !formData.eventTypeOther) {
          stepErrors.eventTypeOther = 'Please specify the event type.';
        }
        break;
      case 2:
        const [minPrice, maxPrice] = formData.priceRange;

        if (minPrice === undefined || minPrice === null) {
          stepErrors.priceRange = 'Please select a minimum price.';
        }

        if (maxPrice === undefined || maxPrice === null) {
          stepErrors.priceRange = 'Please select a maximum price.';
        }

        if (minPrice > maxPrice) {
          stepErrors.priceRange = 'Minimum price cannot be greater than maximum price.';
        }
        break;
      case 3:
        if (!formData.venueSize) {
          stepErrors.venueSize = 'Please enter the venue size.';
        }
        if (!formData.attendees) {
          stepErrors.attendees = 'Please enter the number of attendees.';
        }
        if (
          (formData.venueSize && Number(formData.venueSize) <= 0) ||
          (formData.attendees && Number(formData.attendees) <= 0)
        ) {
          stepErrors.venueSize = 'Please enter positive numbers.';
          stepErrors.attendees = 'Please enter positive numbers.';
        }
        break;
      case 4:
        if (formData.values.length === 0) {
          stepErrors.values = 'Please select at least one value.';
        }
        if (formData.brandType.length === 0) {
          stepErrors.brandType = 'Please select at least one brand type.';
        }
        break;
      case 5:
        if (formData.images.length === 0) {
          stepErrors.images = 'Please upload at least one image.';
        }
        if (formData.images.length > 25) {
          stepErrors.images = 'You can upload a maximum of 25 images.';
        }
        break;
      default:
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  // Handle navigation to next step
  const handleNext = () => {
    if (validateStep()) {
      setCompletedSteps((prev) => {
        if (!prev.includes(currentStep)) {
          return [...prev, currentStep];
        }
        return prev;
      });

      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(null); // Finish onboarding
      }
    }
  };

  // Handle navigation to previous step
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(null);
    }
  };

  // Handle step box click
  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };

  // Reset the onboarding process
  const resetOnboarding = () => {
    setCurrentStep(null);
    setCompletedSteps([]);
    setFormData({
      eventType: '',
      eventTypeOther: '', // Reset 'Other' field
      priceRange: [100, 1000], // Reset to default price range
      venueSize: '',
      attendees: '',
      values: [],
      brandType: [],
      images: [],
    });
    setIsOther(false);
    setErrors({});
  };

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      formData.images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, [formData.images]);

  // Internal Sub-Components

  // StepBox Component
  const StepBox = ({ step, isCompleted, isActive, onClick }) => {
    return (
      <div
        className={`step-box ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
        onClick={() => onClick(step.id)}
      >
        <span className="step-number">{step.id}</span>
        <span className="step-title">{step.title}</span>
        {isCompleted && <span className="checkmark">✔</span>}
      </div>
    );
  };

  StepBox.propTypes = {
    step: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  // EventTypeForm Component
  const EventTypeForm = ({
    formData,
    handleChange,
    handleRadioChange,
    isOther,
    errors,
  }) => {
    return (
      <FormControl component="fieldset" error={Boolean(errors.eventType)} fullWidth>
        <FormLabel component="legend">Select Your Event Type:</FormLabel>
        <RadioGroup
          aria-label="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleRadioChange}
          row
        >
          {[
            'Everyday',
            'Celebratory',
            'Business',
            'Casual',
            'Formal',
            'Sporting',
            'Themed',
            'Other',
          ].map((type) => (
            <FormControlLabel
              key={type}
              value={type}
              control={<Radio color="primary" />}
              label={type}
            />
          ))}
        </RadioGroup>
        {isOther && (
          <TextField
            name="eventTypeOther"
            label="Please specify"
            value={formData.eventTypeOther || ''}
            onChange={handleChange}
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            error={Boolean(errors.eventTypeOther)}
            helperText={errors.eventTypeOther}
          />
        )}
        {errors.eventType && <FormHelperText>{errors.eventType}</FormHelperText>}
      </FormControl>
    );
  };

  EventTypeForm.propTypes = {
    formData: PropTypes.shape({
      eventType: PropTypes.string.isRequired,
      eventTypeOther: PropTypes.string,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleRadioChange: PropTypes.func.isRequired,
    isOther: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
  };

  // PriceRangeForm Component
  const PriceRangeForm = ({ formData, handleSliderChange, errors }) => {
    return (
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="priceRange">Price Range:</label>
          <Slider
            value={formData.priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="priceRange"
            min={0}
            max={10000}
            step={10}
            marks={[
              { value: 0, label: '$0' },
              { value: 2500, label: '$2.5k' },
              { value: 5000, label: '$5k' },
              { value: 7500, label: '$7.5k' },
              { value: 10000, label: '$10k' },
            ]}
          />
          {errors.priceRange && (
            <span className="error" role="alert">
              {errors.priceRange}
            </span>
          )}
          <div className="price-values">
            <span>Min: ${formData.priceRange[0]}</span>
            <span>Max: ${formData.priceRange[1]}</span>
          </div>
        </div>
      </div>
    );
  };

  PriceRangeForm.propTypes = {
    formData: PropTypes.shape({
      priceRange: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    handleSliderChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };

  // VenueDetailsForm Component
  const VenueDetailsForm = ({ formData, handleChange, errors }) => {
    return (
      <div className="form-group">
        {/* Venue Size Field */}
        <div className="input-group">
          <label htmlFor="venueSize">Venue Size (sq ft):</label>
          <input
            type="number"
            id="venueSize"
            name="venueSize"
            value={formData.venueSize}
            onChange={handleChange}
            placeholder="e.g., 500"
            min="0"
            step="10"
            aria-describedby="venueSizeError"
            required
          />
          {errors.venueSize && (
            <span id="venueSizeError" className="error" role="alert">
              {errors.venueSize}
            </span>
          )}
        </div>

        {/* Number of Attendees Field */}
        <div className="input-group">
          <label htmlFor="attendees">Number of Attendees:</label>
          <input
            type="number"
            id="attendees"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
            placeholder="e.g., 50"
            min="1"
            step="1"
            aria-describedby="attendeesError"
            required
          />
          {errors.attendees && (
            <span id="attendeesError" className="error" role="alert">
              {errors.attendees}
            </span>
          )}
        </div>
      </div>
    );
  };

  VenueDetailsForm.propTypes = {
    formData: PropTypes.shape({
      venueSize: PropTypes.string.isRequired,
      attendees: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };

  // PreferencesForm Component
  const PreferencesForm = ({ formData, setFormData, errors }) => {
    return (
      <div className="form-group">
        {/* Values Field */}
        <div className="input-group">
          <FormControl
            component="fieldset"
            error={Boolean(errors.values)}
            fullWidth
          >
            <FormLabel component="legend">
              Values <span className="required">*</span>
              <br />
              <small className="instructions">
                Select one or more values that best represent your preferences.
              </small>
            </FormLabel>
            <Autocomplete
              multiple
              id="values"
              options={valuesOptions}
              getOptionLabel={(option) => option.label}
              value={valuesOptions.filter((option) =>
                formData.values.includes(option.value)
              )}
              onChange={(event, newValue) => {
                const selectedValues = newValue.map((option) => option.value);
                setFormData((prev) => ({ ...prev, values: selectedValues }));
                // Clear errors if any
                if (selectedValues.length > 0) {
                  setErrors((prev) => ({ ...prev, values: '' }));
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Select Values"
                  error={Boolean(errors.values)}
                  helperText={errors.values}
                />
              )}
              ListboxProps={{ style: { maxHeight: '200px' } }} // Optional: Limit dropdown height
            />
          </FormControl>
        </div>

        {/* Brand Type Field */}
        <div className="input-group">
          <FormControl
            component="fieldset"
            error={Boolean(errors.brandType)}
            fullWidth
          >
            <FormLabel component="legend">
              Brand Type <span className="required">*</span>
              <br />
              <small className="instructions">
                Select one or more brand types that align with your preferences.
              </small>
            </FormLabel>
            <Autocomplete
              multiple
              id="brandType"
              options={brandTypeOptions}
              getOptionLabel={(option) => option.label}
              value={brandTypeOptions.filter((option) =>
                formData.brandType.includes(option.value)
              )}
              onChange={(event, newValue) => {
                const selectedValues = newValue.map((option) => option.value);
                setFormData((prev) => ({ ...prev, brandType: selectedValues }));
                // Clear errors if any
                if (selectedValues.length > 0) {
                  setErrors((prev) => ({ ...prev, brandType: '' }));
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Select Brand Types"
                  error={Boolean(errors.brandType)}
                  helperText={errors.brandType}
                />
              )}
              ListboxProps={{ style: { maxHeight: '200px' } }} // Optional: Limit dropdown height
            />
          </FormControl>
        </div>
      </div>
    )};

    PreferencesForm.propTypes = {
      formData: PropTypes.shape({
        values: PropTypes.arrayOf(PropTypes.string).isRequired,
        brandType: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
      setFormData: PropTypes.func.isRequired,
      errors: PropTypes.object.isRequired,
    };

  // UploadImagesForm Component
  const UploadImagesForm = ({ formData, handleChange, errors }) => {
    return (
      <div className="form-group">
        <div className="input-group">
          <label htmlFor="images">Upload Images (1-25):</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleChange}
            aria-describedby="imagesError"
            required
          />
          {errors.images && (
            <span id="imagesError" className="error" role="alert">
              {errors.images}
            </span>
          )}
        </div>
        {formData.images.length > 0 && (
          <div className="image-preview">
            {formData.images.map((image, index) => (
              <div key={index} className="image-container">
                <img
                  src={image.preview}
                  alt={`Preview ${index + 1}`}
                  className="preview-image"
                />
                <button
                  type="button"
                  className="remove-image-button"
                  onClick={() => {
                    // Remove the image from formData
                    const updatedImages = formData.images.filter((_, i) => i !== index);
                    setFormData((prev) => ({ ...prev, images: updatedImages }));
                  }}
                  aria-label={`Remove image ${index + 1}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  UploadImagesForm.propTypes = {
    formData: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({
          file: PropTypes.instanceOf(File).isRequired,
          preview: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
  };

  // NavigationButtons Component
  const NavigationButtons = ({ handleBack, handleNext, isFirstStep, isLastStep }) => {
    return (
      <div className="form-navigation">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          disabled={isFirstStep}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          {isLastStep ? 'Finish' : 'Next'}
        </Button>
      </div>
    );
  };

  NavigationButtons.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    isFirstStep: PropTypes.bool.isRequired,
    isLastStep: PropTypes.bool.isRequired,
  };

  // Confirmation Component
  const Confirmation = ({ resetOnboarding }) => {
    return (
      <div className="confirmation">
        <h2>Onboarding Complete!</h2>
        <p>Thank you for completing the onboarding process.</p>
        <Button variant="contained" color="primary" onClick={resetOnboarding}>
          Start Over
        </Button>
      </div>
    );
  };

  Confirmation.propTypes = {
    resetOnboarding: PropTypes.func.isRequired,
  };

  // Main Render
  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-content">
        {/* Grid of Step Boxes */}
        <div className="steps-grid">
          {steps.map((step) => (
            <StepBox
              key={step.id}
              step={step}
              isCompleted={completedSteps.includes(step.id)}
              isActive={currentStep === step.id}
              onClick={handleStepClick}
            />
          ))}
        </div>

        {/* Current Step Form */}
        {currentStep && (
          <div className="step-form">
            <h2>
              Step {currentStep}: {steps.find((step) => step.id === currentStep).title}
            </h2>
            <form>
              {currentStep === 1 && (
                <EventTypeForm
                  formData={formData}
                  handleChange={handleChange}
                  handleRadioChange={handleRadioChange}
                  isOther={isOther}
                  errors={errors}
                />
              )}

              {currentStep === 2 && (
                <PriceRangeForm
                  formData={formData}
                  handleSliderChange={handleSliderChange}
                  errors={errors}
                />
              )}

              {currentStep === 3 && (
                <VenueDetailsForm
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}

              {currentStep === 4 && (
                <PreferencesForm
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}

              {currentStep === 5 && (
                <UploadImagesForm
                  formData={formData}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}

              {/* Navigation Buttons */}
              <NavigationButtons
                handleBack={handleBack}
                handleNext={handleNext}
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === steps.length}
              />
            </form>
          </div>
        )}
      </div>

      {/* Confirmation Message */}
      {!currentStep && completedSteps.length === steps.length && (
        <Confirmation resetOnboarding={resetOnboarding} />
      )}
    </div>
  );
};

// PropTypes for OnBoarding Component's internal state setters
OnBoarding.propTypes = {};

export default OnBoarding;
