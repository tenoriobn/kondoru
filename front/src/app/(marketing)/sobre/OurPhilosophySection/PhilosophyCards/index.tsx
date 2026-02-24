import philosophyCards from './philosophyCards.json';

export default function PhilosophyCards() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8" role="list">
      {philosophyCards.map(({ id, label, value, backgroundImage }) => (
        <li key={id} className={id === '3' ? 'md:max-lg:col-span-2' : ''}>
          <article
            className="grid items-center justify-center p-4 xs:p-6 md:p-8 h-full rounded-3xl"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3 className="text-white text-2xl text-center font-bold mb-4">{label}</h3>
            <p className="text-white text-xl text-center">{value}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
