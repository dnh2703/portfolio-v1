import { ExperienceItem } from '@/components/experience-item';
import React from 'react';
import Image from 'next/image';
import { Link } from 'next-transition-router';
import { VelocityScroll } from '@/components/velocity-scroll';
import SmoothScroll from '@/components/smooth-scroll';

const PortfolioPage = () => {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <div className="relative flex min-h-screen justify-center bg-[#FBFDFF] text-[#23272A]">
          <div className="w-full max-w-screen-lg px-4">
            {/* Navbar */}
            <div className="flex items-center justify-between">
              <nav className="flex items-center gap-2">{/* <Link href="/">home</Link> */}</nav>
              <Link href="/test">test</Link>
            </div>
            <VelocityScroll
              text="Welcome"
              row={2}
              defaultVelocity={5}
              contentClassName="text-white"
              className="font-display gap-10 bg-black text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
            />

            {/* Main Section */}
            <div className="flex flex-col justify-between gap-10 lg:flex-row">
              <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
                <div className="flex flex-col items-center">
                  <div className="mb-6 inline-flex rounded-full border-[3.5px] border-[#42A5F5] p-1">
                    <Image
                      src="/images/avatar.png"
                      alt="Profile"
                      width={120}
                      height={120}
                      className="rounded-full bg-gradient-to-t from-[#c3e4ff] to-[#42A5F5]"
                    />
                  </div>
                  <h1 className="mb-2 text-2xl font-bold">I&apos;m Johnny Dang</h1>
                  <p className="mb-6 text-sm font-medium">
                    Web Developer based in Ha Noi, Viet Nam.
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 lg:py-24">
                <div className="mb-10">
                  <div className="flex flex-col gap-4 font-light">
                    <p className="">
                      In late 2022, I decided to dive into the world of coding. The prospect of
                      creating something from nothing, of bringing ideas to life through lines of
                      code, ignited a spark of excitement in me. I threw myself into learning with
                      enthusiasm, absorbing everything I could about web development.
                    </p>
                    <p>
                      {`  My main focus these days is building accessible user interfaces for our
                      customers at Klaviyo. I most enjoy building software in the sweet spot where
                      design and engineering meet — things that look good but are also built well
                      under the hood. In my free time, I've also released an online video course
                      that covers everything you need to know to build a web app with the Spotify
                      API.`}
                    </p>
                    <p>
                      {`  When I’m not at the computer, I’m usually rock climbing, reading, hanging out
                      with my wife and two cats, or running around Hyrule searching.`}
                    </p>
                  </div>
                </div>

                {/* Working Experience */}
                <div className="mb-10 border-t border-gray-200 pt-4" id="experience">
                  <h3 className="mb-4 text-lg font-bold">Experience</h3>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <ExperienceItem
                        key={index}
                        logo="https://placehold.co/40x40"
                        position="Web Developer"
                        company="VMO Holdings"
                        period="Oct 2023 - Present"
                      />
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div></div>
                {/* Certifications */}
                <div className="mb-10 border-t border-gray-200 pt-4">
                  <h3 className="mb-4 text-lg font-bold">Awards & Recognition</h3>
                  <div className="flex items-center justify-between rounded-full bg-white p-4 shadow-sm">
                    <div className="flex items-center space-x-4">
                      <Image
                        src="https://placehold.co/40x40"
                        alt="Awwwards"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-bold">Website of the Day</p>
                        <p className="text-sm text-[#848484]">Awwwards</p>
                      </div>
                    </div>
                    <span className="flex items-center text-sm text-[#848484]">Feb 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default PortfolioPage;
