import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiHeart, FiBarChart2, FiFlag } from "react-icons/fi";
import "./PostMarquee.css";

const HOLD_MS = 2600;

const PostMarqueeCard = ({ post }) => (
  <div className="why-post post-marquee-card">
    <div className="why-post-header">
      <div className="why-post-avatar"></div>
      <div className="why-post-id">
        <p className="why-post-name">{post.name}</p>
        <p className="why-post-handle">{post.handle}</p>
      </div>
      <div className="why-post-meta">
        <p className="why-post-time">{post.time}</p>
        <p className="why-post-tag">
          <span>{post.tag}</span> {post.level}
        </p>
      </div>
    </div>
    <div className="why-post-stats">
      <span className="why-post-stat">
        <FiHeart /> Likes {post.likes}
      </span>
      <span className="why-post-stat">
        <FiBarChart2 /> Views {post.views}
      </span>
      <span className="why-post-stat">
        <FiFlag /> Flags {post.flags}
      </span>
    </div>
    <p className="why-post-body">{post.body}</p>
  </div>
);

const PostMarquee = ({ posts }) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % posts.length);
    }, HOLD_MS);
    return () => clearInterval(id);
  }, [posts.length, reduceMotion]);

  return (
    <div className="post-marquee">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="post-marquee-slide"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <PostMarqueeCard post={posts[index]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PostMarquee;
