import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', hobby: '', email: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.hobby || !formData.email) {
      alert('Please fill in all fields');
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
    setFormData({ name: '', age: '', hobby: '', email: '' });
  };

  const handleEdit = (index) => {
    setFormData(contacts[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl mb-5">Enter Details</h1>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Age"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={handleInputChange}
              placeholder="Hobby"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {editIndex !== null ? 'Save' : 'Submit'}
        </button>
      </form>
      <div>
        <h2 className="text-2xl mb-3">Submitted Data</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Age</th>
              <th className="border px-4 py-2">Hobby</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className="bg-white">
                <td className="border px-4 py-2">{contact.name}</td>
                <td className="border px-4 py-2">{contact.age}</td>
                <td className="border px-4 py-2">{contact.hobby}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
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
