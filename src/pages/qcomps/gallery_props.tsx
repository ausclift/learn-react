interface ProfileProps {
  name: string;
  imageUrl: string;
  altText: string;
  profession: string;
  awards: {
    count: number;
    list: string[];
  };
  discovered: string;
}

function Profile({ name, imageUrl, altText, profession, awards, discovered }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageUrl}
        alt={altText}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>{profession}
        </li>
        <li>
          <b>Awards: {awards.count} </b>
          ({awards.list.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>{discovered}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl="https://i.imgur.com/szV5sdGs.jpg"
        altText="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards={{ count: 4, list: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'] }}
        discovered="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl="https://i.imgur.com/YfeOqp2s.jpg"
        altText="Katsuko Saruhashi"
        profession="geochemist"
        awards={{ count: 2, list: ['Miyake Prize for geochemistry', 'Tanaka Prize'] }}
        discovered="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
