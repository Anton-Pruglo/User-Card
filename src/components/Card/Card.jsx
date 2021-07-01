import './Card.css';

export const Card = ({item}) => {
    const { picture, name, location, email } = item;
    const { first, last } = name;
    const { large } = picture;
    const { country } = location;

    return (
        <div className="users">
            <div className="card">
                <div className="image-wrapper">
                    {large
                        ? <img className="image" alt="" src={large}/>
                        : <h3 className="image-placeholder" style={{background: '#' + Math.floor(Math.random() * 16777215).toString(16)}}>
                            {first[0]}
                            {last[0]}
                        </h3>
                    }
                </div>
                <h1 className="name">
                    {first}
                    {' '}
                    {last}
                </h1>
                <p className="title">
                    {country}
                </p>
                <p>
                    Email {email}
                </p>
            </div>
        </div>
    )
}



