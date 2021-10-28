import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control mb-2"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
