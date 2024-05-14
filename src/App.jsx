import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    hobby: '',
    email: '',
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.hobby && formData.email) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: '',
        age: '',
        hobby: '',
        email: '',
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Enter Details</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="age" className="block mb-1">Age:</label>
            <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="hobby" className="block mb-1">Hobby:</label>
            <input type="text" id="hobby" name="hobby" value={formData.hobby} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </form>
      <div>
        <h2 className="text-xl font-bold mb-2">Submitted Data</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Age</th>
              <th className="border border-gray-300 p-2">Hobby</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-300 p-2">{data.name}</td>
                <td className="border border-gray-300 p-2">{data.age}</td>
                <td className="border border-gray-300 p-2">{data.hobby}</td>
                <td className="border border-gray-300 p-2">{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
