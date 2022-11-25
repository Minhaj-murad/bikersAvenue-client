import React from 'react';

const MyBlog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0  left-0 z-0 hidden w-32 -mt-6 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="20" 
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            to the blog of BIKERSavanue
          </h2>
          <p className="text-base text-white md:text-lg lg:text-xl">
          Motorbikes sale at BIKERSavanue LTD! We buy and sell all motorbikes in the India and you can sell us your motorbike today with no hidden charges.
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl text-white font-semibold leading-5">What are the different ways to manage a state in a React application?</h6>
            <p className="mb-3 text-lg text-white">
            Local state, global state, server state, and URL state are the four primary varieties of state. Other varieties include: In React, managing local state is typically accomplished through the usage of the useState or useReducer hook. Context API, Redux, or useReducer are all viable options for us when it comes to managing the global state. However, we are unable to merge everything. The state of the server can be managed through the use of React Query, and the state of the URL can be managed through the use of useHistory or useLocation.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl text-white font-semibold leading-5">How does prototypical inheritance work?</h6>
            <p className="mb-3 text-lg text-white">
            Objects can have additional methods and attributes added to them by utilizing a feature of JavaScript called Prototypal Inheritance. It is a way for an object to take on the characteristics and behaviors of another object through a process known as inheritance. Object.getPrototypeOf and Object have traditionally been the two methods that are utilized when getting and setting an object's Prototype.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-semibold leading-5 text-white">What is a unit test? Why should we write unit tests?</h6>
            <p className="mb-3 text-lg text-white">
            Unit testing examines the smallest testable components of an application for appropriate operation. Software developers and QA workers use this testing strategy during development. Unit testing isolates code to see if it functions as intended. Unit testing is a crucial phase in the development process because, if done correctly, it can assist discover code issues that may be harder to find later.Unit testing is part of test-driven development (TDD), which builds a product through continuous testing and revision. This is the first level of software testing before integration testing. Unit tests are usually isolated to ensure no foreign code or functions are used. Manual testing is usually automated.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-semibold leading-5 text-white">
             What are the differences between React, Angular and Vue JS?
            </h6>
            <p className="mb-3 text-lg text-white">
            React is a UI library; Angular is a complete front-end framework; and Vue.js is a progressive framework. Without requiring a specific project structure, React can be used as a library for rendering UI elements. App construction blocks called React Elements. They are updated more efficiently by React DOM than by DOM, increasing their strength. Components are separate, interchangeable pieces of an application. They take in props and produce user-viewable elements. JSX (JavaScript XML), a language extension that combines HTML and JavaScript, is typically used in conjunction with React, which is developed on the JavaScript platform. The only emphasis of the Vue.js core library is the View layer. It is referred to as a progressive framework since we may enhance its features using official and unofficial packages, like Vue Router or Vuex, to make it a genuine framework. The initial framework for AngularJS is an MVC (Model-View-Controller) framework. Although Angular templates can also be written in Angular template syntax with unique directives to render multiple elements and output reactive data, they are often written in HTML.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
};

export default MyBlog;