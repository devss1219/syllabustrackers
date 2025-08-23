// Retrieve stored syllabus data or initialize an empty object
const storedData = JSON.parse(localStorage.getItem("syllabus")) || {};

// Define syllabus structure
   // Syllabus Data
    const syllabus = {
      "Formal Language and Automata Theory": {
        "Module I": [
          "Finite State Systems, Basic Definitions",
          "NDFA and DFA, Equivalence of DFA and NDFA",
          "Finite automata with E-moves",
          "Regular Expressions and Equivalence with Finite Automata",
          "Conversion between RE and FA, Arden’s Theorem",
          "Concept of basic Machine, Properties and limitations of FSM",
          "Moore and Mealy Machines, Equivalence of Moore and Mealy machines"
        ],
        "Module II": [
          "Pumping Lemma for Regular Sets and Applications",
          "Closure properties of regular sets",
          "Myhill-Nerode Theorem and Minimization",
          "Minimization Algorithm",
          "Context free and Context sensitive grammar, Ambiguity",
          "Reduced forms, Removal of useless Symbols and unit production",
          "Chomsky Normal Form (CNF), Griebach Normal Form (GNF)"
        ],
        "Module III": [
          "Pushdown Automata and Acceptance",
          "PDA to CFG and CFG to PDA",
          "Applications of Pushdown Machines",
          "Deterministic and Non-Deterministic Turing Machines",
          "Design of Turing Machine, Halting problem, PCP Problem",
          "Chomsky hierarchies of grammars",
          "Context sensitive languages, unrestricted grammars",
          "Computability, Primitive Recursive Functions"
        ]
      },
      "Database Management Systems": {
        "Module I": [
          "DBMS overview vs File system",
          "Architecture, Data models, Schema and Instances",
          "Data independence, DDL and DML",
          "ER Model, Keys, Constraints",
          "ER to Tables, Extended ER",
          "Relational Model, Integrity constraints",
          "Relational Algebra & Calculus"
        ],
        "Module II": [
          "SQL overview, Data types and literals",
          "SQL commands, Operators",
          "Tables, Views, Indexes",
          "Insert, Update, Delete, Queries & Subqueries",
          "Aggregate functions, Joins, Unions, Intersections, Minus",
          "Cursors, Triggers",
          "Normalization: 1NF, 2NF, 3NF, BCNF",
          "Functional dependencies, Lossless Join",
          "Multivalued and Join dependencies"
        ],
        "Module III": [
          "Transaction system concepts",
          "Testing serializability",
          "Recoverability, Failures and Recovery",
          "Log-based recovery, Checkpoints",
          "Deadlock handling"
        ]
      },
      "Java Programming": {
        "Module I": [
          "History, Evolution, Buzzwords of Java",
          "Byte Code, Class File Format",
          "Class, Object, OOP Concepts",
          "Data Types, Variables, Type Conversion",
          "Operators and Control Statements",
          "Classes, Objects, Methods, Garbage Collection",
          "Inner Classes, Abstract Class & Interfaces",
          "Method Overloading, Recursion"
        ],
        "Module II": [
          "Inheritance, Types and Benefits",
          "Constructors, Overloading & Polymorphism",
          "Packages, CLASSPATH",
          "Exception Handling: try-catch-finally, throw, throws",
          "Checked vs Unchecked Exceptions",
          "Multithreading: Life-cycle, Priorities, Sync",
          "Array & String Operations"
        ],
        "Module III": [
          "Applet Basics and Parameters",
          "Event Handling in Java",
          "AWT Components, Containers, Layouts",
          "Swing Components and Event Handling",
          "JDBC: Drivers and Database Programming"
        ]
      },
      "Constitution of India": {
        "Module I": [
          "Meaning of Constitution and Constitutionalism",
          "Historical Background of Constituent Assembly",
          "Government of India Act 1935, Independence Act 1947",
          "Enforcement and Salient Features"
        ],
        "Module II": [
          "Preamble, Fundamental Rights & Duties",
          "Directive Principles of State Policy",
          "Parliamentary System, Centre-State Relations",
          "Amendment Procedures",
          "Emergency Provisions: National, President Rule, Financial",
          "Local Self Government"
        ],
        "Module III": [
          "Union Executive and State Executive",
          "Powers of Parliament, Rajya Sabha, Lok Sabha",
          "President, Prime Minister, Council of Ministers",
          "Judiciary – Supreme Court, Judicial Review, PIL, Lokpal",
          "Governor, Chief Minister, State Cabinet, Legislature",
          "High Court and Subordinate Courts"
        ]
      },
      "Discrete Structures": {
        "Module I": [
          "Set Theory: Operations and Proofs",
          "Relations: Properties, Recursive Definitions",
          "Functions: Types, Operations",
          "Mathematical Induction, Proof Methods",
          "Groups, Subgroups, Cyclic Groups, Lagrange's theorem",
          "Rings and Fields Basics"
        ],
        "Module II": [
          "Partial Order Sets, Hasse diagram",
          "Lattices: Properties",
          "Boolean Algebra: Theorems, K-maps, Logic Gates",
          "Propositional Logic: Tautology, Inference",
          "Predicate Logic: Quantifiers and Inference"
        ],
        "Module III": [
          "Trees: Binary, Traversals, BST",
          "Graphs: Terminology, Representations",
          "Multigraphs, Bipartite, Planar, Isomorphism",
          "Euler & Hamiltonian Paths",
          "Graph Coloring",
          "Recurrence Relations"
        ]
      }
    };

