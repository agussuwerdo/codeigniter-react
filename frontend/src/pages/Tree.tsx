import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

const Tree = () => {
  return (
    <>
      <Breadcrumb pageName="Trees" />
      
      <h1>https://flowbite.com/docs/components/jumbotron/</h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <div
        className="hs-accordion-treeview-root"
        role="tree"
        aria-orientation="vertical"
      >
        {/*  1st Level Accordion Group */}
        <div
          className="hs-accordion-group"
          role="group"
          data-hs-accordion-always-open=""
        >
          {/*  1st Level Accordion */}
          <div
            className="hs-accordion active"
            role="treeitem"
            aria-expanded="true"
            id="hs-basic-tree-heading-one"
          >
            {/*  1st Level Accordion Heading */}
            <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
              <button
                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded="true"
                aria-controls="hs-basic-tree-collapse-one"
              >
                <svg
                  className="size-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path
                    className="hs-accordion-active:hidden block"
                    d="M12 5v14"
                  ></path>
                </svg>
              </button>

              <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="shrink-0 size-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">assets</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  End 1st Level Accordion Heading */}

            {/*  1st Level Collapse */}
            <div
              id="hs-basic-tree-collapse-one"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              role="group"
              aria-labelledby="hs-basic-tree-heading-one"
            >
              {/*  2nd Level Accordion Group */}
              <div
                className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100"
                role="group"
                data-hs-accordion-always-open=""
              >
                {/*  2nd Level Nested Accordion */}
                <div
                  className="hs-accordion active"
                  role="treeitem"
                  aria-expanded="true"
                  id="hs-basic-tree-sub-heading-one"
                >
                  {/*  2nd Level Accordion Heading */}
                  <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                    <button
                      className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="true"
                      aria-controls="hs-basic-tree-sub-collapse-one"
                    >
                      <svg
                        className="size-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path
                          className="hs-accordion-active:hidden block"
                          d="M12 5v14"
                        ></path>
                      </svg>
                    </button>

                    <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="shrink-0 size-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">css</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  End 2nd Level Accordion Heading */}

                  {/*  2nd Level Collapse */}
                  <div
                    id="hs-basic-tree-sub-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    role="group"
                    aria-labelledby="hs-basic-tree-sub-heading-one"
                  >
                    {/*  3rd Level Accordion Group */}
                    <div
                      className="hs-accordion-group ps-7 relative before:absolute before:top-0 before:start-3 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100"
                      role="group"
                      data-hs-accordion-always-open=""
                    >
                      {/*  3rd Level Accordion */}
                      <div
                        className="hs-accordion active"
                        role="treeitem"
                        aria-expanded="true"
                        id="hs-basic-tree-sub-level-two-heading-one"
                      >
                        {/*  3rd Level Accordion Heading */}
                        <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                          <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="true"
                            aria-controls="hs-basic-tree-sub-level-two-collapse-one"
                          >
                            <svg
                              className="size-4 text-gray-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path
                                className="hs-accordion-active:hidden block"
                                d="M12 5v14"
                              ></path>
                            </svg>
                          </button>

                          <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-4 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  main
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  End 3rd Level Accordion Heading */}

                        {/*  3rd Level Collapse */}
                        <div
                          id="hs-basic-tree-sub-level-two-collapse-one"
                          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                          role="group"
                          aria-labelledby="hs-basic-tree-sub-level-two-heading-one"
                        >
                          <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                            {/*  3rd Level Item */}
                            <div
                              className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                              role="treeitem"
                            >
                              <div className="flex items-center gap-x-3">
                                <svg
                                  className="shrink-0 size-4 text-gray-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                </svg>
                                <div className="grow">
                                  <span className="text-sm text-gray-800">
                                    main.css
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/*  End 3rd Level Item */}

                            {/*  3rd Level Item */}
                            <div
                              className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                              role="treeitem"
                            >
                              <div className="flex items-center gap-x-3">
                                <svg
                                  className="shrink-0 size-4 text-gray-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                </svg>
                                <div className="grow">
                                  <span className="text-sm text-gray-800">
                                    docs.css
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/*  End 3rd Level Item */}

                            {/*  3rd Level Item */}
                            <div className="px-2">
                              <span className="text-sm text-gray-800">
                                README.txt
                              </span>
                            </div>
                            {/*  End 3rd Level Item */}
                          </div>
                        </div>
                        {/*  End 3rd Level Collapse */}
                      </div>
                      {/*  End 3rd Level Accordion */}

                      {/*  3rd Level Accordion */}
                      <div
                        className="hs-accordion"
                        role="treeitem"
                        aria-expanded="false"
                        id="hs-basic-tree-sub-level-two-heading-two"
                      >
                        {/*  3rd Level Accordion Heading */}
                        <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                          <button
                            className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            aria-expanded="false"
                            aria-controls="hs-basic-tree-sub-level-two-collapse-two"
                          >
                            <svg
                              className="size-4 text-gray-800"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path
                                className="hs-accordion-active:hidden block"
                                d="M12 5v14"
                              ></path>
                            </svg>
                          </button>

                          <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-4 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                              <div className="grow">
                                <span className="text-sm text-gray-800">
                                  tailwind
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*  End 3rd Level Accordion Heading */}

                        {/*  3rd Level Collapse */}
                        <div
                          id="hs-basic-tree-sub-level-two-collapse-two"
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          role="group"
                          aria-labelledby="hs-basic-tree-sub-level-two-heading-two"
                        >
                          <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                            {/*  3rd Level Item */}
                            <div
                              className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                              role="treeitem"
                            >
                              <div className="flex items-center gap-x-3">
                                <svg
                                  className="shrink-0 size-4 text-gray-500"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                </svg>
                                <div className="grow">
                                  <span className="text-sm text-gray-800">
                                    input.css
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/*  End 3rd Level Item */}
                          </div>
                        </div>
                        {/*  End 3rd Level Collapse */}
                      </div>
                      {/*  End 3rd Level Accordion */}

                      {/*  3rd Level Heading */}
                      <div className="py-0.5 px-1.5" role="treeitem">
                        <span className="text-sm text-gray-800">
                          .gitignore
                        </span>
                      </div>
                      {/*  End 3rd Level Heading */}
                    </div>
                    {/*  End 3rd Level Accordion Group */}
                  </div>
                  {/*  End 2nd Level Collapse */}
                </div>
                {/*  End 2nd Level Nested Accordion */}

                {/*  2nd Level Nested Accordion */}
                <div
                  className="hs-accordion"
                  role="treeitem"
                  aria-expanded="false"
                  id="hs-basic-tree-sub-heading-two"
                >
                  {/*  2nd Level Accordion Heading */}
                  <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                    <button
                      className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-tree-sub-collapse-two"
                    >
                      <svg
                        className="size-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path
                          className="hs-accordion-active:hidden block"
                          d="M12 5v14"
                        ></path>
                      </svg>
                    </button>

                    <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="shrink-0 size-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">img</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  End 2nd Level Accordion Heading */}

                  {/*  2nd Level Collapse */}
                  <div
                    id="hs-basic-tree-sub-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="group"
                    aria-labelledby="hs-basic-tree-sub-heading-two"
                  >
                    <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                      {/*  2nd Level Item */}
                      <div
                        className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                        role="treeitem"
                      >
                        <div className="flex items-center gap-x-3">
                          <svg
                            className="shrink-0 size-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <circle cx="10" cy="12" r="2"></circle>
                            <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800">
                              hero.jpg
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*  End 2nd Level Item */}

                      {/*  2nd Level Item */}
                      <div
                        className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                        role="treeitem"
                      >
                        <div className="flex items-center gap-x-3">
                          <svg
                            className="shrink-0 size-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <circle cx="10" cy="12" r="2"></circle>
                            <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800">
                              tailwind.png
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*  End 2nd Level Item */}

                      {/*  2nd Level Item */}
                      <div
                        className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                        role="treeitem"
                      >
                        <div className="flex items-center gap-x-3">
                          <svg
                            className="shrink-0 size-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <circle cx="10" cy="12" r="2"></circle>
                            <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800">
                              untitled.png
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*  End 2nd Level Item */}
                    </div>
                  </div>
                  {/*  End 2nd Level Collapse */}
                </div>
                {/*  End 2nd Level Nested Accordion */}

                {/*  2nd Level Nested Accordion */}
                <div
                  className="hs-accordion"
                  role="treeitem"
                  aria-expanded="false"
                  id="hs-basic-tree-sub-heading-three"
                >
                  {/*  2nd Level Accordion Heading */}
                  <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
                    <button
                      className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      aria-expanded="false"
                      aria-controls="hs-basic-tree-sub-collapse-three"
                    >
                      <svg
                        className="size-4 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path
                          className="hs-accordion-active:hidden block"
                          d="M12 5v14"
                        ></path>
                      </svg>
                    </button>

                    <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                      <div className="flex items-center gap-x-3">
                        <svg
                          className="shrink-0 size-4 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        <div className="grow">
                          <span className="text-sm text-gray-800">js</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  End 2nd Level Accordion Heading */}

                  {/*  2nd Level Collapse */}
                  <div
                    id="hs-basic-tree-sub-collapse-three"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    role="group"
                    aria-labelledby="hs-basic-tree-sub-heading-three"
                  >
                    <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                      {/*  2nd Level Item */}
                      <div
                        className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                        role="treeitem"
                      >
                        <div className="flex items-center gap-x-3">
                          <svg
                            className="shrink-0 size-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                            <circle cx="10" cy="12" r="2"></circle>
                            <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path>
                          </svg>
                          <div className="grow">
                            <span className="text-sm text-gray-800">
                              preline.jpg
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*  End 2nd Level Item */}
                    </div>
                  </div>
                  {/*  End 2nd Level Collapse */}
                </div>
                {/*  End 2nd Level Nested Accordion */}
              </div>
              {/*  2nd Level Accordion Group */}
            </div>
            {/*  End 1st Level Collapse */}
          </div>
          {/*  End 1st Level Accordion */}

          {/*  1st Level Accordion */}
          <div
            className="hs-accordion"
            role="treeitem"
            aria-expanded="false"
            id="hs-basic-tree-heading-two"
          >
            {/*  1st Level Accordion Heading */}
            <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
              <button
                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded="false"
                aria-controls="hs-basic-tree-collapse-two"
              >
                <svg
                  className="size-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path
                    className="hs-accordion-active:hidden block"
                    d="M12 5v14"
                  ></path>
                </svg>
              </button>

              <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="shrink-0 size-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">scripts</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  End 1st Level Accordion Heading */}

            {/*  1st Level Collapse */}
            <div
              id="hs-basic-tree-collapse-two"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="group"
              aria-labelledby="hs-basic-tree-heading-two"
            >
              <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                {/*  1st Level Item */}
                <div
                  className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                  role="treeitem"
                >
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800">preline.js</span>
                    </div>
                  </div>
                </div>
                {/*  End 1st Level Item */}

                {/*  1st Level Item */}
                <div
                  className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                  role="treeitem"
                >
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800">tailwind.js</span>
                    </div>
                  </div>
                </div>
                {/*  End 1st Level Item */}

                {/*  1st Level Item */}
                <div
                  className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                  role="treeitem"
                >
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800">www.js</span>
                    </div>
                  </div>
                </div>
                {/*  End 1st Level Item */}
              </div>
            </div>
            {/*  End 1st Level Collapse */}
          </div>
          {/*  End 1st Level Accordion */}

          {/*  1st Level Accordion */}
          <div
            className="hs-accordion"
            role="treeitem"
            aria-expanded="false"
            id="hs-basic-tree-heading-three"
          >
            {/*  1st Level Accordion Heading */}
            <div className="hs-accordion-heading py-0.5 flex items-center gap-x-0.5 w-full">
              <button
                className="hs-accordion-toggle size-6 flex justify-center items-center hover:bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-expanded="false"
                aria-controls="hs-basic-tree-collapse-three"
              >
                <svg
                  className="size-4 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path
                    className="hs-accordion-active:hidden block"
                    d="M12 5v14"
                  ></path>
                </svg>
              </button>

              <div className="grow hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-1.5 rounded-md cursor-pointer">
                <div className="flex items-center gap-x-3">
                  <svg
                    className="shrink-0 size-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                  </svg>
                  <div className="grow">
                    <span className="text-sm text-gray-800">templates</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  End 1st Level Accordion Heading */}

            {/*  1st Level Collapse */}
            <div
              id="hs-basic-tree-collapse-three"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              role="group"
              aria-labelledby="hs-basic-tree-heading-three"
            >
              <div className="ms-3 ps-3 relative before:absolute before:top-0 before:start-0 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100">
                {/*  1st Level Item */}
                <div
                  className="hs-accordion-selectable hs-accordion-selected:bg-gray-100 px-2 rounded-md cursor-pointer"
                  role="treeitem"
                >
                  <div className="flex items-center gap-x-3">
                    <svg
                      className="shrink-0 size-4 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    </svg>
                    <div className="grow">
                      <span className="text-sm text-gray-800">index.html</span>
                    </div>
                  </div>
                </div>
                {/*  End 1st Level Item */}
              </div>
            </div>
            {/*  End 1st Level Collapse */}
          </div>
          {/*  End 1st Level Accordion */}
        </div>
      </div>
    </>
  );
};

export default Tree;
