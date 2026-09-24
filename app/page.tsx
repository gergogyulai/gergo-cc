import type { CSSProperties } from "react";
import { projects, type Project } from "@/lib/projects";

// Each line fades in after the one before it, like text being printed.
const line = (i: number) => ({ "--i": i }) as CSSProperties;

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

function List({
  items,
  from,
  className = "",
}: {
  items: Project[];
  from: number;
  className?: string;
}) {
  return (
    <ul className={`list ${className}`}>
      {items.map((p, i) => (
        <li key={p.name} className="in" style={line(from + i)}>
          <a href={p.href}>{p.name}</a>
          <span>{p.note}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const restFrom = 3 + featured.length;

  return (
    <main>
      <header className="in" style={line(0)}>
        <h1>gergo</h1>
        <span className="ipa">/ˈgɛr.gøː/</span>
      </header>

      <p className="in" style={line(1)}>
        I do some open-source work in my free time. Work mainly centered around
        tools and datahoarding. I also publish other things.
      </p>

      <List items={featured} from={2} className="featured" />

      <h2 className="in" style={line(restFrom - 1)}>
        other things
      </h2>
      <List items={rest} from={restFrom} />

      <footer className="in" style={line(restFrom + rest.length)}>
        <a href="mailto:me@gergo.cc">me@gergo.cc</a>
        <a href="https://github.com/gergogyulai">github</a>
      </footer>
    </main>
  );
}
