import WelcomePrompt from './Welcome'; 
import './Homepg.css'

export default function HomePg() {
  const name = WelcomePrompt();

  return (
    <div className="bg-white h-screen scroll-smooth">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:justify-center lg:items-center h-[50vh]">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {name ? `Hello, ${name}!` : 'Test your Knowledge'}
              <br />
              Put your knowledge to the test to earn attractive prizes!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
             Start by reading the rules before proceeding to play the game!
            </p>
            <div className="mt-10 flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-x-6">
              <a
                href="#rules"
                className=" scroll-smooth rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                href="#levels"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white scroll-smooth"
              >
                Levels
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
