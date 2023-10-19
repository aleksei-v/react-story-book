import {forwardRef} from 'react'
import PageIcon from "../icons/PageIcon";

const Page = forwardRef(({number, img, desc}, ref) => {
    return (
        <div className="page" ref={ref}>
            
        <div className="page-content">
            {number === 1 && <h1 className="story-title">История создания</h1>}
            <div className="page-image">{img}</div>    
                <div className="page-text">{desc}</div>  
            </div>
        <div className="page-footer">
                <PageIcon  />
                <p className="page-order">{number}</p>
            </div>   
      </div>
    );
  });

export default Page;