// Initialize localStorage with syllabus data if empty
Object.keys(syllabus).forEach(subject => {
    if (!storedData[subject]) storedData[subject] = {};

    Object.keys(syllabus[subject]).forEach(module => {
        if (!storedData[subject][module]) storedData[subject][module] = {};

        syllabus[subject][module].forEach(topic => {
            if (!(topic in storedData[subject][module])) {
                storedData[subject][module][topic] = false;
            }
        });
    });
});

localStorage.setItem("syllabus", JSON.stringify(storedData));

// Save data to localStorage
function saveData() {
    localStorage.setItem("syllabus", JSON.stringify(storedData));
}

// Toggle syllabus visibility
function toggleSyllabus(subject) {
    const subjectDiv = document.getElementById(`subject-${encodeURIComponent(subject)}`);
    if (subjectDiv) {
        subjectDiv.style.display = subjectDiv.style.display === "none" ? "block" : "none";
    }
}

// Toggle module visibility
function toggleModule(subject, module) {
    const moduleDiv = document.getElementById(`module-${encodeURIComponent(subject)}-${encodeURIComponent(module)}`);
    if (moduleDiv) {
        const isVisible = moduleDiv.style.display === "block";
        moduleDiv.style.display = isVisible ? "none" : "block";
        moduleDiv.classList.toggle("open", !isVisible);
    }
}

// Toggle topic completion
function toggleTopic(subject, module, topic) {
    storedData[subject][module][topic] = !storedData[subject][module][topic];
    saveData();
    document.querySelector(`[data-topic='${subject}-${module}-${topic}']`).checked = storedData[subject][module][topic];
}

// Remove all ticks with password authentication
function removeAllTicks(subject, module) {
    const password = prompt("Enter the password to remove all ticks:");
    if (password === "4567") {
        Object.keys(storedData[subject][module]).forEach(topic => {
            storedData[subject][module][topic] = false;
        });
        saveData();
        renderSyllabus();
        alert("All ticks have been removed successfully!");
    } else {
        alert("Incorrect password! Operation canceled.");
    }
}

// Render syllabus structure dynamically
function renderSyllabus() {
    const syllabusDiv = document.getElementById("modules");
    syllabusDiv.innerHTML = "";

    Object.keys(syllabus).forEach(subject => {
        const subjectDiv = document.createElement("div");
        subjectDiv.innerHTML = `<h2 onclick="toggleSyllabus('${subject}')">${subject}</h2>`;

        const subjectContent = document.createElement("div");
        subjectContent.id = `subject-${encodeURIComponent(subject)}`;
        subjectContent.style.display = "none";

        Object.keys(syllabus[subject]).forEach(module => {
            const moduleDiv = document.createElement("div");
            moduleDiv.classList.add("module");
            moduleDiv.innerHTML = `<h3 class="module-header" onclick="toggleModule('${subject}', '${module}')">${module}</h3>`;

            const moduleContent = document.createElement("div");
            moduleContent.id = `module-${encodeURIComponent(subject)}-${encodeURIComponent(module)}`;
            moduleContent.style.display = "none";

            syllabus[subject][module].forEach(topic => {
                const topicDiv = document.createElement("div");
                topicDiv.classList.add("topic-item");
                const isChecked = storedData[subject][module][topic] ? "checked" : "";
                topicDiv.innerHTML = `
                    <input type="checkbox" data-topic="${subject}-${module}-${topic}"
                    onclick="toggleTopic('${subject}', '${module}', '${topic}')" ${isChecked}>
                    ${topic}
                `;
                moduleContent.appendChild(topicDiv);
            });

            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove All Ticks";
            removeButton.onclick = () => removeAllTicks(subject, module);
            moduleContent.appendChild(removeButton);

            moduleDiv.appendChild(moduleContent);
            subjectContent.appendChild(moduleDiv);
        });

        subjectDiv.appendChild(subjectContent);
        syllabusDiv.appendChild(subjectDiv);
    });
}

// Call renderSyllabus to initialize UI
renderSyllabus();

// SEARCH FUNCTIONALITY
function searchTopic() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!query) return;

    let found = false;

    Object.keys(syllabus).forEach(subject => {
        Object.keys(syllabus[subject]).forEach(module => {
            syllabus[subject][module].forEach(topic => {
                if (topic.toLowerCase().includes(query)) {
                    const subjectDiv = document.getElementById(`subject-${encodeURIComponent(subject)}`);
                    const moduleDiv = document.getElementById(`module-${encodeURIComponent(subject)}-${encodeURIComponent(module)}`);

                    // Ensure subject/module are visible
                    if (subjectDiv.style.display === "none") {
                        subjectDiv.style.display = "block";
                    }

                    if (moduleDiv.style.display === "none") {
                        moduleDiv.style.display = "block";
                        moduleDiv.classList.add("open");
                    }

                    // Scroll to and highlight topic
                    const topicElem = document.querySelector(`[data-topic='${subject}-${module}-${topic}']`);
                    if (topicElem) {
                        setTimeout(() => {
                            topicElem.scrollIntoView({ behavior: 'smooth', block: 'center' });

                            // Clear previous highlights
                            document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

                            topicElem.parentElement.classList.add('highlight');
                        }, 100);
                        found = true;
                    }
                }
            });
        });
    });

    if (!found) {
        alert("Topic not found. Please check the spelling.");
    }
}

// ENTER key activates search
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");
    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                searchTopic();
            }
        });
    }
});

