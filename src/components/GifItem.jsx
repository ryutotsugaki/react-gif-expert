export const GifItem = ({title, url, id})=>{
    console.log(title);
    return (
        <div className="card">
            <img src={url} alt={title} title={ title } />
            <p> {title} </p>
        </div>
    );
};