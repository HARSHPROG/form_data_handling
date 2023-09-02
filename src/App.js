import './App.css';

import { useState } from 'react';

function PhoneBookForm({ addEntryToPhoneBook }) {

  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999');

  return (
    <form className='container' onSubmit={e => { 
            e.preventDefault(); 
            addEntryToPhoneBook({
            'firstName': firstName,
            'lastName' : lastName,
            'phone': phone
            }); }}
    >
      <label>First name:</label>
      <br />
      <input 
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        className='userLastname'
        name='userLastname' 
        type='text' 
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        className='userPhone' 
        name='userPhone' 
        type='text'
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value)
        }}
      />
      <br/>
      <input
        className='submitBtn'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {

  return (
    <table className='informationTable'>
      <thead> 
        <tr>
          <th className='tableCell'>First name</th>
          <th className='tableCell'>Last name</th>
          <th className='tableCell'>Phone</th>
        </tr>
      </thead> 
      <tbody>
        {
          props.entries.map( (entry, id) => {
            return (
              <tr key={id}> 
                <td className='tableCell'>
                  {entry['firstName']}
                </td>
                <td className='tableCell'>
                  {entry['lastName']}
                </td>
                <td className='tableCell'>
                  {entry['phone']}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
}

function App(props) {
  const [entries, setEntries] = useState([
    //{'firstName': 'Harsh1', 'lastName': 'Goyal1'},
    //{'firstName': 'Harsh2'},
    //{'firstName': 'Harsh3'}
  ]);

  const addEntryToPhoneBook = (entry) => {
    let copyEntries = [...entries];
    copyEntries.push(entry);
    setEntries(copyEntries);
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable entries={entries}/>
    </section>
  );
}


export default App;
