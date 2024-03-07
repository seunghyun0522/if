import HTMLFlipBook from "react-pageflip";
import React, { useState } from "react";
import "./App.css";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="cover" ref={ref} data-density="hard">
      <div>
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <h1>Page Header</h1>
      <p>{props.children}</p>
      <p>{props.number}</p>
    </div>
  );
});

function MyAlbum(props) {
  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("입력한 것 넣을수도 있음");
  const printText = () => {
    setText(inputText);
    setInputElement("");
  };
  let book = [
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192300818.jpg",
      content: `2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다. ‘마흔’, ‘오십’, ‘서른’ 등 연령을 키워드로`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198517425.jpg",
      content: `세계적인 베스트셀러 《돈의 심리학》의 저자 모건 하우절이 3년 만에 세상에 내놓은 신작.‘절대 변하지 않는 것들에 대한 23가지 이야기’를 전한다. 출간하자마자 아마존과 뉴욕타임스 베스트셀러 자리에 오르며 아마존 독자들과 오피니언 리더들의 극찬을 받았다.
      이번 책은 돈과 투자 영역은 물론이고, 인간의 본성과 세상의 이치에 관한 이야기를 두루 다루어 한층 더 다층적이고 복합적인 메시지를 담아냈다는 평가를 받는다. 모건 하우절은 사람들은 무엇이 변할 것인지에 대해 늘 관심을 갖지만, 미래에 대비하기 위해서는 오히려 과거에도 지금도 미래에도 변함이 없는‘불변의 법칙’에 대해 알아야 한다고 강조한다. `,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198621504.jpg",
      content: `“나의 결혼식이 열렸어야 했던 날, 형의 장례식이 거행되었다. 그해 가을, 나는 다니던 《뉴요커》를 그만두고 메트로폴리탄 미술관의 경비원으로 지원했다. 그렇게 한동안은 고요하게 서 있고 싶었다`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788901276533.jpg",
      content: `★★★ 세계에서 가장 많이 읽힌 자녀교육 베스트셀러 세계적 가족 심리학자, 가족치료의 1인자 버지니아 사티어의 역작이자 누적 부수 100만 부를 돌파한 책 『아이는 무엇으로 자라는가(`,
    },
    {
      bgImg:
        "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191777628.jpg",
      content: `양귀자 소설의 힘을 보여준 베스트셀러 『모순』. 1998년에 초판이 출간된 이후 132쇄를 찍으며 여전히 많은 사랑을 받고 있는 작품을, 오래도록 소장할 수 있는 양장본으로 새롭게 선보인다. `,
    },
  ];

  return (
    <body>
      <div className="bookSection">
        <HTMLFlipBook
          width={550}
          height={650}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          showCover={true}
          flippingTime={1000}
          style={{ margin: "0 auto" }}
          maxShadowOpacity={0.5}
          className="album-web"
        >
          <PageCover>책 표지</PageCover>
          <PageCover>목차가 들어갈 곳</PageCover>

          <Page number="1">
            <hr></hr>
            <p contentEditable="true">
              In my younger and more vulnerable years my father gave me some
              advice that I’ve been turning over in my mind ever since.
            </p>
          </Page>
          <Page number="2">
            <hr></hr>
            <p>{text}</p>
            “Whenever you feel like criticizing any one,” he told me, “just
            remember that all the people in this world haven’t had the
            advantages that you’ve had.”
          </Page>
          <Page number="3">
            <hr></hr>
            He didn’t say any more, but we’ve always been unusually
            communicative in a reserved way, and I understood that he meant a
            great deal more than that. In consequence, I’m inclined to reserve
            all judgments, a habit that has opened up many curious natures to me
            and also made me the victim of not a few veteran bores. The abnormal
            mind is quick to detect and attach itself to this quality when it
            appears in a normal person, and so it came about that in college I
            was unjustly accused of being a politician, because I was privy to
            the secret griefs of wild, unknown men. Most of the confidences were
            unsought — frequently I have feigned sleep, preoccupation, or a
            hostile levity when I realized by some unmistakable sign that an
            intimate revelation was quivering on the horizon; for the intimate
            revelations of young men, or at least the terms in which they
            express them, are usually plagiaristic and marred by obvious
            suppressions. Reserving judgments is a matter of infinite hope. I am
            still a little afraid of missing something if I forget that, as my
            father snobbishly suggested, and I snobbishly repeat, a sense of the
            fundamental decencies is parcelled out unequally at birth.
          </Page>
          <Page number="4">
            <hr></hr>
          </Page>
          <PageCover></PageCover>
          <PageCover>끄읕</PageCover>
        </HTMLFlipBook>
        <br></br>
        <br></br>
        <div className="formContainer">
          <input
            class="form-control"
            value={inputText}
            onChange={(e) => setInputElement(e.target.value)}
            type="text"
            placeholder="입력하면 넣을수 있음"
          />
          <button class="btn" onClick={printText}>
            버튼
          </button>
        </div>
      </div>
    </body>
  );
}

export default MyAlbum;
