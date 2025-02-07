import React, { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            /> */}
            <CoreConcept CORE_CONCEPTS={CORE_CONCEPTS} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              label="Components"
              onSelect={() => handleSelect("components")}
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              label="Jsx"
              onSelect={() => handleSelect("jsx")}
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              label="Props"
              onSelect={() => handleSelect("props")}
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              label="States"
              onSelect={() => handleSelect("state")}
            />
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
