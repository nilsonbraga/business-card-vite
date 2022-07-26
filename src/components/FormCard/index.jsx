const FormCard = ({ children, currentStep, prevFormStep, nextFormStep, numSteps }) => {


    const listSteps = [...Array(numSteps)].map((e, i) =>
        <li class={`step ${i < currentStep ? 'step-primary' : ''}`}></li>
    );

    return (
        <div>
            <>
                <div className="flex flex-row">
                    <ul class="steps">
                        {listSteps}
                    </ul>
                </div>
            </>

            {currentStep <= numSteps && (
                <>
                {currentStep > 1 && (
                    <button
                        onClick={prevFormStep}
                        class="btn btn-primary"
                        type="button"
                        >
                        back
                    </button>
                )}

               
                </>
            )}

            
            {children}

            {currentStep < numSteps && (
                <>
                    <br />
                    <div className="flex flex-row gap-2">
                        <button class="btn btn-primary"
                            onClick={nextFormStep}
                            type="button"
                            >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default FormCard;