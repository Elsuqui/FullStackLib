export const BookCover = ({ cover, size }) => {
    const sizeClasses = {
        xs: "w-24 h-32",
        sm: "w-32 h-48",
        md: "w-52 h-80",
        lg: ""
    }; 
    return (
        <div className="mx-6 bg-contain">
            <img className={'shadow-xl border-2 ' + sizeClasses[size]} src={ cover } />
        </div>
    );
};