import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "Blog1", body: "Blog1 body", author: "Shashank", id: 1 },
    { title: "Blog2", body: "Blog2 body", author: "Sunny", id: 2 },
    { title: "Blog3", body: "Blog3 body", author: "Shashank", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Sunny")}
        title="Custom Blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
