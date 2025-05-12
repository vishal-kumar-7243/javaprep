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
      { id: "oop-paradigm", name: "Need for OOP paradigm", details: "Discuss the reasons for adopting the Object-Oriented Programming paradigm, its core principles, and its advantages in modern software development, particularly in managing complexity.", image: "https://picsum.photos/800/400", imageHint: "oop diagram" },
      { id: "oop-concepts", name: "Summary of OOP concepts", details: "Provide a concise summary of fundamental Object-Oriented Programming concepts such as classes, objects, encapsulation, inheritance, and polymorphism.", image: "https://picsum.photos/800/400", imageHint: "concepts map" },
      { id: "coping-complexity", name: "Coping with complexity", details: "Explain how Object-Oriented Programming helps in managing and reducing complexity in large-scale software projects through its various mechanisms." },
      { id: "abstraction-mechanisms", name: "Abstraction mechanisms", details: "Describe the different abstraction mechanisms available in OOP and how they contribute to simplifying complex systems by hiding implementation details." },
      { id: "world-view", name: "A way of viewing world – Agents, responsibility, messages, methods", details: "Illustrate the OOP perspective of viewing the world in terms of agents (objects), their responsibilities, the messages they exchange, and the methods they execute." },
      { id: "history-java", name: "History of Java", details: "Briefly outline the history of the Java programming language, its origins, and key milestones in its evolution." },
      { id: "java-buzzwords", name: "Java buzzwords", details: "List and explain the key 'buzzwords' associated with Java (e.g., platform-independent, robust, secure) and what they signify." },
      { 
        id: "data-types", 
        name: "Data types", 
        details: "Describe the primitive and reference data types available in Java, including their sizes and default values.",
        codeExample: 
`public class DataTypesExample {
    public static void main(String[] args) {
        // Primitive data types
        byte myByte = 100;
        short myShort = 5000;
        int myInt = 100000;
        long myLong = 15000000000L;
        float myFloat = 5.75f;
        double myDouble = 19.99d;
        boolean myBoolean = true;
        char myChar = 'A';

        System.out.println("Byte: " + myByte);
        System.out.println("Short: " + myShort);
        System.out.println("Int: " + myInt);
        System.out.println("Long: " + myLong);
        System.out.println("Float: " + myFloat);
        System.out.println("Double: " + myDouble);
        System.out.println("Boolean: " + myBoolean);
        System.out.println("Char: " + myChar);

        // Reference data type (String)
        String myString = "Hello Java";
        System.out.println("String: " + myString);
    }
}`,
        outputExample:
`Byte: 100
Short: 5000
Int: 100000
Long: 15000000000
Float: 5.75
Double: 19.99
Boolean: true
Char: A
String: Hello Java`
      },
      { 
        id: "variables", 
        name: "Variables", 
        details: "Explain the concept of variables in Java, including declaration, initialization, and naming conventions.",
        codeExample:
`public class VariablesExample {
    static int staticVar = 10; // Static variable
    int instanceVar = 20;      // Instance variable

    public void method() {
        int localVar = 30;       // Local variable
        System.out.println("Local variable: " + localVar);
    }

    public static void main(String[] args) {
        VariablesExample obj = new VariablesExample();
        System.out.println("Static variable: " + staticVar); // or VariablesExample.staticVar
        System.out.println("Instance variable: " + obj.instanceVar);
        obj.method();
    }
}`,
        outputExample:
`Static variable: 10
Instance variable: 20
Local variable: 30`
      },
      { id: "scope-lifetime", name: "Scope and lifetime of variables", details: "Discuss the scope (class, instance, local) and lifetime of variables in Java programs." },
      { 
        id: "arrays", 
        name: "Arrays", 
        details: "Explain how to declare, initialize, and use one-dimensional and multi-dimensional arrays in Java.",
        codeExample: 
`public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array of integers
        int[] numbers = {10, 20, 30, 40, 50};

        // Access and print array elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Third element: " + numbers[2]);

        // Iterate through the array
        System.out.println("All elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println(); // New line

        // Multi-dimensional array
        int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        System.out.println("Element at matrix[1][1]: " + matrix[1][1]);
    }
}`,
        outputExample:
`First element: 10
Third element: 30
All elements:
10 20 30 40 50 
Element at matrix[1][1]: 5`
      },
      { 
        id: "operators", 
        name: "Operators", 
        details: "Cover the various types of operators in Java, including arithmetic, relational, logical, bitwise, and assignment operators, along with operator precedence.",
        codeExample:
`public class OperatorsExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;

        // Arithmetic operators
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));

        // Relational operators
        System.out.println("a > b is " + (a > b));
        System.out.println("a == 10 is " + (a == 10));

        // Logical operators
        boolean x = true;
        boolean y = false;
        System.out.println("x && y is " + (x && y));
        System.out.println("x || y is " + (x || y));
        System.out.println("!x is " + (!x));
    }
}`,
        outputExample:
`a + b = 15
a - b = 5
a * b = 50
a / b = 2
a % b = 0
a > b is true
a == 10 is true
x && y is false
x || y is true
!x is false`
      },
      { 
        id: "expressions", 
        name: "Expressions", 
        details: "Define expressions in Java and explain how they are formed using variables, operators, and method calls.",
        codeExample:
`public class ExpressionsExample {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;
        int result;

        // Arithmetic expression
        result = (num1 + num2) * 2; // (10 + 5) * 2 = 30
        System.out.println("Result of (num1 + num2) * 2: " + result);

        // Boolean expression
        boolean isGreater = num1 > num2; // 10 > 5 is true
        System.out.println("Is num1 greater than num2? " + isGreater);

        // Expression involving method call
        String text = "Hello";
        int length = text.length(); // length() is a method call
        System.out.println("Length of text: " + length);
    }
}`,
        outputExample:
`Result of (num1 + num2) * 2: 30
Is num1 greater than num2? true
Length of text: 5`
      },
      { 
        id: "control-statements", 
        name: "Control statements", 
        details: "Describe Java's control flow statements, including selection (if, switch) and iteration (for, while, do-while) statements.",
        image: "https://picsum.photos/800/450", 
        imageHint: "flow chart",
        codeExample:
`public class ControlStatementsExample {
    public static void main(String[] args) {
        // if-else statement
        int number = 10;
        if (number > 0) {
            System.out.println("Number is positive.");
        } else {
            System.out.println("Number is not positive.");
        }

        // for loop
        System.out.print("Numbers from 1 to 5: ");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // switch statement
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent!");
                break;
            case 'B':
                System.out.println("Good job!");
                break;
            case 'C':
                System.out.println("Well done");
                break;
            default:
                System.out.println("Invalid grade");
        }
    }
}`,
        outputExample:
`Number is positive.
Numbers from 1 to 5: 1 2 3 4 5 
Good job!`
      },
      { 
        id: "type-conversion", 
        name: "Type conversion and casting", 
        details: "Explain implicit type conversion (widening) and explicit type casting (narrowing) in Java with examples.",
        codeExample:
`public class TypeConversionExample {
    public static void main(String[] args) {
        // Implicit conversion (widening)
        int myInt = 9;
        double myDouble = myInt; // int to double
        System.out.println("Implicit conversion (int to double):");
        System.out.println(myInt);      // Outputs 9
        System.out.println(myDouble);   // Outputs 9.0

        // Explicit conversion (narrowing/casting)
        double anotherDouble = 9.78;
        int anotherInt = (int) anotherDouble; // double to int
        System.out.println("\\nExplicit conversion (double to int):");
        System.out.println(anotherDouble); // Outputs 9.78
        System.out.println(anotherInt);    // Outputs 9
    }
}`,
        outputExample:
`Implicit conversion (int to double):
9
9.0

Explicit conversion (double to int):
9.78
9`
      },
      { 
        id: "simple-java-program", 
        name: "Simple Java program", 
        details: "Provide and explain the structure of a basic Java program, including the main method and how to compile and run it.",
        codeExample: 
`// This is a simple Java program.
// FileName : "HelloWorld.java".

public class HelloWorld {
    // Your program begins with a call to main().
    // Prints "Hello, Java World!" to the console.
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}`,
        outputExample: "Hello, Java World!",
        image: "https://picsum.photos/800/400",
        imageHint: "java ide"
      },
      { 
        id: "concepts-classes-objects", 
        name: "Concepts of classes, objects", 
        details: "Elaborate on the core OOP concepts of classes as blueprints and objects as instances of those classes.",
        codeExample:
`// Define a class named 'Dog'
class Dog {
    // Instance variables
    String name;
    String breed;

    // Method
    void bark() {
        System.out.println(name + " says: Woof Woof!");
    }
}

public class ClassObjectExample {
    public static void main(String[] args) {
        // Create an object (instance) of the Dog class
        Dog myDog = new Dog();
        myDog.name = "Buddy";
        myDog.breed = "Golden Retriever";

        // Access object's properties and methods
        System.out.println(myDog.name + " is a " + myDog.breed);
        myDog.bark();

        Dog anotherDog = new Dog();
        anotherDog.name = "Lucy";
        anotherDog.breed = "Poodle";
        anotherDog.bark();
    }
}`,
        outputExample:
`Buddy is a Golden Retriever
Buddy says: Woof Woof!
Lucy says: Woof Woof!`
      },
      { 
        id: "constructors", 
        name: "Constructors", 
        details: "Explain the purpose of constructors in Java, how they are defined, and their role in object initialization. Include default and parameterized constructors.",
        codeExample:
`class Car {
    String model;
    int year;

    // Default constructor (Java provides one if not defined, but can be explicit)
    public Car() {
        model = "Unknown";
        year = 0;
        System.out.println("Default constructor called.");
    }

    // Parameterized constructor
    public Car(String modelName, int carYear) {
        System.out.println("Parameterized constructor called.");
        model = modelName;
        year = carYear;
    }

    void display() {
        System.out.println("Model: " + model + ", Year: " + year);
    }
}

public class ConstructorExample {
    public static void main(String[] args) {
        Car car1 = new Car(); // Calls default constructor
        car1.display();

        Car car2 = new Car("Tesla Model S", 2023); // Calls parameterized constructor
        car2.display();
    }
}`,
        outputExample:
`Default constructor called.
Model: Unknown, Year: 0
Parameterized constructor called.
Model: Tesla Model S, Year: 2023`
      },
      { 
        id: "methods", 
        name: "Methods", 
        details: "Describe how to define and call methods in Java, including method signatures, return types, and parameters.",
        codeExample:
`public class MethodsExample {

    // Method with no parameters and no return value
    void greet() {
        System.out.println("Hello there!");
    }

    // Method with parameters and a return value
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        MethodsExample obj = new MethodsExample();

        obj.greet(); // Calling method greet()

        int num1 = 10;
        int num2 = 20;
        int sum = obj.add(num1, num2); // Calling method add()
        System.out.println("Sum of " + num1 + " and " + num2 + " is: " + sum);
    }
}`,
        outputExample:
`Hello there!
Sum of 10 and 20 is: 30`
      },
      { id: "access-control", name: "Access control", details: "Explain Java's access modifiers (public, private, protected, default) and their impact on the visibility of classes, members, and methods." },
      { 
        id: "this-keyword", 
        name: "This keyword", 
        details: "Illustrate the use of the 'this' keyword in Java to refer to the current instance of a class.",
        codeExample:
`class Person {
    String name;
    int age;

    // Constructor using 'this' to differentiate instance variables from parameters
    public Person(String name, int age) {
        this.name = name; // 'this.name' is instance variable, 'name' is parameter
        this.age = age;   // 'this.age' is instance variable, 'age' is parameter
    }

    void display() {
        System.out.println("Name: " + this.name + ", Age: " + this.age);
    }

    void compareAge(Person otherPerson) {
        if (this.age > otherPerson.age) {
            System.out.println(this.name + " is older than " + otherPerson.name);
        } else {
            System.out.println(this.name + " is not older than " + otherPerson.name);
        }
    }
}

public class ThisKeywordExample {
    public static void main(String[] args) {
        Person person1 = new Person("Alice", 30);
        Person person2 = new Person("Bob", 25);

        person1.display();
        person2.display();
        person1.compareAge(person2);
    }
}`,
        outputExample:
`Name: Alice, Age: 30
Name: Bob, Age: 25
Alice is older than Bob`
      },
      { id: "garbage-collection", name: "Garbage collection", details: "Briefly explain the concept of automatic garbage collection in Java and its benefits." },
      { 
        id: "overloading", 
        name: "Overloading methods and constructors", 
        details: "Explain method and constructor overloading in Java, allowing multiple methods/constructors with the same name but different parameters.",
        codeExample:
`class DisplayOverload {
    // Method overloading
    public void show(int num) {
        System.out.println("Displaying integer: " + num);
    }

    public void show(String text) {
        System.out.println("Displaying string: " + text);
    }

    public void show(double dNum, int iNum) {
        System.out.println("Displaying double: " + dNum + " and integer: " + iNum);
    }
}

public class OverloadingExample {
    public OverloadingExample() {
      System.out.println("Constructor with no arguments.");
    }
    public OverloadingExample(String name) {
      System.out.println("Constructor with one argument: " + name);
    }

    public static void main(String[] args) {
        DisplayOverload obj = new DisplayOverload();
        obj.show(100);
        obj.show("Hello Java Overloading");
        obj.show(3.14, 5);

        OverloadingExample ex1 = new OverloadingExample();
        OverloadingExample ex2 = new OverloadingExample("Test");
    }
}`,
        outputExample:
`Displaying integer: 100
Displaying string: Hello Java Overloading
Displaying double: 3.14 and integer: 5
Constructor with no arguments.
Constructor with one argument: Test`
      },
      { id: "method-binding", name: "Method binding", details: "Discuss static (compile-time) and dynamic (runtime) method binding in Java, particularly in the context of inheritance and polymorphism." },
      { 
        id: "inheritance-basics", 
        name: "Inheritance", 
        details: "Introduce the concept of inheritance in Java (extends keyword), explaining how a subclass inherits properties and methods from a superclass.",
        codeExample:
`// Superclass (Parent class)
class Animal {
    String name;
    public Animal(String name) {
        this.name = name;
    }
    void eat() {
        System.out.println(name + " is eating.");
    }
}

// Subclass (Child class) inheriting from Animal
class Dog extends Animal {
    public Dog(String name) {
        super(name); // Call superclass constructor
    }

    void bark() {
        System.out.println(name + " is barking.");
    }
}

public class InheritanceExample {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.eat();  // Inherited method from Animal class
        myDog.bark(); // Method from Dog class
    }
}`,
        outputExample:
`Buddy is eating.
Buddy is barking.`
      },
      { id: "overriding-exceptions", name: "Overriding and exceptions", details: "Explain method overriding in inheritance and rules related to exceptions when overriding methods." },
      { id: "parameter-passing", name: "Parameter passing", details: "Describe how parameters are passed in Java (pass-by-value for primitives, pass-by-value of reference for objects)." },
      { 
        id: "recursion", 
        name: "Recursion", 
        details: "Explain the concept of recursion and provide examples of recursive methods in Java.",
        codeExample:
`public class RecursionExample {
    // Recursive method to calculate factorial
    static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1; // Base case
        } else {
            return n * factorial(n - 1); // Recursive step
        }
    }

    public static void main(String[] args) {
        int number = 5;
        System.out.println("Factorial of " + number + " is: " + factorial(number));
    }
}`,
        outputExample: "Factorial of 5 is: 120"
      },
      { id: "nested-inner-classes", name: "Nested and inner classes", details: "Describe nested classes and inner classes in Java, their types, and use cases." },
      { 
        id: "string-class", 
        name: "Exploring string class", 
        details: "Explore the String class in Java, its immutability, and common methods for string manipulation.",
        codeExample:
`public class StringClassExample {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = " World";
        String str3 = str1.concat(str2); // Concatenation

        System.out.println("str1: " + str1);
        System.out.println("str3 (concatenated): " + str3);
        System.out.println("Length of str3: " + str3.length());
        System.out.println("Character at index 1 in str1: " + str1.charAt(1)); // 'e'
        System.out.println("Substring from index 6 of str3: " + str3.substring(6)); // "World"
        System.out.println("str1 equals \"Hello\": " + str1.equals("Hello")); // true
        System.out.println("str1 toUpperCase: " + str1.toUpperCase());

        // String is immutable
        str1.toUpperCase(); // This creates a new String object, str1 remains "Hello"
        System.out.println("str1 after toUpperCase() without assignment: " + str1); 
    }
}`,
        outputExample:
`str1: Hello
str3 (concatenated): Hello World
Length of str3: 11
Character at index 1 in str1: e
Substring from index 6 of str3: World
str1 equals "Hello": true
str1 toUpperCase: HELLO
str1 after toUpperCase() without assignment: Hello`
      },
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
      { 
        id: "super-uses", 
        name: "Super uses", 
        details: "Explain the uses of the 'super' keyword to access superclass members (fields, methods) and constructors from a subclass.",
        codeExample:
`class AnimalSuper {
    String color = "white";
    void eat() {
        System.out.println("Animal is eating");
    }
    AnimalSuper() {
        System.out.println("Animal constructor is called");
    }
}

class DogSuper extends AnimalSuper {
    String color = "black"; // Hides Animal's color

    DogSuper() {
        super(); // Calls AnimalSuper constructor
        System.out.println("Dog constructor is called");
    }

    void printColor() {
        System.out.println("Dog's color: " + color);        // Prints Dog's color
        System.out.println("Animal's color: " + super.color); // Prints Animal's color
    }

    @Override
    void eat() {
        super.eat(); // Calls AnimalSuper's eat method
        System.out.println("Dog is eating bread");
    }
}

public class SuperUsesExample {
    public static void main(String[] args) {
        DogSuper myDog = new DogSuper();
        myDog.printColor();
        myDog.eat();
    }
}`,
        outputExample:
`Animal constructor is called
Dog constructor is called
Dog's color: black
Animal's color: white
Animal is eating
Dog is eating bread`
      },
      { 
        id: "final-with-inheritance", 
        name: "Using final with inheritance", 
        details: "Describe how the 'final' keyword can be used with classes, methods, and variables in the context of inheritance to prevent overriding or extension.",
        codeExample:
`// final class (cannot be subclassed)
final class FinalClass {
    void display() {
        System.out.println("This is a final class.");
    }
}
// class TryingToExtendFinal extends FinalClass {} // Error: Cannot inherit from final FinalClass

class BaseClass {
    final String finalVariable = "I cannot be changed.";

    // final method (cannot be overridden)
    final void finalMethod() {
        System.out.println("This is a final method and cannot be overridden.");
        // finalVariable = "Trying to change"; // Error: cannot assign a value to final variable
    }
    void normalMethod() {
      System.out.println("This is a normal method.");
    }
}

class DerivedClass extends BaseClass {
    // void finalMethod() {} // Error: finalMethod() in BaseClass cannot be overridden
    @Override
    void normalMethod() {
      System.out.println("Normal method overridden in DerivedClass.");
    }
}

public class FinalKeywordExample {
    public static void main(String[] args) {
        FinalClass fc = new FinalClass();
        fc.display();

        DerivedClass dc = new DerivedClass();
        System.out.println(dc.finalVariable);
        dc.finalMethod();
        dc.normalMethod();
    }
}`,
        outputExample:
`This is a final class.
I cannot be changed.
This is a final method and cannot be overridden.
Normal method overridden in DerivedClass.`
      },
      { 
        id: "polymorphism-overriding", 
        name: "Polymorphism- method overriding", 
        details: "Elaborate on polymorphism achieved through method overriding, where a subclass provides a specific implementation for a method defined in its superclass.",
        codeExample:
`class Shape {
    void draw() {
        System.out.println("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    @Override // Annotation to indicate method overriding
    void draw() {
        System.out.println("Drawing a circle.");
    }
}

class Square extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing a square.");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Shape myShape; // Reference of type Shape

        myShape = new Shape();
        myShape.draw(); // Calls Shape's draw method

        myShape = new Circle();
        myShape.draw(); // Calls Circle's draw method (runtime polymorphism)

        myShape = new Square();
        myShape.draw(); // Calls Square's draw method (runtime polymorphism)
    }
}`,
        outputExample:
`Drawing a generic shape.
Drawing a circle.
Drawing a square.`
      },
      { 
        id: "abstract-classes", 
        name: "Abstract classes", 
        details: "Explain abstract classes and abstract methods in Java, their purpose, and how they are used to define common interfaces for subclasses.",
        codeExample:
`// Abstract class
abstract class Vehicle {
    String name;

    // Constructor
    public Vehicle(String name) {
        this.name = name;
    }

    // Abstract method (no implementation)
    abstract void startEngine();

    // Concrete method
    void stopEngine() {
        System.out.println(name + "'s engine stopped.");
    }
}

class CarAbstract extends Vehicle {
    public CarAbstract(String name) {
        super(name);
    }

    // Implementation of abstract method
    @Override
    void startEngine() {
        System.out.println(name + "'s engine started with a key.");
    }
}

class Motorcycle extends Vehicle {
    public Motorcycle(String name) {
        super(name);
    }

    @Override
    void startEngine() {
        System.out.println(name + "'s engine started with a kick-start.");
    }
}

public class AbstractClassExample {
    public static void main(String[] args) {
        // Vehicle myVehicle = new Vehicle("Generic"); // Error: Cannot instantiate abstract class

        Vehicle myCar = new CarAbstract("Sedan");
        myCar.startEngine();
        myCar.stopEngine();

        Vehicle myMotorcycle = new Motorcycle("Cruiser");
        myMotorcycle.startEngine();
        myMotorcycle.stopEngine();
    }
}`,
        outputExample:
`Sedan's engine started with a key.
Sedan's engine stopped.
Cruiser's engine started with a kick-start.
Cruiser's engine stopped.`
      },
      { id: "object-class", name: "The Object class", details: "Discuss the Object class in Java as the root of all class hierarchies and its common methods (e.g., toString(), equals(), hashCode())." },
      { id: "defining-packages", name: "Defining, Creating and Accessing a Package", details: "Explain how to define, create, and access packages in Java to organize related classes and interfaces." },
      { id: "understanding-classpath", name: "Understanding CLASSPATH", details: "Describe the purpose and usage of the CLASSPATH environment variable in locating Java classes and packages." },
      { id: "importing-packages", name: "Importing packages", details: "Show how to import classes and interfaces from packages using the 'import' statement." },
      { id: "classes-vs-interfaces", name: "Differences between classes and interfaces", details: "Highlight the key differences between classes and interfaces in Java, including their purpose and capabilities." },
      { 
        id: "defining-interface", 
        name: "Defining an interface", 
        details: "Explain how to define an interface in Java, including method signatures and constant declarations." 
      }, // Merged with implementing-interface
      { 
        id: "implementing-interface", 
        name: "Implementing interface", 
        details: "Show how classes can implement interfaces using the 'implements' keyword and provide implementations for interface methods.",
        codeExample:
`// Defining an interface
interface Drawable {
    // Variables in an interface are implicitly public, static, and final
    String DRAW_COLOR = "Blue"; 

    void drawShape(); // Abstract method (implicitly public and abstract)
    void displayColor();
}

// Implementing the interface
class Rectangle implements Drawable {
    @Override
    public void drawShape() {
        System.out.println("Drawing a rectangle.");
    }
    @Override
    public void displayColor(){
        System.out.println("Default draw color: " + DRAW_COLOR);
    }
}

class CircleInterface implements Drawable {
    @Override
    public void drawShape() {
        System.out.println("Drawing a circle.");
    }
     @Override
    public void displayColor(){
        System.out.println("Circle draw color: " + Drawable.DRAW_COLOR); // Can also use interface name
    }
}

public class InterfaceExample {
    public static void main(String[] args) {
        Drawable rect = new Rectangle();
        rect.drawShape();
        rect.displayColor();

        Drawable circ = new CircleInterface();
        circ.drawShape();
        circ.displayColor();
        
        System.out.println("Accessing interface variable: " + Drawable.DRAW_COLOR);
    }
}`,
        outputExample:
`Drawing a rectangle.
Default draw color: Blue
Drawing a circle.
Circle draw color: Blue
Accessing interface variable: Blue`
      },
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
      { 
        id: "try-catch-throw-throws-finally", 
        name: "Usage of try, catch, throw, throws and finally", 
        details: "Explain the syntax and usage of try, catch, throw, throws, and finally keywords in Java for handling exceptions.",
        codeExample:
`public class ExceptionHandlingExample {
    public static void main(String[] args) {
        try {
            int result = divide(10, 0); // Potential ArithmeticException
            System.out.println("Result: " + result); // This won't be printed if exception occurs
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero.");
            System.out.println("Exception message: " + e.getMessage());
        } finally {
            System.out.println("Finally block executed, regardless of exception.");
        }

        try {
            checkAge(15);
        } catch(IllegalArgumentException e){
            System.out.println("Age check error: " + e.getMessage());
        }
        System.out.println("Program continues after handling exceptions.");
    }

    // Method that might throw an exception
    static int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero attempted"); // Explicitly throw
        }
        return a / b;
    }
    
    // Method that declares it might throw an exception
    static void checkAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            throw new IllegalArgumentException("User must be 18 or older.");
        }
        System.out.println("Age is valid.");
    }
}`,
        outputExample:
`Error: Cannot divide by zero.
Exception message: Division by zero attempted
Finally block executed, regardless of exception.
Age check error: User must be 18 or older.
Program continues after handling exceptions.`
      },
      { id: "built-in-exceptions", name: "Built in exceptions", details: "List and describe common built-in exceptions in Java, such as NullPointerException, ArrayIndexOutOfBoundsException, and IOException." },
      { 
        id: "creating-own-exceptions", 
        name: "Creating own exception subclasses", 
        details: "Show how to create custom exception classes by extending existing exception classes (e.g., Exception or RuntimeException).",
        codeExample:
`// Custom exception class
class InvalidAgeException extends Exception { // Or extend RuntimeException for unchecked
    public InvalidAgeException(String message) {
        super(message); // Call constructor of parent Exception class
    }
}

public class CustomExceptionExample {
    static void validateAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age is not valid for voting.");
        } else {
            System.out.println("Age is valid. Welcome to vote.");
        }
    }

    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (InvalidAgeException e) {
            System.out.println("Caught custom exception: " + e.getMessage());
        }

        try {
            validateAge(20);
        } catch (InvalidAgeException e) {
            System.out.println("This should not happen: " + e.getMessage());
        }
    }
}`,
        outputExample:
`Caught custom exception: Age is not valid for voting.
Age is valid. Welcome to vote.`
      },
      { id: "string-handling", name: "String handling", details: "Revisit string handling in Java, focusing on common operations and methods provided by the String, StringBuilder, and StringBuffer classes." },
      { id: "exploring-java-util", name: "Exploring java.util", details: "Provide an overview of the java.util package, highlighting key utility classes and interfaces such as Collections, Date, Calendar, and data structures like List, Set, Map." },
      { id: "multithreading-vs-multitasking", name: "Differences between multithreading and multitasking", details: "Explain the concepts of multithreading and multitasking, and differentiate between them." },
      { id: "thread-life-cycle", name: "Thread life cycle", details: "Describe the different states in a thread's life cycle: new, runnable, running, blocked/waiting, and terminated.", image: "https://picsum.photos/800/500", imageHint: "thread lifecycle" },
      { 
        id: "creating-threads", 
        name: "Creating threads", 
        details: "Explain the two ways to create threads in Java: by extending the Thread class or by implementing the Runnable interface.",
        codeExample:
`// 1. Implementing Runnable interface (preferred way)
class MyRunnable implements Runnable {
    private String threadName;
    public MyRunnable(String name) {
        this.threadName = name;
    }
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(threadName + " - Count: " + i);
            try {
                Thread.sleep(500); // Pause for 0.5 seconds
            } catch (InterruptedException e) {
                System.out.println(threadName + " interrupted.");
            }
        }
    }
}

// 2. Extending Thread class
class MyThread extends Thread {
    public MyThread(String name) {
        super(name); // Set thread name
    }
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " - Count: " + i);
            try {
                Thread.sleep(700);
            } catch (InterruptedException e) {
                System.out.println(getName() + " interrupted.");
            }
        }
    }
}

public class CreatingThreadsExample {
    public static void main(String[] args) {
        System.out.println("Main thread starting.");

        // Using Runnable
        Thread thread1 = new Thread(new MyRunnable("RunnableThread-1"));
        Thread thread2 = new Thread(new MyRunnable("RunnableThread-2"));
        
        // Using Thread extension
        MyThread thread3 = new MyThread("ExtendedThread-A");
        MyThread thread4 = new MyThread("ExtendedThread-B");

        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();

        System.out.println("Main thread finished setup.");
        // Note: Output order of threads can vary due to concurrent execution.
    }
}`,
        outputExample: 
`Main thread starting.
Main thread finished setup.
RunnableThread-1 - Count: 1
RunnableThread-2 - Count: 1
ExtendedThread-A - Count: 1
ExtendedThread-B - Count: 1
RunnableThread-1 - Count: 2
RunnableThread-2 - Count: 2
ExtendedThread-A - Count: 2
ExtendedThread-B - Count: 2
RunnableThread-1 - Count: 3
RunnableThread-2 - Count: 3
ExtendedThread-A - Count: 3
ExtendedThread-B - Count: 3 
(Note: Actual output order of concurrent threads may vary)`
      },
      { id: "thread-priorities", name: "Thread priorities", details: "Discuss thread priorities in Java, how to set them, and how they influence thread scheduling (though not guaranteed)." },
      { 
        id: "synchronizing-threads", 
        name: "Synchronizing threads", 
        details: "Explain the need for thread synchronization to prevent race conditions and data corruption in multithreaded applications, using synchronized methods and blocks.",
        codeExample:
`class Counter {
    private int count = 0;

    // Synchronized method to ensure thread-safe increment
    public synchronized void increment() {
        count++;
    }
    
    // Synchronized block example (alternative)
    public void incrementWithBlock() {
        // some non-critical code
        synchronized(this) {
             count++;
        }
       // some other non-critical code
    }

    public int getCount() {
        return count;
    }
}

class WorkerThread extends Thread {
    private Counter counter;
    public WorkerThread(Counter counter, String name) {
        super(name);
        this.counter = counter;
    }

    @Override
    public void run() {
        for (int i = 0; i < 10000; i++) {
            counter.increment();
        }
        System.out.println(getName() + " finished. Counter is: " + counter.getCount());
    }
}

public class SynchronizingThreadsExample {
    public static void main(String[] args) throws InterruptedException {
        Counter sharedCounter = new Counter();

        WorkerThread t1 = new WorkerThread(sharedCounter, "Thread-1");
        WorkerThread t2 = new WorkerThread(sharedCounter, "Thread-2");

        t1.start();
        t2.start();

        t1.join(); // Wait for t1 to finish
        t2.join(); // Wait for t2 to finish

        System.out.println("Final counter value: " + sharedCounter.getCount());
        // Expected output: 20000 if synchronized correctly
    }
}`,
        outputExample:
`Thread-1 finished. Counter is: (some value, e.g. 18734, depends on interleaving)
Thread-2 finished. Counter is: 20000 (or the other thread finishes first)
Final counter value: 20000
(Note: The order of 'finished' messages can vary)`
      },
      { id: "inter-thread-communication", name: "Inter thread communication", details: "Describe mechanisms for inter-thread communication in Java, such as wait(), notify(), and notifyAll()." },
      { id: "thread-groups", name: "Thread groups", details: "Briefly explain the concept of thread groups in Java, though they are less commonly used now." },
      { id: "daemon-threads", name: "Daemon threads", details: "Explain what daemon threads are, their purpose, and how they differ from user threads." },
      { 
        id: "enumerations", 
        name: "Enumerations", 
        details: "Introduce enumerations (enums) in Java, how to define them, and their benefits over using constants.",
        codeExample:
`// Defining an enum for Days of the week
enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

// Enum with values and methods
enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6);

    private final double mass;   // in kilograms
    private final double radius; // in meters
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    public double mass() { return mass; }
    public double radius() { return radius; }
}


public class EnumerationExample {
    public static void main(String[] args) {
        Day today = Day.FRIDAY;
        System.out.println("Today is: " + today);

        if (today == Day.FRIDAY) {
            System.out.println("TGIF!");
        }

        System.out.println("\\nIterating through all days:");
        for (Day d : Day.values()) {
            System.out.println(d + " (ordinal: " + d.ordinal() + ")");
        }
        
        System.out.println("\\nPlanet Earth's mass: " + Planet.EARTH.mass());
        System.out.println("Planet Earth's radius: " + Planet.EARTH.radius());
    }
}`,
        outputExample:
`Today is: FRIDAY
TGIF!

Iterating through all days:
SUNDAY (ordinal: 0)
MONDAY (ordinal: 1)
TUESDAY (ordinal: 2)
WEDNESDAY (ordinal: 3)
THURSDAY (ordinal: 4)
FRIDAY (ordinal: 5)
SATURDAY (ordinal: 6)

Planet Earth's mass: 5.976E24
Planet Earth's radius: 6378140.0`
      },
      { 
        id: "autoboxing", 
        name: "Autoboxing", 
        details: "Explain autoboxing and unboxing in Java, the automatic conversion between primitive types and their corresponding wrapper classes.",
        codeExample:
`import java.util.ArrayList;
import java.util.List;

public class AutoboxingExample {
    public static void main(String[] args) {
        // Autoboxing: int to Integer
        Integer intObject = 100; // Primitive int 100 is autoboxed to Integer object
        
        // Unboxing: Integer to int
        int primitiveInt = intObject; // Integer object is unboxed to primitive int

        System.out.println("Autoboxed Integer object: " + intObject);
        System.out.println("Unboxed primitive int: " + primitiveInt);

        // Example with collections
        List<Integer> numberList = new ArrayList<>();
        numberList.add(1); // Autoboxing: int 1 to Integer
        numberList.add(2); // Autoboxing: int 2 to Integer

        int firstElement = numberList.get(0); // Unboxing: Integer to int
        System.out.println("First element from list (unboxed): " + firstElement);
    }
}`,
        outputExample:
`Autoboxed Integer object: 100
Unboxed primitive int: 100
First element from list (unboxed): 1`
      },
      { id: "annotations", name: "Annotations", details: "Describe annotations in Java, their purpose (metadata), and common built-in annotations (e.g., @Override, @Deprecated)." },
      { 
        id: "generics", 
        name: "Generics", 
        details: "Introduce generics in Java, explaining how they provide type safety and enable writing more flexible and reusable code, especially with collections.",
        codeExample:
`// A simple generic class
class Box<T> { // T is the type parameter
    private T content;

    public void setContent(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }
}

public class GenericsExample {
    public static void main(String[] args) {
        // Creating a Box for Integer
        Box<Integer> integerBox = new Box<Integer>();
        integerBox.setContent(10);
        System.out.println("Integer value in box: " + integerBox.getContent());

        // Creating a Box for String
        Box<String> stringBox = new Box<>(); // Diamond operator (type inference)
        stringBox.setContent("Hello Generics");
        System.out.println("String value in box: " + stringBox.getContent());

        // Type safety: The following would cause a compile-time error
        // integerBox.setContent("Some String"); // Error! Box expects Integer
    }
}`,
        outputExample:
`Integer value in box: 10
String value in box: Hello Generics`
      },
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
      { 
        id: "delegation-event-model", 
        name: "Delegation event model", 
        details: "Describe the delegation event model in Java AWT, where event sources delegate the handling of events to registered listeners.",
        image: "https://picsum.photos/800/450",
        imageHint: "event model diagram"
      },
      { 
        id: "handling-mouse-keyboard-events", 
        name: "Handling mouse and keyboard events", 
        details: "Provide examples of how to handle mouse events (clicks, movement) and keyboard events (key presses, releases) using appropriate listeners.",
        codeExample:
`import java.awt.*;
import java.awt.event.*;

public class MouseKeyboardEventsDemo extends Frame implements MouseListener, KeyListener {
    Label mouseStatusLabel;
    Label keyStatusLabel;

    public MouseKeyboardEventsDemo() {
        setLayout(new FlowLayout());
        setTitle("Mouse and Keyboard Event Demo");
        setSize(400, 200);

        mouseStatusLabel = new Label("Mouse Status: No event yet");
        keyStatusLabel = new Label("Key Status: No event yet (Focus here and type)");

        add(mouseStatusLabel);
        add(keyStatusLabel);

        addMouseListener(this); // Register this frame to listen for its own mouse events
        addKeyListener(this);   // Register this frame to listen for its own key events
        
        // For KeyListener to work, the component must be focusable
        setFocusable(true); 

        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
        setVisible(true);
    }

    // MouseListener methods
    public void mouseClicked(MouseEvent me) {
        mouseStatusLabel.setText("Mouse Clicked at (" + me.getX() + ", " + me.getY() + ")");
    }
    public void mouseEntered(MouseEvent me) {
        mouseStatusLabel.setText("Mouse Entered");
    }
    public void mouseExited(MouseEvent me) {
        mouseStatusLabel.setText("Mouse Exited");
    }
    public void mousePressed(MouseEvent me) {
        mouseStatusLabel.setText("Mouse Pressed");
    }
    public void mouseReleased(MouseEvent me) {
        mouseStatusLabel.setText("Mouse Released");
    }

    // KeyListener methods
    public void keyTyped(KeyEvent ke) {
        keyStatusLabel.setText("Key Typed: " + ke.getKeyChar());
    }
    public void keyPressed(KeyEvent ke) {
        keyStatusLabel.setText("Key Pressed: " + KeyEvent.getKeyText(ke.getKeyCode()));
    }
    public void keyReleased(KeyEvent ke) {
        keyStatusLabel.setText("Key Released: " + KeyEvent.getKeyText(ke.getKeyCode()));
    }

    public static void main(String[] args) {
        new MouseKeyboardEventsDemo();
    }
}`,
        outputExample: "A simple AWT Frame will appear. Interact with mouse and keyboard to see labels update. (Output is visual)"
      },
      { id: "adapter-classes", name: "Adapter classes", details: "Explain adapter classes in AWT (e.g., MouseAdapter, KeyAdapter) and how they provide empty implementations of listener interfaces, simplifying event handling." },
      { id: "awt-class-hierarchy", name: "The AWT class hierarchy", details: "Provide an overview of the AWT (Abstract Window Toolkit) class hierarchy, including components, containers, and helper classes.", image: "https://picsum.photos/800/600", imageHint: "awt hierarchy" },
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
      { id: "lifecycle-applet", name: "Life cycle of an applet", details: "Describe the life cycle methods of an Applet: init(), start(), stop(), and destroy().", image: "https://picsum.photos/800/400", imageHint: "applet lifecycle" },
      { id: "types-applets", name: "Types of applets", details: "Briefly discuss different types of applets if applicable, or focus on the general AWT-based applet." },
      { 
        id: "creating-applets", 
        name: "Creating applets", 
        details: "Explain how to create a simple Java Applet by extending the java.applet.Applet class and embedding it in an HTML page.",
        codeExample:
`// SimpleApplet.java
import java.applet.Applet;
import java.awt.Graphics;

public class SimpleApplet extends Applet {
    String message;

    // Called when the applet is first loaded
    public void init() {
        message = "Hello from my Simple Applet!";
        System.out.println("Applet initialized.");
    }

    // Called when the applet should start execution
    public void start() {
        System.out.println("Applet started.");
    }

    // Called when the applet is to be painted
    public void paint(Graphics g) {
        g.drawString(message, 20, 20); // Draw the message at (20,20)
        System.out.println("Applet painted.");
    }

    // Called when the applet is stopped
    public void stop() {
        System.out.println("Applet stopped.");
    }

    // Called when the applet is about to be unloaded
    public void destroy() {
        System.out.println("Applet destroyed.");
    }
}

/* 
Corresponding HTML file (e.g., SimpleApplet.html):
<html>
<head>
    <title>Simple Applet Demo</title>
</head>
<body>
    <h1>My Simple Java Applet</h1>
    <applet code="SimpleApplet.class" width="300" height="100">
        Your browser does not support Java applets.
    </applet>
</body>
</html>
To run:
1. Compile: javac SimpleApplet.java
2. Run with appletviewer: appletviewer SimpleApplet.html
   (Or open SimpleApplet.html in a browser with Java plugin enabled - very rare now)
*/`,
        outputExample: "The applet will display 'Hello from my Simple Applet!' in the applet viewer or browser. Console output will show lifecycle method calls. (Output is visual + console)"
      },
      { id: "passing-parameters-applets", name: "Passing parameters to applets", details: "Show how to pass parameters from an HTML page to an Applet using the <param> tag and retrieve them using getParameter()." },
      { id: "swing-introduction", name: "Swing – Introduction", details: "Introduce Swing as an advanced GUI toolkit for Java, highlighting its advantages over AWT." },
      { id: "limitations-awt", name: "Limitations of AWT", details: "Discuss the limitations of AWT that led to the development of Swing, such as platform-dependent appearance and a limited set of components." },
      { id: "mvc-architecture", name: "MVC architecture", details: "Explain how Swing components often follow a Model-View-Controller (MVC) or similar architectural pattern (Model-Delegate) for separating data, presentation, and logic.", image: "https://picsum.photos/800/450", imageHint: "mvc diagram" },
      { id: "swing-components", name: "Swing components", details: "Provide an overview of Swing components, noting they are lightweight (written purely in Java) and have a pluggable look and feel." },
      { id: "swing-containers", name: "Swing containers", details: "Describe Swing containers like JFrame, JPanel, JDialog, which are analogous to AWT containers but with more features." },
      { id: "exploring-swing-japplet", name: "Exploring swing- JApplet", details: "Introduce JApplet as the Swing version of Applet, providing a richer set of features for applets." },
      { 
        id: "exploring-swing-jframe", 
        name: "Exploring swing- JFrame", 
        details: "Describe JFrame as the top-level Swing container for creating application windows.",
        codeExample:
`import javax.swing.*;
import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleJFrameExample {
    public static void main(String[] args) {
        // Create a new JFrame container
        JFrame frame = new JFrame("My Simple Swing Application");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Exit on close
        frame.setSize(400, 200); // Set frame size
        frame.setLayout(new FlowLayout()); // Set layout

        // Create a label
        JLabel label = new JLabel("Hello, Swing!");
        frame.add(label); // Add label to frame

        // Create a button
        JButton button = new JButton("Click Me!");
        frame.add(button); // Add button to frame

        // Add an action listener to the button
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                label.setText("Button was clicked!");
            }
        });

        // Make the frame visible
        frame.setVisible(true);
        
        System.out.println("JFrame application started.");
    }
}`,
        outputExample: "A Swing window titled 'My Simple Swing Application' will appear with a label and a button. Clicking the button changes the label text. (Output is visual)"
      },
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

