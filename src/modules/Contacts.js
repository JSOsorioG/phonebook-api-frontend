
export const Contacts = (porps) => {

    const {search, persons, deletePerson} = porps

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {search === ''
                    ? <>{persons.map(person => 
                        <div key={person.name}>
                            <li> {person.name} : {person.number} </li>
                            <button onClick={() => deletePerson(person.name)}>Delete</button>
                        </div>
                        
                    )}</>
                    : <>{persons.map(person => {return(
                        person.name.toLowerCase().includes(search.toLowerCase())
                            ? <div key={person.name}>
                                <li> {person.name} : {person.number} </li>
                                <button onClick={() => deletePerson(person.name)}>Delete</button>
                            </div>
                            : console.log('No')
                    )})}</>

                    //onClick={deletePerson(person.name)
                } 
            </ul>
             
        </div>
    )
}