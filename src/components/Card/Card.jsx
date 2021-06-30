import './Card.css';

export const Card = ({item}) => (
    <div className="users">
        <div className="card">
            <div className="image-wrapper">
                {/*<img className="image" src=""/>*/}
                <h3 className="image-placeholder" style={{background: '#' + Math.floor(Math.random() * 16777215).toString(16)}}>
                    {item.name.first[0]}
                    {item.name.last[0]}
                </h3>
            </div>
            <h1 className="name">
                {item.name.first}
                {' '}
                {item.name.last}
            </h1>
            <p className="title">
                {item.location.country}
            </p>
            <p>
                Email {item.email}
            </p>
        </div>
    </div>
)

