const FormCard = ({ children, currentStep, prevFormStep, nextFormStep, numSteps }) => {


    const listSteps = [...Array(numSteps)].map((e, i) =>
        <li className={`step ${i < currentStep ? 'step-primary' : ''}`}></li>
    );

    return (
            <>
                <div>
                    <div className="flex flex-row p-2">
                        <ul className="steps w-full">
                            {listSteps}
                        </ul>
                    </div>
                
                    {children}
                </div>
                <div className='flex justify-start gap-2'>
                    <div>
                        {currentStep <= numSteps && (
                            <>
                            {currentStep > 1 && (
                                <button
                                    onClick={prevFormStep}
                                    className="btn btn-primary"
                                    type="button"
                                    >
                                    back
                                </button>
                            )}
                            </>
                        )}
                    </div>

                    <div className="basis-1/2">
                        {currentStep < numSteps && (
                            <>
                                <div className="flex flex-row gap-2">
                                    <button className="btn btn-primary"
                                        onClick={nextFormStep}
                                        type="button"
                                        >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </>
    )
}

export default FormCard;