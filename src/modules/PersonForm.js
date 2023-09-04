
export const PersonForm = (props) => {

    const {addPerson, newName, handleNameChange, newNumber, handleNumberChange} = props

    return (
        <div>
            <h2>New contact</h2>
                <form onSubmit={addPerson}>
                    <div>
                    Name: 
                    <input 
                        value={newName}
                        onChange={handleNameChange}
                    />
                    <br />
                    Number: 
                    <input 
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                    </div>
                    <div>
                    <button type="submit">Add</button>
                    </div>
                </form>
        </div>
    )

}
