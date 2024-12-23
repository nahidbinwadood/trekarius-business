import { Link } from "react-router-dom";

function BlogCard({ item }) {
  return (
    <div className="blogCard bg-blogCardBg rounded-[32px] custom-xs:rounded-[16px] overflow-hidden h-full">
      <div className="h-[200px] overflow-hidden">
        <img className="w-full h-full object-cover duration-200 ease-in-out" src={item?.imgUrl} alt={item?.title} />
      </div>
      <div className="p-[30px]">
        <h4 className="text--sm text-headingColor font-medium">{item?.title}</h4>
        <p className="text-sm font-bold text-headingColor mt-3 mb-[100px] custom-xs:mb-[60px]">{item?.modarator}</p>
        <div>
          <Link
            to={"/"}
            className="inline-block text-sm py-2 px-6 border border-[rgba(30,30,30,0.08)] rounded-[30px] duration-200 ease-in-out hover:text-white hover:bg-primaryOrange font-semibold text-headingColor"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
