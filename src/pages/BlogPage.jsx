import BlogPost from "@/components/Blog/BlogPost";
import PaginationCustom from "@/components/common/PaginationCustom";
import Container from "@/components/container/Container";

const blogData = [
  {
    id: 1,
    title: "How to Pack Light for Your Next Adventure",
    author: "John Doe",
    img: "https://i.ibb.co.com/7CKb3sF/image.png",
    date: "2024-12-08",
    summary:
      "Discover the art of packing light with tips and tricks to make your next adventure stress-free and efficient.",
    content:
      "Packing light is an essential skill for any traveler. In this blog, we'll cover strategies to maximize space, choose versatile clothing, and eliminate unnecessary items...",
    tags: ["Travel", "Packing Tips", "Adventure"],
  },
  {
    id: 2,
    title: "The Best Hiking Trails in the Pacific Northwest",
    author: "Jane Smith",
    img: "https://i.ibb.co.com/TrhFMw3/image-10.png",
    date: "2024-12-01",
    summary:
      "Explore the stunning hiking trails of the Pacific Northwest, from lush forests to breathtaking mountain views.",
    content:
      "The Pacific Northwest offers some of the most beautiful hiking trails in the world. Whether you're a seasoned hiker or a beginner, there's a trail for you...",
    tags: ["Hiking", "Nature", "Pacific Northwest"],
  },
  {
    id: 3,
    title: "5 Tips for Capturing Stunning Outdoor Photography",
    author: "Alex Johnson",
    img: "https://i.ibb.co.com/wK4kSdz/image-1.png",
    date: "2024-11-28",
    summary:
      "Learn how to take your outdoor photography to the next level with these simple yet effective tips.",
    content:
      "Outdoor photography is all about timing, lighting, and creativity. In this blog, we'll share five essential tips to help you capture breathtaking images...",
    tags: ["Photography", "Outdoors", "Tips"],
  },
  {
    id: 4,
    title: "Why Trekking Is the Ultimate Workout",
    author: "Emily Davis",
    img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
    date: "2024-11-20",
    summary:
      "Trekking combines physical activity and nature, making it the perfect workout for body and mind. Learn why you should try it.",
    content:
      "Trekking isn't just an adventure—it's a full-body workout. From strengthening your legs to boosting your mental health, trekking has countless benefits...",
    tags: ["Trekking", "Fitness", "Health"],
  },
];

function BlogPage() {
  return (
    <section className="pt-[70px] custom-xs:pt-[35px] pb-[120px] custom-xs:pb-[60px]">
      <Container>
        <div className="w-[900px] max-md:w-full mx-auto">
          <div>
            {blogData.map((blog) => (
              <BlogPost key={blog.id} item={blog} />
            ))}
          </div>
          <div className="mt-20">
            <PaginationCustom />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogPage;
