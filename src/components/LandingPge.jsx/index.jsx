/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { IoLocation, IoMenu } from "react-icons/io5";
const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-background-img">
        <div className="py-11 max-w-[1440px] mx-auto  ">
          {/* hero section start*/}
          <section className="bg-banner-img bg-cover text-white  md:h-[861px] w-full flex flex-col gap-20 justify-between">
            {/* sonik text image */}
            <div className="hidden md:pt-[137px] pt-10 md:flex flex-row justify-center">
              <Image alt="sonik" src={"/sonik.png"} width={265} height={75} />
            </div>
            {/* sonik text image mobile*/}
            <div className="md:hidden md:pt-[137px] pt-10 flex flex-row justify-center">
              <Image alt="sonik" src={"/sonik.png"} width={162} height={46} />
            </div>
            {/* download sonik button */}
            <button className="flex flex-row items-center justify-start gap-1 md:gap-8 pl-4 md:pl-[117px] pb-4 md:pb-[117px]">
              <h4 className="font-phudu uppercase text-2xl md:text-[40px] font-semibold">
                Download sonik
              </h4>
              <Image alt="arrow" src={"/arrow.png"} width={52} height={52} />
            </button>
          </section>
          {/* hero section end*/}
          {/* main starts here */}
          <main className=" md:pt-[260px] pb-16 md:pb-[123px] px-4 md:px-0">
            {/*  city's entertainment start */}
            <section className="flex md:flex-row flex-col-reverse justify-between gap-[140px] md:gap-[82px] md:pt-[74px] md:pl-[170px] md:pr-[139px] md:pb-[90px] py-20 md:py-0">
              {/*  left card */}
              <div className="w-full relative bg-black rounded-3xl z-10">
                {/* heart icon */}
                <div className="hidden md:block absolute -top-48 -left-8 z-30">
                  <Image
                    alt="heart icon"
                    src={"/heart.png"}
                    width={249}
                    height={176}
                  />
                </div>
                {/* star icon */}
                <div className="hidden md:block absolute -left-10 -bottom-10">
                  <Image
                    alt="heart icon"
                    src={"/star.png"}
                    width={109}
                    height={133}
                  />
                </div>
                {/* icon for mobile start*/}
                {/* heart icon */}
                <div className="md:hidden absolute -top-24 right-3 z-30 ">
                  <Image
                    alt="heart icon"
                    src={"/heart.png"}
                    width={144}
                    height={82}
                  />
                </div>
                {/* star icon */}
                <div className="md:hidden absolute left-2 -bottom-20">
                  <Image
                    alt="heart icon"
                    src={"/star.png"}
                    width={109}
                    height={133}
                  />
                </div>
                {/* icon for mobile end here */}
                {/* mobile image card*/}
                <div className="hidden md:block w-full relative mt-[40px] ml-[72px] mr-3 mb-[90px] ">
                  {/* image 1 */}
                  <Image
                    alt="mobile image"
                    src={"/mobile-1.png"}
                    width={294}
                    height={580}
                  />
                  {/* image 2 */}
                  <div className="absolute left-[88px] top-[63px]">
                    <Image
                      alt="mobile image"
                      src={"/mobile-2.png"}
                      width={351}
                      height={554}
                    />
                  </div>
                </div>
                {/* mobile image for mobile view */}
                <div className="w-full md:hidden relative px-5 py-14">
                  {/* image 1 */}
                  <Image
                    alt="mobile image"
                    src={"/mobile-1.png"}
                    width={218}
                    height={430}
                  />
                  {/* image 2 */}
                  <div className="absolute left-14 top-24">
                    <Image
                      alt="mobile image"
                      src={"/mobile-2.png"}
                      width={259}
                      height={433}
                    />
                  </div>
                </div>
              </div>
              {/*  right card */}
              <div className="w-full relative flex flex-col justify-center ">
                {/* texts div */}
                <div className="">
                  <h2 className="uppercase text-white text-[30px] md:text-[58px] font-semibold font-phudu mb-3 md:mb-6">
                    your city's entertainment all in one place
                  </h2>
                  <p className="font-medium text-lg md:text-xl  font-inter">
                    Discover your favorite events with ease
                  </p>
                  {/* button container */}
                  <div className="flex flex-row gap-3 md:gap-8 mt-4 md:mt-20">
                    {/* apple button */}
                    <button className="bg-[#383535] flex flex-row items-center gap-2 px-4 md:px-6 py-1 md:py-2 rounded-full">
                      <Image
                        alt="logo-apple"
                        src={"/logo-apple.png"}
                        width={29}
                        height={29}
                      />
                      <p className="text-2xl font-inter">iOS</p>
                    </button>
                    {/* android button */}
                    <button className="bg-[#383535] flex flex-row items-center gap-2 px-4 md:px-6 py-1 md:py-2 rounded-full">
                      <Image
                        alt="logo-android"
                        src={"/logo-android.png"}
                        width={29}
                        height={29}
                      />
                      <p className="text-2xl font-inter">ANDROID</p>
                    </button>
                  </div>
                </div>
                {/* earth icon */}
                <div className="hidden md:block absolute  md:-top-48 -right-0 z-30 ">
                  <Image
                    alt="earth icon"
                    src={"/earth.png"}
                    width={184}
                    height={192}
                  />
                </div>
                {/* music icon */}
                <div className="hidden md:block absolute right-36 bottom-0">
                  <Image
                    alt="music icon"
                    src={"/music.png"}
                    width={109}
                    height={133}
                  />
                </div>
                {/* mobile icons start*/}
                {/* earth icon */}
                <div className="md:hidden absolute -top-16 -right-0 z-30 ">
                  <Image
                    alt="earth icon"
                    src={"/earth.png"}
                    width={87}
                    height={90}
                  />
                </div>
                {/* music icon */}
                <div className="md:hidden absolute left-4 -bottom-24">
                  <Image
                    alt="music icon"
                    src={"/music.png"}
                    width={77}
                    height={87}
                  />
                </div>
                {/* mobile icons end*/}
              </div>
            </section>
            {/*  city's entertainment end */}
            {/* discover section start */}
            <section className="mt-9 md:mx-[160px] bg-[#0D0D0D] flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-center py-12 md:px-16 px-4 ">
              {/* left */}
              {/*  */}
              <div className="hidden md:block w-3/12">
                <Image
                  alt="sonik-icon"
                  src={"/s-icon.png"}
                  width={204}
                  height={204}
                />
              </div>
              {/* for mobile */}
              <div className="md:hidden w-full flex flex-row justify-center">
                <Image
                  alt="sonik-icon"
                  src={"/s-icon.png"}
                  width={127}
                  height={127}
                />
              </div>
              {/* middle */}
              <div className="md:w-6/12 w-full">
                <h2 className="uppercase text-[40px] font-semibold font-phudu">
                  Discover more with the app
                </h2>
                <div className="mt-7 font-inter">
                  {/* 1 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/search-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p>Find events in your city</p>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/trending-up-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p>Stay up to date, save and share events</p>
                  </div>
                  {/* 3 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/ticket-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p>Purchase, send and access all in one place</p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="md:w-3/12 flex flex-col items-end">
                <Image
                  alt="qr code"
                  src={"/qr-code.png"}
                  width={155}
                  height={155}
                />
                {/*text & icon container */}
                <div className="flex flex-row items-center gap-1 mt-5">
                  <p className="text-[15px]">Available at:</p>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      alt="appstore-icon"
                      src={"/logo-apple-appstore.png"}
                      width={26}
                      height={26}
                    />
                    <Image
                      alt="playstore-icon"
                      src={"/logo-google-playstore.png"}
                      width={26}
                      height={26}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* main end here */}
        </div>
      </div>
      {/* footer start */}
      <footer className="py-[61px] bg-landing-footer-bg">
        <div className="max-w-[1440px] mx-auto">
          {/* top */}
          <div className="flex flex-col md:flex-row gap-3 justify-between items-start px-[88px] md:px-0">
            {/* left */}
            <div className="w-full   ">
              <Image alt="sonik" src={"/sonik.png"} width={97} height={28} />
            </div>
            {/* middle */}
            <div className="w-full flex flex-col gap-3 md:items-start md:pl-40">
              <h5 className="font-bold text-base">Site Menu</h5>
              <a href="#" className="underline text-[#898989]">
                Home
              </a>
            </div>
            {/* right */}
            <div className="w-full flex flex-col gap-3 ">
              <h5 className="font-bold text-base">Social Icons</h5>
              <Image
                alt="instagram"
                src={"/instagram-icon.png"}
                width={15}
                height={15}
              />
            </div>
          </div>
          {/* copyright */}
          <div className="text-center text-[#585858] pt-10 text-base font-inter">
            <a href="#" className="underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
