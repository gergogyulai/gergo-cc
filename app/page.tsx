import type { CSSProperties } from "react";
import { other, pinned, type Project } from "@/lib/projects";

// Each line fades in after the one before it, like text being printed.
const line = (i: number) => ({ "--i": i }) as CSSProperties;

function List({ items, from }: { items: Project[]; from: number }) {
  return (
    <ul className="list">
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
  const otherFrom = 3 + pinned.length;

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

      <List items={pinned} from={2} />

      <h2 className="in" style={line(otherFrom - 1)}>
        other things
      </h2>
      <List items={other} from={otherFrom} />

      <footer className="in" style={line(otherFrom + other.length)}>
        <a href="mailto:gergo@gergo.cc">gergo@gergo.cc</a>
        <a href="https://github.com/gergogyulai">github</a>
      </footer>
    </main>
  );
}
