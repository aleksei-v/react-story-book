import {forwardRef} from 'react'

const PageCover = forwardRef((_, ref) => {
    return (
        <div className="flip-book">
            <div className="page page-cover" ref={ref} data-density="hard">
                <div className="page-content">
                    <div className="page-cover__image" width="471" height="589" />
                </div>
            </div>
        </div>
    );
});

export default PageCover;