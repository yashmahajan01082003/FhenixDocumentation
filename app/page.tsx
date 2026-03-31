import { docsConfig } from "@/config/docs";

export default function Home() {
  const firstPhase = docsConfig[0];
  const firstItem = firstPhase.items[0];

  const Component = firstItem.component;

  return (
    <div>
      <Component />
    </div>
  );
}