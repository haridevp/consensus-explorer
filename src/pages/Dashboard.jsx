import Hero from '../components/Hero.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Section from '../components/Section.jsx';
import OverviewCard from '../components/OverviewCard.jsx';
import TrilemmaRadar from '../components/TrilemmaRadar.jsx';
import MetricsCards from '../components/MetricsCards.jsx';
import SecurityPanel from '../components/SecurityPanel.jsx';
import BlockchainCards from '../components/BlockchainCards.jsx';
import LayerComparison from '../components/LayerComparison.jsx';
import CompatibilityMatrix from '../components/CompatibilityMatrix.jsx';
import Footer from '../components/Footer.jsx';
import { useAlgorithm } from '../context/AlgorithmContext.jsx';

export default function Dashboard() {
  const { selected } = useAlgorithm();

  return (
    <div className="min-h-screen">
      <Hero />

      <main className="mx-auto flex max-w-7xl gap-6 px-6 pb-16 pt-8 md:flex-row flex-col">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Section eyebrow="Overview" title={`How ${selected.shortName} works`}>
            <OverviewCard />
          </Section>

          <Section
            eyebrow="Trade-offs"
            title="The blockchain trilemma"
            description="No consensus mechanism maximizes all three properties at once — every design is a deliberate trade."
          >
            <TrilemmaRadar />
          </Section>

          <Section eyebrow="Benchmarks" title="Performance metrics">
            <MetricsCards />
          </Section>

          <Section eyebrow="Threat model" title="Security analysis">
            <SecurityPanel />
          </Section>

          <Section
            eyebrow="In production"
            title="Blockchains using this consensus"
            description="Real networks that chose this mechanism, and why it fit their goals."
          >
            <BlockchainCards />
          </Section>

          <Section eyebrow="Architecture" title="Layer classification">
            <LayerComparison />
          </Section>

          <Section
            eyebrow="Cross-reference"
            title="Compatibility matrix"
            description="Hover a cell to see why two chains do or don't share consensus assumptions."
          >
            <CompatibilityMatrix />
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
