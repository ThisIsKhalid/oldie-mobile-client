import React from "react";

const Blog = () => {
  return (
    <section className="my-10">
      <article className="border border-gray-300 mx-5 mt-5 p-5 rounded-md">
        <h1 className="text-xl font-semibold text-primary">
          1. What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          There are four main types of state you need to properly manage in your
          React apps: <br />
          Local state , Global state , Server state , URL state
        </p>
        <h1 className="font-bold">Local (UI) state -</h1>
        <p>
          Local state is data we manage in one or another component. Local state
          is most often managed in React using the useState hook. For example,
          local state would be needed to show or hide a modal component or to
          track values for a form component, such as form submission, when the
          form is disabled and the values of a form's inputs.
        </p>
        <h1 className="font-bold">Global (UI) state -</h1>
        <p>
          Global state is data we manage across multiple components. Global
          state is necessary when we want to get and update data anywhere in our
          app, or in multiple components at least. A common example of global
          state is authenticated user state. If a user is logged into our app,
          it is necessary to get and change their data throughout our
          application. Sometimes state we think should be local might become
          global.
        </p>
        <h1 className="font-bold">Server state -</h1>
        <p>
          Data that comes from an external server that must be integrated with
          our UI state. Server state is a simple concept, but can be hard to
          manage alongside all of our local and global UI state. There are
          several pieces of state that must be managed every time you fetch or
          update data from an external server, including loading and error
          state.
        </p>
        <h1 className="font-bold">URL state -</h1>
        <p>
          Data that exists on our URLs, including the pathname and query
          parameters. URL state is often missing as a category of state, but it
          is an important one. In many cases, a lot of major parts of our
          application rely upon accessing URL state. Try to imagine building a
          blog without being able to fetch a post based off of its slug or id
          that is located in the URL!
        </p>
      </article>
      <article className="border border-gray-300 mx-5 mt-5 p-5 rounded-md">
        <h1 className="text-xl font-semibold text-primary">
          2. How does prototypical inheritance work?
        </h1>
        <p>
          Everything in Javascript is an object. Even when creating a Class is
          an Object via an Object Literal or Constructor Function. This is how
          Javascript does class-based programming as to other traditional
          Object-Oriented Programming languages where they use the keyword class
          and inheritance. <br />
          So, the core idea of Prototypal Inheritance is that an object can
          point to another object and inherit all its properties. The main
          purpose is to allow multiple instances of an object to share common
          properties, hence, the Singleton Pattern.
        </p>
      </article>
      <article className="border border-gray-300 mx-5 mt-5 p-5 rounded-md">
        <h1 className="text-xl font-semibold text-primary">
          3. What is a unit test? Why should we write unit tests?
        </h1>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages. <br />A unit test typically comprises of three
          stages: plan, cases and scripting and the unit test itself. In the
          first step, the unit test is prepared and reviewed. The next step is
          for the test cases and scripts to be made, then the code is tested.
        </p>
      </article>
      <article className="border border-gray-300 mx-5 mt-5 p-5 rounded-md">
        <h1 className="text-xl font-semibold text-primary">
          4. React vs. Angular vs. Vue?
        </h1>
        <p>
          <span className="font-bold">Angular vs React</span>
          <br />
          If the choice you're making is based on Angular vs React alone, then
          youll simply need to consider the pros and cons discussed for those
          libraries in this post. But overall, keep in mind that both libraries
          can be used for mobile and web apps, while Angular is generally better
          for more complex apps that are enterprise-ready. React often requires
          extra modules and components, which keeps the core library small, but
          means theres extra work involved when incorporating outside tools.
          Angular, on the other hand, is more of a full-fledged solution that
          doesnt require extras like React often does, though it does have a
          steeper learning curve for its core compared to React. React is more
          suitable for intermediate to advanced JavaScript developers who are
          familiar with concepts from ES6 and up, while Angular favors those
          same developers who are also familiar with TypeScript.
        </p>
        <p>
          <span className="font-bold">React vs Vue</span>
          <br />
          The choice between React vs Vue is often debated and it’s not an easy
          one. Vue has a vibrant and ever-growing community and has taken over
          popularity vs. React in many respects. React developers are still
          churning out lots of new components and extras, so there’s no sign
          that React is on the decline either. Vue is generally more suited to
          smaller, less complex apps and is easier to learn from scratch
          compared to React. Vue can be easier to integrate into new or existing
          projects and many feel its use of HTML templates along with JSX is an
          advantage. Overall, Vue might be the best choice if you’re a newer
          developer and not as familiar with advanced JavaScript concepts, while
          React is quite well suited for experienced programmers and developers
          who have worked with object-oriented JavaScript, functional
          JavaScript, and similar concepts.
        </p>
        <p>
          <span className="font-bold">Angular vs Vue</span>
          <br />
          In most cases, you probably wouldnt be deciding between only Angular
          and Vue. They are vastly different libraries with very different
          feature sets and learning curves. Vue is the clear choice for less
          experienced developers, and Angular would be preferred for those
          working on larger apps. A large library like Angular would require
          more diligence in keeping up with whats new, while Vue would be less
          demanding in this regard and the fact that the two most recent major
          releases of Vue are in separate repositories helps. It should also be
          noted that Vue was created by a developer who formerly worked on
          Angular for Google, so thats another thing to keep in mind, though
          that wouldnt have a huge impact on your decision.
        </p>
      </article>
    </section>
  );
};

export default Blog;
