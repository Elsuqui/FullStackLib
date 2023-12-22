export const InputText = ({ id, name, label, value }) => {
    return (
        <div className="m-4">
            <label htmlFor={ name }>{ label }</label>
            <input id={ id } name={ name } type="text" className="border-2 border-black rounded-md mx-2 p-1"/>
        </div>
    );   
} 