import { useState } from "react";

const AddPage = () => {
  const [homeStay, setHomeStay] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomeStay({ ...homeStay, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/home-stays", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(homeStay),
      });
      if (response.ok) {
        alert("Home Stay added successfully!");
        setHomeStay({
          title: "",
          type: "",
          img: "",
        });
      } else {
        alert("Failed to add Home Stay");
      }
    } catch (error) {
      console.error("Error adding Home Stay:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Home Stay</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input 
          type="text"
          placeholder="Title"
          name="title"
          value={homeStay.title}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <input 
          type="text"
          placeholder="Type"
          name="type"
          value={homeStay.type}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input 
          type="text"
          placeholder="Image URL"
          name="img"
          value={homeStay.img}
          onChange={handleChange}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>
      <button onClick={handleSubmit} className="btn btn-primary">Add Home Stay</button>
    </div>
  );
};

export default AddPage;
