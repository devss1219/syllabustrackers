// Retrieve stored syllabus data or initialize an empty object
const storedData = JSON.parse(localStorage.getItem("syllabus")) || {};

// Define syllabus structure
const syllabus = {
    "Industrial Sociology": {
        "Module I: Industrial Sociology": [
            "Nature and Scope of Industrial Sociology",
            "Development of Industrial Sociology",
            "Rise and Development of Industry",
            "Early Industrialism Types of Productive Systems",
            "The Manorial or Feudal system",
            "The Guild System",
            "The Domestic or Putting-out System",
            "The Factory System",
            "Characteristics of the Factory System"
        ],
        "Module II: Industrialization": [
            "Causes and Consequences of Industrialization",
            "Industrialization in India",
            "Industrial Policy Resolutions – 1956"
        ],
        "Module III: Contemporary Issues": [
            "Grievances and Grievance Handling Procedure",
            "Industrial Disputes: Causes, Strikes & Lockouts",
            "Industrial Relations Machinery: Bi-partite & Tri-partite Agreement",
            "Labour Courts & Industrial Tribunals",
            "Code of Discipline",
            "Standing Order"
        ]
    },
    "Computer Organization & Architecture": {
        "Module I: Introduction & Number Representation": [
            "Digital Computer Block Diagram",
            "Functional Units and Their Interconnections",
            "Buses, Types of Buses, and Bus Arbitration",
            "Fixed Point Integer Representation",
            "Fixed Point Arithmetic Operations in 2’s Complement Form (Addition, Subtraction)",
            "Booth's Multiplication Algorithm",
            "Array Multiplier and Division Techniques",
            "Floating Point Number Representation",
            "IEEE Standard for Floating Point Representation",
            "Floating Point Arithmetic Operations"
        ],
        "Module II: CPU & Control Unit": [
            "Register, Bus, and Memory Transfer",
            "Register Transfer Language",
            "Arithmetic, Logic, and Shift Micro Operations",
            "Arithmetic and Logic Unit",
            "Processor Organization: Single Accumulator, General Register, and Stack Organization",
            "Addressing Modes, Instruction Types, Instruction Formats, Instruction Cycle",
            "Control Unit: Hardwired and Microprogrammed Control",
            "Concept of Horizontal and Vertical Microprogramming"
        ],
        "Module III: Memory, I/O, and Pipelining": [
            "Memory: Basic Concept and Hierarchy",
            "Semiconductor RAM Memories, ROM Memories",
            "Cache Memory, Address Mapping Techniques, and Replacement",
            "Auxiliary Memories, Virtual Memory",
            "Input / Output: Peripheral Devices, I/O Interface, I/O Ports",
            "Interrupts, Types of Interrupts",
            "Modes of Data Transfer: Programmed I/O, Interrupt Initiated I/O, and Direct Memory Access",
            "Pipelining: Basic Concepts, Throughput, and Speedup"
        ]
    },
    "Design and Analysis of Algorithms": {
        "Module I: Introduction & Sorting": [
            "Algorithms, Analyzing Algorithms, Complexity of Algorithms",
            "Growth of Functions - Master Theorem",
            "Sorting - Insertion Sort, Selection Sort, Shell Sort",
            "Comparison of Sorting Algorithms, Sorting in Linear Time",
            "Divide and Conquer: Merge Sort, Quick Sort, Heap Sort",
            "Strassen’s Matrix Multiplication Algorithm",
            "Advanced Data Structures: B-Trees, Red-Black Trees, Data Structure for Disjoint Sets"
        ],
        "Module II: Graphs, Greedy Method & Dynamic Programming": [
            "Graphs: Minimum Spanning Trees - Prim’s and Kruskal’s Algorithms",
            "Single Source Shortest Paths - Dijkstra’s and Bellman-Ford Algorithms",
            "Multistage Graphs, All Pairs Shortest Paths - Warshall’s and Floyd’s Algorithms",
            "The Greedy Method: Optimal Storage on Tapes, Fractional Knapsack Problem",
            "Job Sequencing with Deadlines",
            "Dynamic Programming: Introduction, 0/1 Knapsack, Matrix Chain Multiplication",
            "Longest Common Subsequence"
        ],
        "Module III: Backtracking, Branch & Bound, and NP Completeness": [
            "Backtracking: Introduction, 8 Queen’s Problem, Graph Coloring",
            "Hamiltonian Cycles, Subset Sum Problem",
            "Branch and Bound: Introduction, Traveling Salesperson Problem",
            "Euclid’s Algorithm for GCD",
            "String Matching: Naïve String Matching, Rabin-Karp, Knuth-Morris-Pratt Algorithm",
            "NP Completeness: Introduction to P, NP Hard and NP Completeness",
            "NP Complete Problems: Clique Problem, Vertex Cover Problem, Traveling Salesman Problem"
        ]
    },
    "Operating Systems": {
        "Module I: Introduction & Process Management": [
            "Concept of Operating Systems, Generations of Operating Systems",
            "Types of Operating Systems, OS Services, System Calls",
            "Structure of an OS - Layered, Monolithic, Microkernel Operating Systems",
            "Concept of Virtual Machine",
            "Case Study on UNIX and Windows Operating System",
            "Processes: Definition, Process Relationship, Different States of a Process",
            "Process State Transitions, Process Control Block (PCB), Context Switching",
            "Thread: Definition, Various States, Benefits of Threads, Types of Threads, Concept of Multithreading",
            "Process Scheduling: Foundation and Scheduling Objectives, Types of Schedulers",
            "Scheduling Criteria: CPU Utilization, Throughput, Turnaround Time, Waiting Time, Response Time",
            "Scheduling Algorithms: Preemptive and Non-preemptive (FCFS, SJF, RR), Multiprocessor Scheduling"
        ],
        "Module II: Inter-process Communication & Deadlocks": [
            "Inter-process Communication: Critical Section, Race Conditions, Mutual Exclusion",
            "Hardware Solution, Dekker’s Solution, Peterson’s Solution",
            "The Producer/Consumer Problem, Semaphores, Event Counters, Monitors, Message Passing",
            "Classical IPC Problems: Reader’s & Writer Problem, Dining Philosopher Problem",
            "Deadlocks: Definition, Necessary and Sufficient Conditions for Deadlock",
            "Deadlock Prevention, Deadlock Avoidance: Banker’s Algorithm",
            "Deadlock Detection and Recovery"
        ],
        "Module III: Memory Management, File & Disk Management": [
            "Memory Management: Logical and Physical Address Map, Contiguous Memory Allocation",
            "Internal and External Fragmentation, Compaction, Paging, Demand Paging",
            "Page Replacement Algorithms: FIFO, LRU, NRU, Optimal, Second Chance",
            "Virtual Memory, Locality of Reference",
            "I/O Hardware and Software, Interrupt Handlers, Device Drivers",
            "File Management: File Types, Access Methods, Directory Structure, Allocation Methods",
            "Disk Management: Disk Scheduling - FCFS, SSTF, SCAN, C-SCAN, Reliability, Formatting"
        ]
    },
    "Software Engineering": {
        "Module I: Introduction & SDLC": [
            "Introduction to Software Engineering, Software Components, Software Characteristics",
            "Software Crisis, Software Engineering Processes, Software Quality Attributes",
            "Software Development Life Cycle (SDLC) Models: Waterfall, Prototype, Spiral, Evolutionary, Iterative",
            "Software Requirement Specifications (SRS), Requirement Engineering Process",
            "Elicitation, Analysis, Documentation, Review, Feasibility Study",
            "Information Modeling, Data Flow Diagrams, Entity Relationship Diagrams",
            "Decision Tables, IEEE Standards for SRS",
            "Software Quality Assurance (SQA): Verification and Validation, SQA Plans",
            "Software Quality Frameworks, ISO 9000 Models, SEI-CMM Model"
        ],
        "Module II: Design, Metrics & Testing": [
            "Basic Concept of Software Design, Architectural & Low-Level Design",
            "Modularization, Design Structure Charts, Pseudo Codes, Flow Charts",
            "Coupling and Cohesion Measures, Function-Oriented & Object-Oriented Design",
            "Top-Down and Bottom-Up Design, Software Measurement and Metrics",
            "Size-Oriented Measures: Halstead’s Software Science, Function Point (FP) Measures",
            "Cyclomatic Complexity Measures, Control Flow Graphs",
            "Software Testing: Objectives, Unit Testing, Integration Testing, Acceptance Testing",
            "Regression Testing, Functional & Performance Testing, White Box & Black Box Testing",
            "Alpha and Beta Testing, Static Testing: Peer Reviews, Walkthrough, Code Inspection"
        ],
        "Module III: Maintenance & Project Management": [
            "Software Maintenance: Need, Categories (Preventive, Corrective, Perfective), Cost of Maintenance",
            "Software Re-Engineering, Reverse Engineering",
            "Software Configuration Management, Change Control, Version Control",
            "CASE Tools Overview, Cost Estimation, Effort Estimation, Scheduling",
            "COCOMO, Resource Allocation Models, Risk Analysis and Management"
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
