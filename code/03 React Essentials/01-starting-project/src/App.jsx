import React, { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const topics = ["components", "jsx", "props", "state"]; // Array of topics

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
            <CoreConcept CORE_CONCEPTS={CORE_CONCEPTS} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {topics.map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                label={topic.charAt(0).toUpperCase() + topic.slice(1)}
                onSelect={() => handleSelect(topic)}
              />
            ))}
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
