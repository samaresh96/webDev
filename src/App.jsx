import { useState } from 'react';

const App = () => {



  const [contacts, setContacts] = useState([]);

  const [formData, setFormData] = useState({ name: '', age: '', hobby: '', email: '', desire: '' });

  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.hobby || !formData.email || !formData.desire) {
      alert("fill in all the blanks")
      return;
    }
    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = formData;
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts((prevContacts) => [...prevContacts, formData]);
    }
    setFormData({ name: '', age: '', hobby: '', email: '', desire: '' });

  };

  const handleEdit = (index) => {
    setFormData(contacts[index]);
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  // jsx down below

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl mb-5">Enter Details</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex flex-wrap mb-4">
          <div className="input_btn">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="btn-primary"
              autoComplete='off'
            />
          </div>
          <div className="input_btn">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="btn-primary"
            />
          </div>
          <div className="input_btn">
            <input
              type="text"
              name="desire"
              value={formData.desire}
              onChange={handleInputChange}
              placeholder="Desire"
              className="btn-primary"
            />
          </div>
          <div className="input_btn">
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={handleInputChange}
              placeholder="Hobby"
              className="btn-primary"
            />
          </div>
          <div className="input_btn">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="btn-primary"
            />
          </div>
        </div>
        <button type="submit" className="save_update">
          {editIndex !== null ? 'Save' : 'Submit'}
        </button>
      </form>
      <div>
        <h2 className="text-2xl mb-3">Submitted Data</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="btn">Name</th>
              <th className="btn">Age</th>
              <th className="btn">Hobby</th>
              <th className="btn">Email</th>
              <th className="btn">Desire</th>
              <th className="btn">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="bg-white">
                <td className="btn">{contact.name}</td>
                <td className="btn">{contact.age}</td>
                <td className="btn">{contact.hobby}</td>
                <td className="btn">{contact.email}</td>
                <td className="btn">{contact.desire}</td>
                <td className="btn">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn_3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn_2"
                  >
                    Delete Them
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;


