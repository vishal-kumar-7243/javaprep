import type { StaticImageData } from 'next/image';

export interface Topic {
  id: string;
  name: string;
  details: string; // This will be the input for AI summarization
  codeExample?: string;
  outputExample?: string;
  image?: string; // URL for placeholder image
  imageHint?: string;
}

export interface Unit {
  id: string;
  title: string;
  longTitle: string;
  topics: Topic[];
}

const syllabus: Unit[] = [
  {
    id: "unit-1",
    title: "Unit 1",
    longTitle: "Object oriented thinking and Java Basics",
    topics: [
      { id: "oop-paradigm", name: "Need for OOP paradigm", details: "Discuss the reasons for adopting the Object-Oriented Programming paradigm, its core principles, and its advantages in modern software development, particularly in managing complexity." },
      { id: "oop-concepts", name: "Summary of OOP concepts", details: "Provide a concise summary of fundamental Object-Oriented Programming concepts such as classes, objects, encapsulation, inheritance, and polymorphism." },
      { id: "coping-complexity", name: "Coping with complexity", details: "Explain how Object-Oriented Programming helps in managing and reducing complexity in large-scale software projects through its various mechanisms." },
      { id: "abstraction-mechanisms", name: "Abstraction mechanisms", details: "Describe the different abstraction mechanisms available in OOP and how they contribute to simplifying complex systems by hiding implementation details." },
      { id: "world-view", name: "A way of viewing world – Agents, responsibility, messages, methods", details: "Illustrate the OOP perspective of viewing the world in terms of agents (objects), their responsibilities, the messages they exchange, and the methods they execute." },
      { id: "history-java", name: "History of Java", details: "Briefly outline the history of the Java programming language, its origins, and key milestones in its evolution." },
      { id: "java-buzzwords", name: "Java buzzwords", details: "List and explain the key 'buzzwords' associated with Java (e.g., platform-independent, robust, secure) and what they signify." },
      { id: "data-types", name: "Data types", details: "Describe the primitive and reference data types available in Java, including their sizes and default values." },
      { id: "variables", name: "Variables", details: "Explain the concept of variables in Java, including declaration, initialization, and naming conventions." },
      { id: "scope-lifetime", name: "Scope and lifetime of variables", details: "Discuss the scope (class, instance, local) and lifetime of variables in Java programs." },
      { id: "arrays", name: "Arrays", details: "Explain how to declare, initialize, and use one-dimensional and multi-dimensional arrays in Java." },
      { id: "operators", name: "Operators", details: "Cover the various types of operators in Java, including arithmetic, relational, logical, bitwise, and assignment operators, along with operator precedence." },
      { id: "expressions", name: "Expressions", details: "Define expressions in Java and explain how they are formed using variables, operators, and method calls." },
      { id: "control-statements", name: "Control statements", details: "Describe Java's control flow statements, including selection (if, switch) and iteration (for, while, do-while) statements." },
      { id: "type-conversion", name: "Type conversion and casting", details: "Explain implicit type conversion (widening) and explicit type casting (narrowing) in Java with examples." },
      { id: "simple-java-program", name: "Simple Java program", details: "Provide and explain the structure of a basic Java program, including the main method and how to compile and run it." },
      { id: "concepts-classes-objects", name: "Concepts of classes, objects", details: "Elaborate on the core OOP concepts of classes as blueprints and objects as instances of those classes." },
      { id: "constructors", name: "Constructors", details: "Explain the purpose of constructors in Java, how they are defined, and their role in object initialization. Include default and parameterized constructors." },
      { id: "methods", name: "Methods", details: "Describe how to define and call methods in Java, including method signatures, return types, and parameters." },
      { id: "access-control", name: "Access control", details: "Explain Java's access modifiers (public, private, protected, default) and their impact on the visibility of classes, members, and methods." },
      { id: "this-keyword", name: "This keyword", details: "Illustrate the use of the 'this' keyword in Java to refer to the current instance of a class." },
      { id: "garbage-collection", name: "Garbage collection", details: "Briefly explain the concept of automatic garbage collection in Java and its benefits." },
      { id: "overloading", name: "Overloading methods and constructors", details: "Explain method and constructor overloading in Java, allowing multiple methods/constructors with the same name but different parameters." },
      { id: "method-binding", name: "Method binding", details: "Discuss static (compile-time) and dynamic (runtime) method binding in Java, particularly in the context of inheritance and polymorphism." },
      { id: "inheritance-basics", name: "Inheritance", details: "Introduce the concept of inheritance in Java (extends keyword), explaining how a subclass inherits properties and methods from a superclass." },
      { id: "overriding-exceptions", name: "Overriding and exceptions", details: "Explain method overriding in inheritance and rules related to exceptions when overriding methods." },
      { id: "parameter-passing", name: "Parameter passing", details: "Describe how parameters are passed in Java (pass-by-value for primitives, pass-by-value of reference for objects)." },
      { id: "recursion", name: "Recursion", details: "Explain the concept of recursion and provide examples of recursive methods in Java." },
      { id: "nested-inner-classes", name: "Nested and inner classes", details: "Describe nested classes and inner classes in Java, their types, and use cases." },
      { id: "string-class", name: "Exploring string class", details: "Explore the String class in Java, its immutability, and common methods for string manipulation." },
    ],
  },
  {
    id: "unit-2",
    title: "Unit 2",
    longTitle: "Inheritance, Packages and Interfaces",
    topics: [
      { id: "hierarchical-abstractions", name: "Hierarchical abstractions", details: "Discuss how inheritance supports hierarchical abstractions in software design, allowing for the creation of class hierarchies that model real-world relationships." },
      { id: "base-class-object", name: "Base class object", details: "Explain the role of a base class (superclass) object and how its members are accessible to subclasses." },
      { id: "subclass-subtype", name: "Subclass, subtype, substitutability", details: "Define subclass and subtype, and explain the principle of substitutability (Liskov Substitution Principle) in the context of inheritance." },
      { id: "forms-inheritance", name: "Forms of inheritance", details: "Describe various forms of inheritance, including specialization, specification, construction, extension, limitation, and combination, with examples." },
      { id: "benefits-inheritance", name: "Benefits of inheritance", details: "Outline the advantages of using inheritance, such as code reuse, polymorphism, and extensibility." },
      { id: "costs-inheritance", name: "Costs of inheritance", details: "Discuss potential drawbacks or costs associated with inheritance, such as increased coupling and complexity." },
      { id: "member-access-rules", name: "Member access rules", details: "Revisit member access rules (public, protected, private, default) in the context of inheritance and how they affect visibility in subclasses." },
      { id: "super-uses", name: "Super uses", details: "Explain the uses of the 'super' keyword to access superclass members (fields, methods) and constructors from a subclass." },
      { id: "final-with-inheritance", name: "Using final with inheritance", details: "Describe how the 'final' keyword can be used with classes, methods, and variables in the context of inheritance to prevent overriding or extension." },
      { id: "polymorphism-overriding", name: "Polymorphism- method overriding", details: "Elaborate on polymorphism achieved through method overriding, where a subclass provides a specific implementation for a method defined in its superclass." },
      { id: "abstract-classes", name: "Abstract classes", details: "Explain abstract classes and abstract methods in Java, their purpose, and how they are used to define common interfaces for subclasses." },
      { id: "object-class", name: "The Object class", details: "Discuss the Object class in Java as the root of all class hierarchies and its common methods (e.g., toString(), equals(), hashCode())." },
      { id: "defining-packages", name: "Defining, Creating and Accessing a Package", details: "Explain how to define, create, and access packages in Java to organize related classes and interfaces." },
      { id: "understanding-classpath", name: "Understanding CLASSPATH", details: "Describe the purpose and usage of the CLASSPATH environment variable in locating Java classes and packages." },
      { id: "importing-packages", name: "Importing packages", details: "Show how to import classes and interfaces from packages using the 'import' statement." },
      { id: "classes-vs-interfaces", name: "Differences between classes and interfaces", details: "Highlight the key differences between classes and interfaces in Java, including their purpose and capabilities." },
      { id: "defining-interface", name: "Defining an interface", details: "Explain how to define an interface in Java, including method signatures and constant declarations." },
      { id: "implementing-interface", name: "Implementing interface", details: "Show how classes can implement interfaces using the 'implements' keyword and provide implementations for interface methods." },
      { id: "applying-interfaces", name: "Applying interfaces", details: "Discuss various use cases and benefits of applying interfaces in Java design, such as achieving multiple inheritance of type." },
      { id: "variables-in-interface", name: "Variables in interface", details: "Explain that variables declared in an interface are implicitly public, static, and final." },
      { id: "extending-interfaces", name: "Extending interfaces", details: "Describe how an interface can extend other interfaces, allowing for inheritance of method signatures." },
      { id: "exploring-java-io", name: "Exploring java.io", details: "Provide an overview of the java.io package, covering its main classes for input and output operations, such as streams and readers/writers." },
    ],
  },
  {
    id: "unit-3",
    title: "Unit 3",
    longTitle: "Exception handling and Multithreading",
    topics: [
      { id: "exception-handling-concepts", name: "Concepts of exception handling", details: "Introduce the fundamental concepts of exception handling in Java, including what exceptions are and why they are important for robust programming." },
      { id: "benefits-exception-handling", name: "Benefits of exception handling", details: "Discuss the advantages of using Java's exception handling mechanism, such as separating error-handling code from normal program logic." },
      { id: "termination-resumptive-models", name: "Termination or resumptive models", details: "Explain the difference between termination and resumptive models of exception handling, noting that Java primarily uses the termination model." },
      { id: "exception-hierarchy", name: "Exception hierarchy", details: "Describe the hierarchy of exception classes in Java, rooted at the Throwable class, and differentiate between Error, Exception, and RuntimeException." },
      { id: "try-catch-throw-throws-finally", name: "Usage of try, catch, throw, throws and finally", details: "Explain the syntax and usage of try, catch, throw, throws, and finally keywords in Java for handling exceptions." },
      { id: "built-in-exceptions", name: "Built in exceptions", details: "List and describe common built-in exceptions in Java, such as NullPointerException, ArrayIndexOutOfBoundsException, and IOException." },
      { id: "creating-own-exceptions", name: "Creating own exception subclasses", details: "Show how to create custom exception classes by extending existing exception classes (e.g., Exception or RuntimeException)." },
      { id: "string-handling", name: "String handling", details: "Revisit string handling in Java, focusing on common operations and methods provided by the String, StringBuilder, and StringBuffer classes." },
      { id: "exploring-java-util", name: "Exploring java.util", details: "Provide an overview of the java.util package, highlighting key utility classes and interfaces such as Collections, Date, Calendar, and data structures like List, Set, Map." },
      { id: "multithreading-vs-multitasking", name: "Differences between multithreading and multitasking", details: "Explain the concepts of multithreading and multitasking, and differentiate between them." },
      { id: "thread-life-cycle", name: "Thread life cycle", details: "Describe the different states in a thread's life cycle: new, runnable, running, blocked/waiting, and terminated." },
      { id: "creating-threads", name: "Creating threads", details: "Explain the two ways to create threads in Java: by extending the Thread class or by implementing the Runnable interface." },
      { id: "thread-priorities", name: "Thread priorities", details: "Discuss thread priorities in Java, how to set them, and how they influence thread scheduling (though not guaranteed)." },
      { id: "synchronizing-threads", name: "Synchronizing threads", details: "Explain the need for thread synchronization to prevent race conditions and data corruption in multithreaded applications, using synchronized methods and blocks." },
      { id: "inter-thread-communication", name: "Inter thread communication", details: "Describe mechanisms for inter-thread communication in Java, such as wait(), notify(), and notifyAll()." },
      { id: "thread-groups", name: "Thread groups", details: "Briefly explain the concept of thread groups in Java, though they are less commonly used now." },
      { id: "daemon-threads", name: "Daemon threads", details: "Explain what daemon threads are, their purpose, and how they differ from user threads." },
      { id: "enumerations", name: "Enumerations", details: "Introduce enumerations (enums) in Java, how to define them, and their benefits over using constants." },
      { id: "autoboxing", name: "Autoboxing", details: "Explain autoboxing and unboxing in Java, the automatic conversion between primitive types and their corresponding wrapper classes." },
      { id: "annotations", name: "Annotations", details: "Describe annotations in Java, their purpose (metadata), and common built-in annotations (e.g., @Override, @Deprecated)." },
      { id: "generics", name: "Generics", details: "Introduce generics in Java, explaining how they provide type safety and enable writing more flexible and reusable code, especially with collections." },
    ],
  },
  {
    id: "unit-4",
    title: "Unit 4",
    longTitle: "Event Handling",
    topics: [
      { id: "events", name: "Events", details: "Define what events are in the context of GUI programming, such as mouse clicks, key presses, or window resizing." },
      { id: "event-sources", name: "Event sources", details: "Explain event sources as the UI components that generate events (e.g., a button generating an ActionEvent)." },
      { id: "event-classes", name: "Event classes", details: "Describe event classes in Java AWT (e.g., ActionEvent, MouseEvent, KeyEvent) that encapsulate information about an event." },
      { id: "event-listeners", name: "Event Listeners", details: "Explain event listeners as interfaces that define methods to be called when specific events occur (e.g., ActionListener, MouseListener)." },
      { id: "delegation-event-model", name: "Delegation event model", details: "Describe the delegation event model in Java AWT, where event sources delegate the handling of events to registered listeners." },
      { id: "handling-mouse-keyboard-events", name: "Handling mouse and keyboard events", details: "Provide examples of how to handle mouse events (clicks, movement) and keyboard events (key presses, releases) using appropriate listeners." },
      { id: "adapter-classes", name: "Adapter classes", details: "Explain adapter classes in AWT (e.g., MouseAdapter, KeyAdapter) and how they provide empty implementations of listener interfaces, simplifying event handling." },
      { id: "awt-class-hierarchy", name: "The AWT class hierarchy", details: "Provide an overview of the AWT (Abstract Window Toolkit) class hierarchy, including components, containers, and helper classes." },
      { id: "ui-components-labels", name: "User interface components- labels", details: "Describe the Label component in AWT for displaying static text." },
      { id: "ui-components-button", name: "User interface components- button", details: "Describe the Button component in AWT for triggering actions." },
      { id: "ui-components-canvas", name: "User interface components- canvas", details: "Explain the Canvas component in AWT, a blank rectangular area for drawing custom graphics." },
      { id: "ui-components-scrollbars", name: "User interface components- scrollbars", details: "Describe Scrollbar components in AWT for enabling scrolling of content." },
      { id: "ui-components-textcomponents", name: "User interface components- text components", details: "Explain AWT text components like TextField (single-line input) and TextArea (multi-line input)." },
      { id: "ui-components-checkbox", name: "User interface components- check box", details: "Describe Checkbox components in AWT for selecting or deselecting options." },
      { id: "ui-components-checkboxgroups", name: "User interface components- checkbox groups", details: "Explain CheckboxGroup in AWT for creating radio button behavior with checkboxes." },
      { id: "ui-components-choices", name: "User interface components- choices", details: "Describe the Choice component in AWT for creating drop-down lists." },
      { id: "ui-components-lists", name: "User interface components- lists", details: "Explain the List component in AWT for displaying a list of items from which users can select one or more." },
      { id: "ui-components-panels", name: "User interface components- panels", details: "Describe Panel as a generic container in AWT for grouping other components." },
      { id: "ui-components-scrollpane", name: "User interface components- scrollpane", details: "Explain ScrollPane in AWT, a container that provides automatic scrolling for a single child component." },
      { id: "ui-components-dialogs", name: "User interface components- dialogs", details: "Describe Dialogs in AWT for creating secondary windows for user interaction or information display." },
      { id: "ui-components-menubar", name: "User interface components- menubar", details: "Explain MenuBar, Menu, and MenuItem components in AWT for creating application menus." },
      { id: "ui-components-graphics", name: "User interface components- graphics", details: "Introduce the Graphics class in AWT and how it's used for drawing shapes, text, and images on components like Canvas or Panel." },
      { id: "layout-manager", name: "Layout manager", details: "Explain the concept of layout managers in AWT for controlling the size and position of components within a container." },
      { id: "layout-manager-types", name: "Layout manager types – border, grid, flow, card and grid bag", details: "Describe common AWT layout managers: BorderLayout, GridLayout, FlowLayout, CardLayout, and GridBagLayout, with their characteristics and use cases." },
    ],
  },
  {
    id: "unit-5",
    title: "Unit 5",
    longTitle: "Applets and Swing",
    topics: [
      { id: "concepts-applets", name: "Concepts of Applets", details: "Introduce Java Applets, their purpose as small applications embedded in web pages, and their historical context." },
      { id: "applets-vs-applications", name: "Differences between applets and applications", details: "Highlight the key differences between Java Applets and standalone Java applications, including execution environment and security restrictions." },
      { id: "lifecycle-applet", name: "Life cycle of an applet", details: "Describe the life cycle methods of an Applet: init(), start(), stop(), and destroy()." },
      { id: "types-applets", name: "Types of applets", details: "Briefly discuss different types of applets if applicable, or focus on the general AWT-based applet." },
      { id: "creating-applets", name: "Creating applets", details: "Explain how to create a simple Java Applet by extending the java.applet.Applet class and embedding it in an HTML page." },
      { id: "passing-parameters-applets", name: "Passing parameters to applets", details: "Show how to pass parameters from an HTML page to an Applet using the <param> tag and retrieve them using getParameter()." },
      { id: "swing-introduction", name: "Swing – Introduction", details: "Introduce Swing as an advanced GUI toolkit for Java, highlighting its advantages over AWT." },
      { id: "limitations-awt", name: "Limitations of AWT", details: "Discuss the limitations of AWT that led to the development of Swing, such as platform-dependent appearance and a limited set of components." },
      { id: "mvc-architecture", name: "MVC architecture", details: "Explain how Swing components often follow a Model-View-Controller (MVC) or similar architectural pattern (Model-Delegate) for separating data, presentation, and logic." },
      { id: "swing-components", name: "Swing components", details: "Provide an overview of Swing components, noting they are lightweight (written purely in Java) and have a pluggable look and feel." },
      { id: "swing-containers", name: "Swing containers", details: "Describe Swing containers like JFrame, JPanel, JDialog, which are analogous to AWT containers but with more features." },
      { id: "exploring-swing-japplet", name: "Exploring swing- JApplet", details: "Introduce JApplet as the Swing version of Applet, providing a richer set of features for applets." },
      { id: "exploring-swing-jframe", name: "Exploring swing- JFrame", details: "Describe JFrame as the top-level Swing container for creating application windows." },
      { id: "exploring-swing-jcomponent", name: "Exploring swing- JComponent", details: "Explain JComponent as the base class for most Swing components, providing common functionality." },
      { id: "swing-icons-labels", name: "Swing Icons and Labels", details: "Describe JLabel in Swing for displaying text and/or icons, and how to use Icons (e.g., ImageIcon)." },
      { id: "swing-textfields", name: "Swing text fields", details: "Explain JTextField (single-line) and JTextArea (multi-line) in Swing for text input and display." },
      { id: "swing-buttons", name: "Swing buttons – The JButton class", details: "Describe JButton and other button types in Swing (e.g., JToggleButton, JCheckBox, JRadioButton)." },
      { id: "swing-checkboxes", name: "Swing Check boxes", details: "Explain JCheckBox in Swing for selecting or deselecting options." },
      { id: "swing-radiobuttons", name: "Swing Radio buttons", details: "Describe JRadioButton in Swing, typically used with a ButtonGroup for mutually exclusive selections." },
      { id: "swing-comboboxes", name: "Swing Combo boxes", details: "Explain JComboBox in Swing for creating drop-down lists or editable selection boxes." },
      { id: "swing-tabbedpanes", name: "Swing Tabbed Panes", details: "Describe JTabbedPane in Swing for creating user interfaces with multiple tabs." },
      { id: "swing-scrollpanes", name: "Swing Scroll Panes", details: "Explain JScrollPane in Swing for providing scrollability to components that are larger than their display area." },
      { id: "swing-trees", name: "Swing Trees", details: "Introduce JTree in Swing for displaying hierarchical data in a tree-like structure." },
      { id: "swing-tables", name: "Swing Tables", details: "Describe JTable in Swing for displaying data in a two-dimensional grid or table format." },
    ],
  },
];


export function getAllUnits(): Unit[] {
  return syllabus;
}

export function getUnitById(unitId: string): Unit | undefined {
  return syllabus.find(unit => unit.id === unitId);
}

export function getTopicById(unitId: string, topicId: string): Topic | undefined {
  const unit = getUnitById(unitId);
  return unit?.topics.find(topic => topic.id === topicId);
}
