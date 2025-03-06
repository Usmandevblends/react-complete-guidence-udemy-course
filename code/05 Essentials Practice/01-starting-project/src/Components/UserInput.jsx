import { useState } from "react";

function UserInput() {
    const [UserInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue, 
            };
        });
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="">Initial Investment</label>
                        <input
                            type="number"
                            required
                            value={UserInput.initialInvestment}
                            onChange={(event) =>
                                handleChange("initialInvestment", event.target.value)
                            }
                        />
                    </p>
                    <p>
                        <label htmlFor="">Annual Investment</label>
                        <input
                            type="number"
                            value={UserInput.annualInvestment}
                            onChange={(event) =>
                                handleChange("annualInvestment", event.target.value)
                            }
                            required
                        />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="">Expected Return</label>
                        <input
                            type="number"
                            value={UserInput.expectedReturn}
                            onChange={(event) =>
                                handleChange("expectedReturn", event.target.value)
                            }
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="">Duration</label>
                        <input
                            type="number"
                            value={UserInput.duration}
                            onChange={(event) => handleChange("duration", event.target.value)}
                            required
                        />
                    </p>
                </div>
            </section>
        </>
    );
}

export default UserInput;
