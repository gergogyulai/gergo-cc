import Image from 'next/image';


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-14">
        <div className='fixed flex flex-col gap-2 left-0 p-2 bg-white rounded-r-lg'>
            <a href="https://github.com/gergogyulai/main">
              <div className=' hover:opacity-60'>
                <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-repo ActionListItem-visual ActionListItem-visual--leading">
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                </svg>
              </div>
            </a>

            <a href="https://github.com/gergogyulai/gergoo-cc">
              <div className='hover:opacity-60 py-2'>
              <Image
                src="/next.svg"
                width={24}
                height={24}
                alt="Picture of the author"
              />
              </div>
            </a>

            <a href="https://github.com/gergogyulai">
              <div className=' hover:opacity-60'>
                <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github color-fg-default">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </div>
            </a>

        </div>

        <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">

          <h1 className='text-5xl font-bold'>Gergo's demo page</h1>
          <p className='mt-4 text-xl'>Only old stuff here, nothing new i cloud put here</p>
          <p className='mt-1'>I mainly work with Svelte(kit) and Next.js lately.</p>

          <div className="mt-8 flex flex-col">
            <a
              href="https://fazs.xyz/src/projects/reg-login-frontend/login/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Ugly Ass Signin/Up
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Ugly ass unresponsive login/register page 
              </p>
            </a>

            <a
              href="https://fazs.xyz/src/projects/parallax-page/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Parallax Pages
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Parallax scrolling built with HTML5, CSS this shit doesnt work on mobile and i wont fix it        
              </p>
            </a>

            <a
              href="https://fazs.xyz/src/projects/darkmode/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Local Storage Dark Mode
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Dark mode built with some basic JavaScript, it stores the choice of the user in LocalStorage
              </p>
            </a>

            <a
              href="https://fazs.xyz/src/projects/string-gen/advanced/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                String Generator
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Compile your own string and copy it with one click
              </p>
            </a>

            <a
              href="https://fazs.xyz/src/projects/ios-settings/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                The Worst iOS Settings clone
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2 motion-reduce:transform-none">-&gt;</span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Compile your own string and copy it with one click
              </p>
            </a>
          </div>
          <span className='fixed bg-white text-black bottom-0 p-2 rounded-t-xl'>Temporarily all links lead to the old Fazs.xyz GitHub pages site</span>
        </div>
      </main>
    </>
  )
}