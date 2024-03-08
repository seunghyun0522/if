import styled from "styled-components";

import MyResponsiveRadialBar from "../components/Chart";
const books = [
  {
    title: "영어 필사 100일의 기적",
    img: "",
    author: "김승현",
    hash: ["언어", "영어", "100일의 기적"],
    percent: "65",
    reviews: [
      {
        page: "37",
        create_date: "2023.05.15",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만....",
      },
      {
        page: "100",
        create_date: "2023.05.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는....`,
      },
    ],
  },
  {
    title: "퓨처셀프",
    img: "",
    author: "규찬리",
    percent: "30",
    reviews: [
      {
        page: "14",
        create_date: "2023.03.12",
        content:
          "이 책을 읽고 수학을 2등급 받았습니다. 축구하고 점심시간에 읽고 배고픕니다. 오늘은 다함께 맥도날드를 먹는데 저는 2개 먹고 싶지만....",
      },
      {
        page: "100",
        create_date: "2023.06.30",
        content: `90 페이지부터 솔직히 재밌다. 버거킹이랑 맥도날드 롯데리아
          중 나는 어디가 제일 좋을까..?? 맥너겟 vs 치즈스틱 vs 토네이
          도 그렇다. 아무말이나 하는....`,
      },
    ],
  },
];

const BookContent = styled.div`
  display: flex;

  margin: 100px 90px;
  height: 417px;
`;

const BookInfo = styled.div`
  width: 300px;
  margin-right: 121px;
`;
const BookTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const BookInfoSection = styled.div`
  display: flex;
  align-items: center;
`;

const BookAuthor = styled.span`
  color: #8b8b8b;
  font-family: Inter;
  margin-right: 15px;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BookHash = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ReviewContent = styled.div``;

const FixedContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin-top: 100px;
  margin-right: 40px;
  width: 500px;
  height: 500px;
`;

const ToggleLikeMessage = styled.div`
  color: #2b2a2a;
  font-size: 12px;
  font-style: normal;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  line-height: normal;
  margin-top: 9px;
  margin-bottom: 21px;
`;
function MyLibrary() {
  return (
    <>
      <BookContent>
        <BookInfo>
          <BookTitle>{books[0].title}</BookTitle>
          <BookInfoSection>
            <BookAuthor>{books[0].author}</BookAuthor>
            <BookHash>{books[0].hash.map((x) => `#${x}`)}</BookHash>
          </BookInfoSection>
          <div
            style={{
              display: "flex",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              marginTop: "13px",
              marginBottom: "17px",
            }}
          >
            <div
              style={{
                width: "106px",
                height: "33px",
                backgroundColor: "#F6f1dE",
              }}
            >
              {books[0].percent}%
            </div>
            <div
              style={{
                width: "200px",
                height: "33px",
                backgroundColor: "#D6BD97",
              }}
            ></div>
          </div>
          <div
            style={{
              fontWeight: "600",
              fontStyle: "normal",
              marginBottom: "12px",
            }}
          >
            전체 리뷰
          </div>
          <div style={{ marginBottom: "70px" }}>
            <ReviewContent>
              <div
                style={{
                  borderTop: " 1px solid #C3C3C3",
                  paddingTop: "7px",
                  color: "#868282",
                  marginBottom: "15px",
                }}
              >
                {books[0].reviews[0].page}p | {books[0].reviews[0].create_date}{" "}
                | 수정
              </div>
              <span style={{ fontSize: "12px", fontWeight: "500" }}>
                {books[0].reviews[0].content}
              </span>
              <ToggleLikeMessage>
                <div>펼치기 ⬇️</div>
                <div style={{ textAlign: "right" }}>👍 0 ✉️ 답글 0</div>
              </ToggleLikeMessage>
            </ReviewContent>
            <ReviewContent>
              <div
                style={{
                  borderTop: " 1px solid #C3C3C3",
                  paddingTop: "7px",
                  color: "#868282",
                  marginBottom: "15px",
                }}
              >
                {books[0].reviews[0].page}p | {books[0].reviews[0].create_date}{" "}
                | 수정
              </div>
              <span style={{ fontSize: "12px", fontWeight: "500" }}>
                {books[0].reviews[0].content}
              </span>
              <ToggleLikeMessage>
                <div>펼치기 ⬇️</div>
                <div style={{ textAlign: "right" }}>👍 0 ✉️ 답글 0</div>
              </ToggleLikeMessage>
            </ReviewContent>
          </div>
        </BookInfo>
        <img
          src="https://image.aladin.co.kr/product/28258/73/cover500/k212835380_1.jpg"
          style={{
            boxShadow: "8px 5px 10px 3px rgba(0,0,0,0.25)",
            width: "300px",
          }}
        />
      </BookContent>
      <BookContent>
        <BookInfo>
          <BookTitle>{books[0].title}</BookTitle>
          <BookInfoSection>
            <BookAuthor>{books[0].author}</BookAuthor>
            <BookHash>{books[0].hash.map((x) => `#${x}`)}</BookHash>
          </BookInfoSection>
          <div
            style={{
              display: "flex",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              marginTop: "13px",
              marginBottom: "17px",
            }}
          >
            <div
              style={{
                width: "106px",
                height: "33px",
                backgroundColor: "#F6f1dE",
              }}
            >
              {books[0].percent}%
            </div>
            <div
              style={{
                width: "200px",
                height: "33px",
                backgroundColor: "#D6BD97",
              }}
            ></div>
          </div>
          <div
            style={{
              fontWeight: "600",
              fontStyle: "normal",
              marginBottom: "12px",
            }}
          >
            전체 리뷰
          </div>
          <ReviewContent>
            <div
              style={{
                borderTop: " 1px solid #C3C3C3",
                paddingTop: "7px",
                color: "#868282",
                marginBottom: "15px",
              }}
            >
              {books[0].reviews[0].page}p | {books[0].reviews[0].create_date} |
              수정
            </div>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              {books[0].reviews[0].content}
            </span>
            <ToggleLikeMessage>
              <div>펼치기 ⬇️</div>
              <div style={{ textAlign: "right" }}>👍 0 ✉️ 답글 0</div>
            </ToggleLikeMessage>
          </ReviewContent>
          <ReviewContent>
            <div
              style={{
                borderTop: " 1px solid #C3C3C3",
                paddingTop: "7px",
                color: "#868282",
                marginBottom: "15px",
              }}
            >
              {books[0].reviews[0].page}p | {books[0].reviews[0].create_date} |
              수정
            </div>
            <span style={{ fontSize: "12px", fontWeight: "500" }}>
              {books[0].reviews[0].content}
            </span>
            <ToggleLikeMessage>
              <div>펼치기 ⬇️</div>
              <div style={{ textAlign: "right" }}>👍 0 ✉️ 답글 0</div>
            </ToggleLikeMessage>
          </ReviewContent>
        </BookInfo>
        <img
          src="https://image.aladin.co.kr/product/28258/73/cover500/k212835380_1.jpg"
          style={{
            boxShadow: "8px 5px 10px 3px rgba(0,0,0,0.25)",
            width: "300px",
          }}
        />
      </BookContent>
      <FixedContent>
        <MyResponsiveRadialBar />
      </FixedContent>
    </>
  );
}

export default MyLibrary;
