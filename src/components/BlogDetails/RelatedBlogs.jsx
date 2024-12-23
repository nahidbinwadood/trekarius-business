import RelatedBlogCard from "./RelatedBlogCard";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";

const blogsData = [
  {
    id: 1,
    title: "Demystifying Data Science",
    image: "https://i.ibb.co.com/7CKb3sF/image.png",
  },
  {
    id: 2,
    title: "Crafting Compelling Presentations",
    image: "https://i.ibb.co.com/wK4kSdz/image-1.png",
  },
  {
    id: 3,
    title: "The Psychology of Learning: How Cognitive ",
    image: "https://i.ibb.co.com/TrhFMw3/image-10.png",
  },
  {
    id: 4,
    title: "The Future of Remote Work: Trends ",
    image: "https://i.ibb.co.com/yp1QXZY/Screenshot-1.png",
  },
  {
    id: 5,
    title: "The Role of Emotional Intelligence ",
    image: "https://i.ibb.co.com/RHzvbWh/pexels-haleyve-2087391.jpg",
  },
];

function RelatedBlogs({ blogs }) {
  return (
    <div className="shadow-lg p-8 custom-xs:p-4 rounded-[16px] bg-white">
      <h4 className="text--sm font-semibold text-headingColor mt-6 custom-xs:mt-2 mb-6">
        More Related Blogs
      </h4>
      <div>
        {blogsData.map((blog) => (
          <RelatedBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <Link
        to={"/blogs"}
        className="flex items-center border-b border-headingColor gap-1 w-fit mt-6 text-sm font-semibold text-headingColor duration-200 ease-in-out hover:text-primaryBlue hover:border-primaryBlue"
      >
        Read More
        <p className="rotate-[40deg] text-[16px]">
          <IoMdArrowUp />
        </p>
      </Link>
    </div>
  );
}

export default RelatedBlogs;
