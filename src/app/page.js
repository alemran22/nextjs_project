/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { IoLocation, IoMenu } from "react-icons/io5";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="py-11 max-w-[1440px] mx-auto">
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
        <main className="bg-background-img bg-[#1A1A1A] md:pt-[260px] pb-16 md:pb-[123px] px-4 md:px-0">
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
        {/* footer start */}
        <footer className=" bg-[#121212] py-[61px]">
          {/* top */}
          <div className="flex flex-col md:flex-row gap-3 justify-between items-start px-[88px] md:px-0">
            {/* left */}
            <div className="w-full md:pl-[89px] ">
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
        </footer>
      </div>
      {/* Event page */}
      <div className="max-w-[1440px] mx-auto bg-background-img">
        <div className="md:p-11 w-full ">
          {/* hero section start*/}
          <section className="bg-event-banner-bg md:h-[856px] relative flex flex-col justify-between">
            {/* top section start*/}
            <div className="">
              <div className="p-10 flex gap-2 items-center">
                {/* menuBurger */}
                <button className="text-3xl font-medium">
                  <IoMenu />
                </button>
                <p className="text-[12px] font-inter font-semibold">Menu</p>
              </div>
              {/* sonik text image */}
              <div className="absolute left-1/2 -translate-x-1/2 top-10">
                <Image
                  alt="sonik image"
                  src={"/sonik.png"}
                  width={168}
                  height={48}
                />
              </div>
            </div>
            {/* top section end */}
            {/* bottom start */}
            <div className="flex flex-row justify-between items-center p-10">
              {/* left */}
              <div>
                <h2 className="font-phudu text-[64px] font-medium">Folamour</h2>
              </div>
              {/* right */}
              <div className="py-4 px-10 bg-white/20 w-fit rounded-xl flex items-center gap-32 ">
                <div className="flex gap-2">
                  <p className="font-phudu font-bold text-3xl text-black uppercase">
                    From
                  </p>
                  <p className="font-phudu font-bold text-3xl text-black uppercase">
                    $35
                  </p>
                </div>
                <button className="uppercase bg-[#F3C090] rounded-xl text-black text-xl font-bold px-5 py-2">
                  Buy now
                </button>
              </div>
            </div>
            {/* bottom end */}
          </section>
          {/* hero section end*/}
          {/* w-half container start*/}
          <section className="w-1/2 pt-12 pl-4">
            {/* events & guests */}
            <div className="w-full flex flex-row justify-between mb-7 pl-6">
              {/* events */}
              <div className="w-3/5 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  events
                </h6>
                <h3 className="uppercase font-phudu text-3xl font-semibold">
                  Lost in Time | Folamour{" "}
                </h3>
              </div>
              {/* guests */}
              <div className="w-2/5 pl-10 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  guests
                </h6>
                <h3 className="uppercase font-phudu text-3xl font-semibold">
                  Adam Port <br></br>
                  Carlita<br></br>
                  Maz
                </h3>
              </div>
            </div>
            {/* location & date/time */}
            <div className="w-full flex flex-row justify-between mb-7 pl-6">
              {/* location */}
              <div className="w-3/5 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  location
                </h6>
                <h3 className="uppercase font-phudu text-3xl font-semibold">
                  Brooklyn Mirage
                </h3>
              </div>
              {/* date/time */}
              <div className="w-2/5 flex flex-col gap-[6px] pl-10">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  date/time
                </h6>
                <h3 className="uppercase font-phudu text-3xl font-semibold">
                  Oct 31, 2024<br></br>8PM - 2AM
                </h3>
              </div>
            </div>
            {/* line */}
            <hr className="my-9 text-white/40" />
            {/* about section */}
            <div className="w-full flex flex-row gap-5 justify-between mb-7 pl-6">
              {/* about */}
              <div className="flex flex-col gap-[6px] w-3/5">
                <h5 className=" font-inter text-lg font-medium">About</h5>
                <p className=" font-inter text-sm font-normal">
                  We are stoked to welcome back Folamour and his event brand
                  party, Lost In Time, for Round 2 at the Brooklyn Mirage on
                  October 31st! Last year, the brand made its debut with us at
                  the legendary Brooklyn venue, featuring artists like Iglesias
                  and Melanie...
                </p>
              </div>
              {/* Event Information */}
              <div className="flex flex-col gap-[6px] w-2/5 pl-10">
                <h3 className=" font-inter text-lg font-medium">
                  Event Information
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      alt="info icon"
                      src={"/event-img/information-circle-outline.png"}
                      width={22}
                      height={22}
                    />
                    <p className="font-inter text-[14px] font-normal">
                      This is a 21+ event
                    </p>
                  </div>
                  <p className="pl-8 font-inter text-[14px] font-normal">
                    Presented by Sonik
                  </p>
                  <div className="flex flex-row gap-2 items-center">
                    <Image
                      alt="info icon"
                      src={"/event-img/cash.png"}
                      width={22}
                      height={22}
                    />
                    <p className="font-inter text-[14px] font-normal">
                      You can get a refund if:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* line */}
            <hr className="my-9 text-white/40" />
            {/* line up section */}
            <div className="py-3 pl-6">
              <h3 className="font-inter font-semibold text-lg mb-7">Lineup</h3>
              <div className="flex flex-row gap-2 ">
                {/* card 1 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="border-r-2 border-white pr-2">
                    <Image
                      alt="card-img"
                      src={"/event-img/Rectangle 22541.png"}
                      width={68}
                      height={64}
                    />
                  </div>
                  <h6 className="text-sm font-inter font-bold ">Adam Port</h6>
                </div>
                {/* card 2 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="border-r-2 border-white pr-2">
                    <Image
                      alt="card-img"
                      src={"/event-img/Rectangle 22491.png"}
                      width={68}
                      height={64}
                    />
                  </div>
                  <h6 className="text-sm font-inter font-bold ">CARLITA</h6>
                </div>
                {/* card 3*/}
                <div className="flex flex-col items-center gap-2">
                  <Image
                    alt="card-img"
                    src={"/event-img/image (38).png"}
                    width={68}
                    height={64}
                  />
                  <h6 className="text-sm font-inter font-bold ">MAZ</h6>
                </div>
              </div>
            </div>
            {/* line */}
            <hr className="my-9 text-white/40" />
            {/* venue */}
            <div className=" flex flex-row justify-between items-center py-3 pl-6">
              {/* left */}
              <div className="w-1/2">
                <h3 className="font-inter font-semibold text-lg mb-7">Venue</h3>
                <div className="flex flex-col gap-3">
                  <h6 className="font-inter text-lg font-normal">
                    Brooklyn Mirage
                  </h6>
                  <p className="text-sm font-inter">
                    140 Stewart Ave Brooklyn, NY 11237
                  </p>
                  <a
                    className="text-sm font-inter"
                    href="https://www.avant-gardner.com"
                  >
                    https://www.avant-gardner.com
                  </a>
                  <button className="max-w-max flex flex-row gap-2 items-center bg-[#383535] py-2 px-3 rounded-2xl">
                    <IoLocation />
                    <p className=" uppercase font-inter text-sm">
                      Open in maps
                    </p>
                  </button>
                  <div className=" flex flex-row gap-3 items-center">
                    <Image
                      alt="home icon"
                      src={"/event-img/storefront-sharp.png"}
                      width={22}
                      height={22}
                    />
                    <p>Doors open at 8:00 PM</p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="w-1/2 flex flex-col items-center gap-6">
                <Image
                  alt="venue image"
                  src={"/event-img/image 1.png"}
                  width={160}
                  height={160}
                />
                <button className="uppercase bg-[#7E69FF] px-4 py-2 font-inter text-sm rounded-2xl">
                  Follow
                </button>
              </div>
            </div>
          </section>
          {/* w-half container end*/}
          {/* line */}
          <hr className="my-9 text-white/40" />
          {/* Download section start */}
          <section className="pl-10 flex flex-row gap-12 pb-10 ">
            {/* left */}
            <div className="w-1/3">
              <h3 className="font-inter font-semibold text-lg mb-7">
                Download the SONIK app
              </h3>
              <div className="">
                <div className="mt-7 font-inter flex flex-col gap-5">
                  {/* 1 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/search-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p className=" text-lg">Find events in your city</p>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/trending-up-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p className=" text-lg">
                      Stay up to date, save and share events
                    </p>
                  </div>
                  {/* 3 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/ticket-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p className=" text-lg">
                      Purchase, send and access all in one place
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 md:gap-8 mt-4 md:mt-20 pl-4">
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
            </div>
            {/* right */}
            <div className="">
              <h2 className="uppercase font-phudu text-[49px] font-semibold py-10">
                More shows <br /> based on your taste
              </h2>
            </div>
          </section>
          {/* Download section end */}
          <hr className="my-9 text-white/40" />
          {/* related events section start */}
          <section className="pl-10  pb-10 ">
            <h3 className="font-inter font-semibold text-lg mb-7">
              Related Events
            </h3>
            <div className="flex flex-row ">
              {/* card 1*/}
              <div className="flex flex-col items-center ">
                <div className="p-6 bg-black/25">
                  <Image
                    alt="related image"
                    src={"/event-img/Vector.png"}
                    width={183}
                    height={183}
                  />
                </div>
                <div className="">
                  <h5 className="font-inter font-semibold text-lg mb-[10px]">
                    Lost Boys x Yoyaku
                  </h5>
                  <p className="font-inter text-sm text-[#6A6A6A] mb-1">
                    Thu, Jun 15
                  </p>
                  <p className="font-inter text-sm text-[#6A6A6A]">
                    Forte Antenne
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="flex flex-col items-center ">
                <div className="p-6 bg-black/25">
                  <Image
                    alt="related image"
                    src={"/event-img/Vector.png"}
                    width={183}
                    height={183}
                  />
                </div>
                <div className="">
                  <h5 className="font-inter font-semibold text-lg mb-[10px]">
                    Lost Boys x Yoyaku
                  </h5>
                  <p className="font-inter text-sm text-[#6A6A6A] mb-1">
                    Thu, Jun 15
                  </p>
                  <p className="font-inter text-sm text-[#6A6A6A]">
                    Forte Antenne
                  </p>
                </div>
              </div>
              {/* card 3*/}
              <div className="flex flex-col items-center ">
                <div className="p-6 bg-black/25">
                  <Image
                    alt="related image"
                    src={"/event-img/Vector.png"}
                    width={183}
                    height={183}
                  />
                </div>
                <div className="">
                  <h5 className="font-inter font-semibold text-lg mb-[10px]">
                    Lost Boys x Yoyaku
                  </h5>
                  <p className="font-inter text-sm text-[#6A6A6A] mb-1">
                    Thu, Jun 15
                  </p>
                  <p className="font-inter text-sm text-[#6A6A6A]">
                    Forte Antenne
                  </p>
                </div>
              </div>
              {/* card 4 */}
              <div className="flex flex-col items-center ">
                <div className="p-6 bg-black/25">
                  <Image
                    alt="related image"
                    src={"/event-img/Vector.png"}
                    width={183}
                    height={183}
                  />
                </div>
                <div className="">
                  <h5 className="font-inter font-semibold text-lg mb-[10px]">
                    Lost Boys x Yoyaku
                  </h5>
                  <p className="font-inter text-sm text-[#6A6A6A] mb-1">
                    Thu, Jun 15
                  </p>
                  <p className="font-inter text-sm text-[#6A6A6A]">
                    Forte Antenne
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* related events section end */}
        </div>
        {/* footer start */}
        <footer className="w-full bg-black/40">
          <div className=" max-w-[1440px] mx-auto py-[61px] md:pl-11">
            {/* top */}
            <div className="flex flex-col md:flex-row justify-between items-start px-[88px] md:px-0 md:pl-14">
              {/* left */}
              <div className="w-3/12  ">
                <div className="">
                  <Image
                    alt="sonik"
                    src={"/sonik.png"}
                    width={97}
                    height={28}
                  />
                </div>
                <p className="my-11 text-base">
                  Faucibus ornare suspendisse sed nisigittis volutpat odio
                  facilisis mauris amet massa velit scelerisque.
                </p>
                <div className="">
                  <h5 className="font-bold text-base">Join Our Newsletter</h5>
                  <div className="mt-6 flex flex-row gap-1">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-4 py-3 bg-transparent text-[#898989] text-base outline-none border-2 rounded-lg"
                    />
                    <button
                      type="submit"
                      className="px-7 py-[14px] bg-[#7E69FF] rounded-lg"
                    >
                      JOIN
                    </button>
                  </div>
                </div>
              </div>
              {/* middle */}
              <div className="w-3/12 flex flex-row justify-between">
                {/* site Menu */}
                <div className="flex flex-col gap-3 md:items-start">
                  <h5 className="font-bold text-base">Site Menu</h5>
                  <a href="#" className="underline text-[#898989]">
                    Home
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    Program
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    About US
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    Store
                  </a>
                </div>
                {/* information */}
                <div className="flex flex-col gap-3 md:items-start">
                  <h5 className="font-bold text-base">Information</h5>
                  <a href="#" className="underline text-[#898989]">
                    FAQ
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    Site Map
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    Cookies Policy
                  </a>
                  <a href="#" className="underline text-[#898989]">
                    Contact US
                  </a>
                </div>
              </div>
              {/* right */}
              <div className="w-3/12 flex flex-col md:gap-16 ">
                {/* Contact US */}
                <div className="flex flex-col gap-3 md:items-start">
                  <h5 className="font-bold text-base">Contact US</h5>
                  <p className=" text-[#898989]">Phone: (+63) 555 1212</p>
                  <p className=" text-[#898989]">Fax: (+63) 555 0100</p>
                  <p className=" text-[#898989]">
                    Contact us at: info@mail.com
                  </p>
                </div>
                {/* social icons */}
                <div>
                  <h5 className="font-bold text-base mb-3">Social Icons</h5>
                  <div className="flex flex-row gap-4 text-2xl text-[#898989]">
                    <FaFacebook />
                    <FaTwitter />
                    <FaYoutube />
                    <FaBehance />
                    <FaTiktok />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            {/* copyright */}
            <div className="text-center text-[#585858] pt-10 text-base font-inter">
              <a href="#" className="underline">
                Terms & Conditions
              </a>
              |
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
