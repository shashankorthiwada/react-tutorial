// const BlogList = (props) => {
//   return (
//     <div className="blog-list">
//       <h2>{props.title}</h2>
//       {props.blogs.map((blog) => {
//         return (
//           <div className="blog-preview" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>Written By {blog.author}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
