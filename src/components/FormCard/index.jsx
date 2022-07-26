const FormCard = ({ children, currentStep, prevFormStep, nextFormStep }) => {
    return (
        <div>
            {currentStep < 4 && (
                <>
                {currentStep > 0 && (
                    <button
                        onClick={prevFormStep}
                        type="button"
                        >
                        back
                    </button>
                )}

                <span>Step {currentStep + 1} of 4 </span>
                </>
            )}
            
            {children}

            {currentStep < 3 && (
                <button
                    onClick={nextFormStep}
                    type="button"
                    >
                    Next
                </button>
            )}
        </div>
    )
}

export default FormCard;