import "../styles/components/book_cover.css";
export const BookCover = ({ cover, size, onClick }) => {
    const sizeClasses = {
        xs: "--xs",
        sm: "--sm",
        md: "--md",
        lg: ""
    }; 
    return (
        <div className="book_cover">
            <img className={'book_cover book_cover_item' + sizeClasses[size] + (onClick ? ' book_cover--pointer' : '')} src={ cover } onClick={onClick}/>
        </div>
    );
};