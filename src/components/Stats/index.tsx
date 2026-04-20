type Stats = {
  stats: string;
  data: string;
};

export default function Stats() {
  const stats: Stats[] = [
    {
      stats: "Espera média",
      data: "5min",
    },
    {
      stats: "Disponibilidade",
      data: "24/7",
    },
    {
      stats: "Sustentável",
      data: "100%",
    },
    {
      stats: "Avaliação Média",
      data: "5.0",
    },
  ];

  return (
    <section id="stats" className="flex flex-col">
      <ul className="flex flex-wrap justify-around gap-10 p-10">
        {stats.map((statistic, index) => (
          <li key={index} className="text-center">
            <h3 className="text-secondary font-bold text-3xl">
              {statistic.data}
            </h3>
            <span className="text-text-muted">{statistic.stats}</span>
          </li>
        ))}
      </ul>
      <div className="w-[90%] h-px bg-black/10 self-center rounded-full" />
    </section>
  );
}
