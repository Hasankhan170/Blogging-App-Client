import axios from "axios";
import { useRef } from "react";

const App = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const image = useRef(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("username", name.current.value);
    formData.append("email", email.current.value);
    formData.append("password", password.current.value);
    formData.append("image", image.current.files[0]); 

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("User registered successfully:", response.data);
    } catch (error) {
      console.error("Error registering user:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={name} placeholder="Username" required />
          <input type="email" ref={email} placeholder="Email" required />
          <input type="password" ref={password} placeholder="Password" required />
          <input type="file" ref={image} placeholder="Image" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
