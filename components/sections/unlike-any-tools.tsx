import { Button, IconWrapper } from "../button";
import Container from "../container";
import { LogoLightIllustration } from "../illustration/logolight";
import { ZapIllustration } from "../illustration/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTools = () => (
  <>
    <div className="text-white">
      <Container>
        <div className=" text-center">
          <h2 className="mb-12 text-4xl  md:mb-7 md:text-7xl">
            Unlike any tool <br className="hidden md:inline-block" />
            you’ve used before
          </h2>
          <p className="mx-auto mb-10 max-w-[68rem] text-lg text-primary-text md:text-balance md:text-xl">
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>
      </Container>

      <div className="mx-auto  max-w-[130rem] overflow-hidden md:h-auto md:overflow-auto">
        <div className="grid snap-x snap-mandatory grid-cols-[repeat(4,calc(100%-1.5rem))] gap-6 overflow-x-auto px-8 pb-12 md:grid-cols-3 md:overflow-hidden xl:px-[18rem]">
          <div className="flex min-h-[48rem]  snap-center flex-col items-center justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:col-span-2 md:p-14">
            <KeyboardShortcuts />
            <p className="mb-4 whitespace-nowrap text-3xl">
              Built for your keyboard
            </p>
            <p className="text-md text-primary-text">
              Fly through your tasks with rapid- fire keyboard
              <br className="" /> shortcuts for everything. Literally
              everything.
            </p>
          </div>
          <div className=" relative flex min-h-[48rem]  snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:col-span-1 md:p-14">
            <div className="mask-linear-faded absolute top-[-6.2rem] w-[130%] ">
              <ZapIllustration />
            </div>
            <p className=" mb-4 whitespace-nowrap text-3xl">
              Breathtakingly fast
            </p>
            <p className=" whitespace-nowrap text-md text-primary-text">
              Built for speed with 50ms <br />
              interactions and real-time sync.
            </p>
          </div>
          <div className="group relative flex min-h-[48rem]  snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:col-span-1 md:p-14">
            <div className="pointer-events-none absolute top-[-8.5rem] w-[130%] ">
              <LogoLightIllustration />
            </div>
            <p className="mb-4  text-3xl leading-tight sm:whitespace-nowrap">
              Designed for modern
              <br className="" /> software teams
            </p>
            <p className="whitespace-nowrap text-md text-primary-text">
              Comes with built-in workflows <br />
              that create focus and routine.
            </p>
            <Button
              variant="secondary"
              href="/"
              className="absolute bottom-[21rem] translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opcity] group-hover:transform-none group-hover:opacity-100 md:bottom-[24rem] [&.IconWrapper]:text-[-1.1rem]"
            >
              <div className="whitespace-nowrap">
                <IconWrapper>Linear Method </IconWrapper>
                <span className="ml-[0.8]">Product principles</span>
              </div>

              <svg
                className="ml-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#8A8F98"
              >
                <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
              </svg>
            </Button>
          </div>
          <div className="flex min-h-[48rem]  snap-center flex-col items-center justify-end rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:col-span-2 md:p-14">
            <p className="mb-4 text-3xl">Meet your command line</p>
            <p className="text-md text-primary-text">
              Complete any action in seconds with the global command menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);
