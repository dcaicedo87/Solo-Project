import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { getStories } from "../../store/stories";

const HomePage = () => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.stories.stories);
  console.log(stories);

  const storiesArr = Object.values(stories);

  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);

  if (!stories) {
    return null;
  }

  return (
    <>
      <div>
        <ul>
          {storiesArr.map((story) => {
            <li key={story.id}>
              <h3>{story.title}</h3>
              <img src={`${story.imageUrl}`} alt="storyPic" />
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
