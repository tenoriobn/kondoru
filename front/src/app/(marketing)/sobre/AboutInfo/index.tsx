import aboutInfo from './aboutInfo.json';

export default function AboutInfo() {
  return (
    <section aria-labelledby="about-info-title" className="group">
      <h2 id="about-info-title" className="sr-only">
        Informações sobre a KondoRu
      </h2>

      <ul className="group grid grid-cols-1 gap-y-4 md:grid-cols-2 md:items-center md:justify-center md:gap-y-7 6xl:grid-cols-4">
        {aboutInfo.map(({ id, label, value }) => {
          return (
            <li
              key={id}
              className="
              grid place-items-center gap-1 text-white bg-slate-40 
              transition-colors duration-300 ease-in-out
              md:border-r border-slate-14 py-4 px-6 
              rounded-12 md:rounded-none
              md:max-6xl:odd:rounded-l-12 md:max-6xl:even:rounded-r-12
              6xl:first:rounded-l-12 6xl:last:rounded-r-12
            "
            >
              <span className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                {label}
              </span>

              <span className="text-xl">{value}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
