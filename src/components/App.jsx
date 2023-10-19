import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import pages from "../pageInfo";
import YouTubeMelody from "./YouTubeMelody";
import PageCover from "./PageCover";
import Page from "./Page";
import PrevButtonClick from "./PrevButtonClick";
import NextButtonClick from "./NextButtonClick";

export const App = () => {

  const book = useRef();
  const [page, setPage] = useState(0);
  const isBookClose = page === 0;
    
  const nextButtonClick = () => {
    book.current.pageFlip().flipNext();

  };
  const prevButtonClick = () => {
      book.current.pageFlip().flipPrev()
  };
  const onPage = (e) => {
      setPage(e.data);
  };

  return (
    <div className={`book-wrapper ${isBookClose ? 'close' : ''}`}>
      <HTMLFlipBook
        width={350}
        height={500}
        size="stretch"
        minWidth={288}
        maxWidth={433}
        minHeight={428}
        maxHeight={560}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        onChangeOrientation={book.onChangeOrientation}
        onChangeState={book.onChangeState}
        className={`story-book ${isBookClose ? '' : 'active'}`}
        ref={book}
      >
      <PageCover />
        {pages.map((({ id, image, desc }) => {
          return (
            <Page key={id} number={id} desc={desc} img={<img src={image} alt="" />} />
          )
        }))}
      </HTMLFlipBook>
            
      {isBookClose ?
        <>
          <PrevButtonClick instanceType="true" buttonClick={nextButtonClick} />
        </>
        :
        <div className="buttons-click">
          <PrevButtonClick buttonClick={prevButtonClick} />
          <NextButtonClick buttonClick={nextButtonClick} />
        </div>
      }
      <YouTubeMelody />
    </div>
  );
};
