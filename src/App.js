import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Filter } from './modules/Filter';
import { PersonForm } from './modules/PersonForm';
import { Contacts } from './modules/Contacts';
//import axios from 'axios';
import personService from './services/persons';

function App() {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService
      .getAll()
        .then(response => {
          const {data} = response
          setPersons(data)
        })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.some((person) => person.name === newName)) 
    {
      //console.log(persons.indexOf(newName));
      //console.log(persons);
      const personObject = {
        name: newName,
        number: newNumber
      } 
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))

      //console.log(personObject);
    })
      
    }
    else {
      if (window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one`
        )) {
          const personObject = {
            ...(persons.find(person => person.name === newName)),
            number: newNumber
          } 
          const id = persons.find(person => person.name === newName).id
          personService
            .update(id, personObject)
            .then((response) => {
              //console.log(response);
              setPersons((prevState) => {
                return prevState.map((person) =>
                  person.id !== personObject.id ? person : response
                );
              })
            })
        }
    }
   
     setNewName('')
     setNewNumber('')
     
    
  }

  const deletePerson = (name) => {
    //console.log(name);
    //console.log(persons);
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      const id = persons.find(person => person.name === name).id
      console.log(id);
      personService
        .del(persons, id)  
        .then((response) => {
          setPersons((prevState) => {
						return prevState.filter((person) => person);
					});
				})
    }
    
  }

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value)    
  }

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value)    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: 100, height: 100 }}/>
      </header>
      <div>
        <h1>Phonebook</h1>
        <Filter search={search} persons={persons} setSearch={setSearch} />
        <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          handleNameChange={handleNameChange} 
          newNumber={newNumber} 
          handleNumberChange={handleNumberChange} 
        />
        <Contacts search={search} persons={persons} deletePerson={deletePerson}/>
      </div>     
    </div>
  );
}

export default App;
