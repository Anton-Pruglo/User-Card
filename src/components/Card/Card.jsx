import './Card.css';
import { UserCardImage } from './components/UserCardImage';

export const Card = ({ item }) => {
  const { picture, name, location, email } = item;
  const { first, last } = name;
  const { large } = picture;
  const { country } = location;

  return (
    <article className="card">
      <UserCardImage src={large} initials={`${first[0]}${last[0]}`} />
      <h1 className="name">
        {`${first} ${last}`}
      </h1>
      <address className="title">
        {country}
      </address>
      <p>
        Email {email}
      </p>
    </article>
  );
};



