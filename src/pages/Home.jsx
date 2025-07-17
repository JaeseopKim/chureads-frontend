import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import FeedItem from "../components/FeedItem";
import { initialFeedList, initialTags } from "../data/response";
import { useNavigate } from "react-router-dom";
import { auth } from './../firebase';

// 내부 로직 순서
// 1. 변수 선언
// 2. 내부 함수 
// 3. useEffect
const Home = () => {

  // logic
  const history = useNavigate();

  const [feedList, setFeedList] = useState(initialFeedList);

  const currentUser = auth.currentUser;
  console.log("🚀 ~ Home ~ currentUser:", currentUser)
  //const [isLoggedIn, setIsLoggedIn] = useState("");


  const handleEdit = (data) => {
    history(`/edit/${data._id}`); // edit페이지로 이동
  };

  const handleDelete = (selectedItem) => {
    const filterList = feedList.filter((item) => item.id !== selectedItem.id);
    setFeedList(filterList);

    // TODO: 백엔드에 Delete 요청
  };

  const handleLike = (selectedId) => {
    console.log("🚀 ~ handleLike ~ selectedId:", selectedId)
  }

  const handleLogout = async () => {
    // 1. firebase 로그아웃
    const isLoggedIn = !!currentUser;

    if (isLoggedIn) {
      // 로그인된 상태인 경우
      const ok = window.confirm("Are you sure logout?");
      ok && await auth.signOut();
    }

    // 2. /login 으로 이동
    history("/login");

  }

  useEffect(() => {
    // 페이지 진입시 딱 한번 실행
    // TODO: 백엔드에 Get 요청
  }, []);

  useEffect(() => {
    // 로그인되지 않은 사용자는 로그인 페이지로 이동
    const isLoggedIn = !!!currentUser;

    if (isLoggedIn) {
      history("/login");
    }
  }, [history, currentUser]);

  // view
  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      {/* START: 헤더 영역 */}
      <Header isLoggedIn={true} onclick={handleLogout} />
      {/* END: 헤더 영역 */}
      <main className="h-full overflow-auto">
        {/* TODO */}

        <div>
          {/* START: 피드 영역 */}
          <ul>
            {feedList.map((feed) => (
              <FeedItem
                key={feed._id}
                data={feed}
                tags={initialTags}
                isAuthor={true}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLike={handleLike}
              />
            ))}
          </ul>
          {/* END: 피드 영역 */}
        </div>
      </main>
      {/* START: 네비게이션 영역 */}
      <Nav />
      {/* END: 네비게이션 영역 */}
    </div>
  );
};

export default Home;
