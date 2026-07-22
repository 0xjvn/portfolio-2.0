import Chrome from "../components/Chrome";
import Intro from "../components/Intro";
import Contributions from "../components/Contributions";
import Experience from "../components/Experience";
import Writing from "../components/Writing";
import Colophon from "../components/Colophon";
import { experience } from "../data/site";

export default function BlockchainPage() {
  return (
    <Chrome track="blockchain">
      <Intro />
      <Contributions />
      <Experience index="02" title="Experience" entries={experience} />
      <Writing />
      <Colophon />
    </Chrome>
  );
}
