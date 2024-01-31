import React from "react";
import { useMediaQuery } from "react-responsive";
import MyStatisticsChart from "./MyStatisticsChart";

const MyStatistics = () => {
  // ----------- 반응형 웹페이지 구현 -----------
  const isLarge = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isMedium = useMediaQuery({
    query : "(min-width:768px) and (max-width:1024px)"
  });
  const isSmall = useMediaQuery({
    query : "(max-width:768px)"
  });


  // --------------------------------- css 시작 ---------------------------------

  // ----------- 컨텐츠 컨테이너 스타일 -----------
  const containerStyle = {
    // 디자인
    marginBottom: "50px",
  };

  // ----------- 제목 컨테이너 스타일 -----------
  const titleContainerStyle = {
    // 디자인
    marginBottom: "20px",
    height: "60px",

    // 컨텐츠 정렬
    display: "flex",
    alignItems: "center",
  };

  // ----------- 제목 스타일 -----------
  const titleTextStyle = {
    // 디자인
    marginTop: "5px",
  
    // 글자
    fontSize: "32px",
  };

  // ----------- 컨텐츠 컨테이너 스타일 -----------
  const contentsContainerStyle = {
    // 디자인
    padding: "40px",
    borderRadius: "50px",
    background: "#FFFFFF",
  };

  // ----------- 내 정보 컨테이너 스타일 -----------
  const infoContainerStyle = {
    // 컨텐츠 정렬
    display: "flex",
    alignItems: "center",
  };

  // ----------- 서브 제목 스타일 -----------
  const subTitleStyle = {
    // 디자인
    marginTop: "3px",

    // 글자
    fontSize: isSmall ? "26px" : "30px",
  };

  // ----------- 카테고리 글자 스타일 -----------
  const categoryTextStyle = {
    // 디자인
    marginLeft: "15px",

    // 글자
    fontSize: isSmall ? "30px" : "36px",
    color: "#FF595E",
  };

  // ----------- 설명 컨테이너 스타일 -----------
  const descriptionContainerStyle = {
    // 컨텐츠 정렬
    display: "flex",
    flexDirection: isLarge ? "row" : "column",
  }

  // ----------- 설명 첫 번째 컨테이너 스타일 -----------
  const descriptionFirstContainerStyle = {
    // 컨텐츠 정렬
    display: "flex",
    flexDirection: isSmall ? "column" : "row",
  }

  // ----------- 설명 서브 컨테이너 스타일 -----------
  const descriptionSubContainerStyle = {
    // 상속
    ...infoContainerStyle,

    // 디자인
    marginTop: "15px",

    // 글자
    fontSize: "24px",
    color: "#4A4A4A",
  }

  // ----------- 설명 데이터 글자 스타일 -----------
  const descriptionDataStyle = {
    // 디자인
    margin: "0 5px",

    // 글자
    color: "#FF595E",
  }

  // ----------- 쉼표 스타일 -----------
  const restStyle = {
    // 디자인
    marginRight: "5px",
  }

  // ----------- 구분선 스타일 -----------
  const barStyle = {
    // 디자인
    margin: "30px 0",
    height: "3px",
    width: "100%",
    backgroundColor: "#F0F0F0",
  };

  // ----------- 아이템 서브 컨테이너 스타일 -----------
  const itemSubContainerStyle = {
    // 디자인
    width: "100%",
    margin: !isSmall ? "10px 0" : "0",

    // 컨텐츠 정렬
    display: "flex",
    flexDirection: !isSmall ? "row" : "column",
  }

  // ----------- 내 정보 아이템 스타일 -----------
  const infoItemStyle = {
    // 디자인
    padding: isMedium ? "10px 10px" : "10px 20px",
    width: isSmall? "100%" : "50%",
    height: "60px",
    backgroundColor: "#F0F0F0",

    // 컨텐츠 정렬
    display: "flex",
    justifyContent: "space-between", // 항목 균일 간격으로 정렬
    alignItems: "center",
  };

  // ----------- 왼쪽 아이템 스타일 -----------
  const itemLeftStyle = {
    // 상속
    ...infoItemStyle,

    // 디자인
    margin: isSmall ? "10px 0" : "0 20px 0 0",
  };

  // ----------- 오른쪽 아이템 스타일 -----------
  const itemRightStyle = {
    // 상속
    ...infoItemStyle,

    // 디자인
    margin: isSmall ? "10px 0" : "0 0 0 20px",
  };

  // ----------- 카테고리 이름 스타일 -----------
  const categoryNameStyle = {
    // 디자인
    marginTop: "5px",

    // 글자
    fontSize: !isLarge ? "22px" : "24px",
  };

  // ----------- 태그 컨테이너 스타일 -----------
  const tagContainerStyle = {
    display: "flex",
  }

  // ----------- 태그 아이템 스타일 -----------
  const tagItemStyle = {
    // 디자인
    marginLeft: isMedium ? "5px" : "20px",
    padding: "5px 10px 0 10px",
    width: isMedium ? "75px" : "80px",
    borderRadius: "20px",

    // 글자
    fontSize: isLarge ? "20px" : "18px",

    // 컨텐츠 정렬
    display: "flex",
    justifyContent: "center", // 태그 가운데 정렬
  };

  // ----------- 무작위 멘트 컨테이너 스타일 -----------
  const randomContainerStyle = {
    // 상속
    ...containerStyle,

    // 컨텐츠 정렬
    display: "flex",
    justifyContent: "space-between", // 동일 간격으로 정렬
  }

  // ----------- 따옴표 스타일 -----------
  const quotesStyle = {
    // 디자인
    margin: isLarge ? "0 30px" : (isMedium ? "0 15px" : "0 5px"),

    // 글자
    fontSize: isLarge ? "80px" : (isMedium ? "60px" : "30px"),
  }

  // ----------- 멘트 컨테이너 스타일 -----------
  const mentContainerStyle = {
    // 글자
    fontSize: isLarge ? "34px" : (isMedium ? "24px" : "20px"),

    // 컨텐츠 정렬
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }

  // ----------- 멘트 데이터 스타일 -----------
  const mentDataStyle = {
    // 디자인
    margin: !isSmall ? "0 10px" : "0 5px",

    // 글자
    color: "#FF595E",
  }

  // ----------- 차트 컨테이너 스타일 -----------
  const chartContainerStyle = {
    // 상속
    ...contentsContainerStyle,

    // 컨텐츠 정렬
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  // --------------------------------- css 끝 ---------------------------------


  // ----------- 태그 색상 목록 (임시) -----------
  const tagColor = {
    가성비: "#8FD9B6",
    브랜드: "#D395D0",
    소재: "#CDDF5A",
    색감: "#FFA959",
    모양: "#8CB0F6",
    디자인: "#FF9999",
    기능성: "#5EC4DC",
    내구성: "#FFDF38",
  }

  // ----------- 카테고리 아이템 목록 -----------
  const categoryItems = [
    {
      category: '의류',
      가성비: 30,
      브랜드: 20,
      소재: 20,
      색감: 15,
      모양: 15,
    },
    {
      category: '신발',
      가성비: 15,
      브랜드: 5,
      소재: 10,
      색감: 20,
      모양: 50,
    },
    {
      category: '가구',
      가성비: 40,
      브랜드: 30,
      디자인: 20,
      기능성: 10,
      내구성: 0,
    },
    {
      category: '가전',
      가성비: 0,
      브랜드: 10,
      디자인: 20,
      기능성: 30,
      내구성: 40,
    },
  ];
  
  // 배열에서 가장 높은 세 Tag를 찾는 함수
  const findTop3Tags = (obj) => {
    const sortedTags = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const top3Tags = sortedTags.slice(1, 4);

    return top3Tags.map(([key, value]) => ({ key, value }));
  };

  // 각 객체에서 가장 높은 세 값을 찾아 렌더링
  const renderTop3Categories = categoryItems.map((item, index) => {
    if (index % 2 === 0) {
      const top3Left = findTop3Tags(item);
      const top3Right = categoryItems[index + 1] ? findTop3Tags(categoryItems[index + 1]) : null;

      return (
        <div style={itemSubContainerStyle} key={index}>
          <div style={itemLeftStyle}>
            <div style={categoryNameStyle}>{item.category}</div>
            <div style={tagContainerStyle}>
              {top3Left.map((tag, i) => (
                <div
                  style={{
                    ...tagItemStyle,
                    backgroundColor: tagColor[tag.key],
                  }}
                  key={i}
                >{tag.key}</div>
              ))}
            </div>
          </div>
          {top3Right && (
            <div style={itemRightStyle}>
              <div style={categoryNameStyle}>{categoryItems[index + 1].category}</div>
              <div style={tagContainerStyle}>
                {top3Right.map((tag, i) => (
                  <div
                    style={{
                      ...tagItemStyle,
                      backgroundColor: tagColor[tag.key],
                    }}
                    key={i}
                  >{tag.key}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }
    return null; // 홀수 index는 처리하지 않음
  });

  return (
    <>
      {/* ------------- 카테고리 선호도 ------------- */}
      <div style={containerStyle}>
        <div style={titleContainerStyle}>
          <span style={titleTextStyle}>카테고리 선호도</span>
        </div>
        <div style={contentsContainerStyle}>
          <div style={infoContainerStyle}>
            <div style={subTitleStyle}>가장 관심있는 카테고리 :</div>
            <div style={categoryTextStyle}>" 의류 "</div>
          </div>
          <div style={descriptionContainerStyle}>
            <div style={descriptionFirstContainerStyle}>
              <div style={descriptionSubContainerStyle}>
                <div>작성한 투표의</div>
                <div style={descriptionDataStyle}>[40]%</div>
                <div style={restStyle}>,</div>
              </div>
              <div style={descriptionSubContainerStyle}>
                <div>참여한 투표의</div>
                <div style={descriptionDataStyle}>[50]%</div>
                <div>가</div>
              </div>
            </div>
            <div style={descriptionSubContainerStyle}>
              <div style={descriptionDataStyle}>[의류]</div>
              <div>카테고리에 속해있어요!</div>
            </div>
          </div>
          <div style={barStyle}></div>
          <div style={subTitleStyle}>카테고리별 선호 태그 TOP 3</div>
          <div style={{
            ...infoContainerStyle,
            flexDirection: "column"
          }}>
            {renderTop3Categories}
          </div>
        </div>
      </div>

      {/* ------------- 랜덤 선호도 비교 ------------- */}
      <div style={randomContainerStyle}>
        <div style={quotesStyle}>"</div>
        <div style={mentContainerStyle}>
          <div style={infoContainerStyle}>
            <div style={mentDataStyle}>[닉네임]</div>
            <div>님과 같은</div>
            <div style={mentDataStyle}>[20대]</div>
            <div style={mentDataStyle}>[남성]</div>
            <div>의</div>
            <div style={mentDataStyle}>[42%]</div>
            <div>는</div>
          </div>
          <div style={infoContainerStyle}>
            <div style={mentDataStyle}>[카테고리]</div>
            <div>를 고를 때</div>
            <div style={mentDataStyle}>[태그 1]</div>
            <div>을 눈여겨봐요!</div>
          </div>
        </div>
        <div style={quotesStyle}>"</div>
      </div>

      {/* ------------- 태그 선호도 ------------- */}
      <div style={containerStyle}>
        <div style={titleContainerStyle}>
          <span style={titleTextStyle}>태그 선호도</span>
        </div>
        <div style={chartContainerStyle}>
          <MyStatisticsChart />
        </div>
      </div>
    </>
  );
};

export default MyStatistics;
