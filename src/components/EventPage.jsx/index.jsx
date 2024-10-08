import Image from "next/image";

import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoLocation, IoMenu } from "react-icons/io5";

const EventPage = () => {
  return (
    <div className="w-full bg-background-img">
      <div className="max-w-[1440px] mx-auto">
        <div className="md:p-11 w-full ">
          {/* hero section start*/}
          <section className="bg-event-banner-bg bg-cover md:h-[856px] relative flex flex-col gap-24 justify-between">
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
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-10">
                <Image
                  alt="sonik image"
                  src={"/sonik.png"}
                  width={168}
                  height={48}
                />
              </div>
              {/*sonik text image for mobile */}
              <div className="absolute md:hidden md:left-1/2 right-2 md:-translate-x-1/2 top-10">
                <Image
                  alt="sonik image"
                  src={"/sonik.png"}
                  width={89}
                  height={36}
                />
              </div>
            </div>
            {/* top section end */}
            {/* bottom start */}
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 md:items-center p-10">
              {/* left */}
              <div>
                <h2 className="font-phudu text-3xl md:text-[64px] font-medium">
                  Folamour
                </h2>
              </div>
              {/* right */}
              <div className="py-2 md:py-4 px-4 md:px-10 bg-white/20 w-fit rounded-xl flex items-center md:gap-32 gap-3">
                <div className="flex gap-2">
                  <p className="font-phudu font-bold text-xl md:text-3xl text-black uppercase">
                    From
                  </p>
                  <p className="font-phudu font-bold text-xl md:text-3xl text-black uppercase">
                    $35
                  </p>
                </div>
                <button className="uppercase bg-[#F3C090] rounded-xl text-black text-lg md:text-xl font-bold px-3 md:px-5 py-2">
                  Buy now
                </button>
              </div>
            </div>
            {/* bottom end */}
          </section>
          {/* hero section end*/}
          {/* w-half container start*/}
          <section className="w-full md:w-1/2 pt-12  md:pl-4">
            {/* events & guests */}
            <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between mb-7 md:pl-6 px-4 md:px-0">
              {/* events */}
              <div className="w-full md:w-3/5 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  events
                </h6>
                <h3 className="uppercase font-phudu text-2xl md:text-3xl font-semibold">
                  Lost in Time | Folamour{" "}
                </h3>
              </div>
              {/* guests */}
              <div className="w-full md:w-2/5 md:pl-10 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  guests
                </h6>
                <h3 className="uppercase font-phudu text-2xl md:text-3xl font-semibold">
                  Adam Port <br></br>
                  Carlita<br></br>
                  Maz
                </h3>
              </div>
            </div>
            {/* location & date/time */}
            <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between mb-7 md:pl-6 px-4 md:px-0">
              {/* location */}
              <div className="w-full md:w-3/5 flex flex-col gap-[6px]">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  location
                </h6>
                <h3 className="uppercase font-phudu text-2xl md:text-3xl font-semibold">
                  Brooklyn Mirage
                </h3>
              </div>
              {/* date/time */}
              <div className="w-full md:w-2/5 flex flex-col gap-[6px] md:pl-10">
                <h6 className="uppercase font-inter text-[12px] font-light">
                  date/time
                </h6>
                <h3 className="uppercase font-phudu text-2xl md:text-3xl font-semibold">
                  Oct 31, 2024
                  <br />
                  8PM - 2AM
                </h3>
              </div>
            </div>
            {/* line */}
            <hr className="my-5 md:my-9 text-white/40" />
            {/* about section */}
            <div className="w-full flex flex-col md:flex-row gap-5 justify-between mb-7 pl-6">
              {/* about */}
              <div className="w-full md:w-3/5 flex flex-col gap-[6px] ">
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
              <div className="w-full md:w-2/5 flex flex-col gap-[6px] md:pl-10">
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
            <hr className="my-5 md:my-9 text-white/40" />
            {/* line up section */}
            <div className="py-3 pl-6">
              <h3 className="font-inter font-semibold text-lg mb-7">Lineup</h3>
              <div className="flex flex-row gap-2 w-full justify-around md:justify-normal">
                {/* card 1 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="md:border-r-2 border-white pr-2">
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
                  <div className="md:border-r-2 border-white pr-2">
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
            <hr className="my-5 md:my-9 text-white/40" />
            {/* venue */}
            <div className=" flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center py-3 pl-6">
              {/* left */}
              <div className="w-full md:w-1/2">
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
              <div className="w-full md:w-1/2 flex flex-col items-center md:gap-6">
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
          <hr className="my-5 md:my-9 text-white/40" />
          {/* Download section start */}
          <section className="md:pl-10 px-3 md:px-0 flex flex-col md:flex-row gap-5 md:gap-12 md:pb-10 ">
            {/* left */}
            <div className="w-full md:w-1/3">
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
                    <p className="text-base md:text-lg">
                      Find events in your city
                    </p>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-row items-center gap-4 pl-2">
                    <Image
                      alt=""
                      src={"/trending-up-outline.png"}
                      width={14}
                      height={14}
                    />
                    <p className="text-base md:text-lg">
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
                    <p className="text-base md:text-lg">
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
                    <p className="text-xl md:text-2xl font-inter">iOS</p>
                  </button>
                  {/* android button */}
                  <button className="bg-[#383535] flex flex-row items-center gap-2 px-4 md:px-6 py-1 md:py-2 rounded-full">
                    <Image
                      alt="logo-android"
                      src={"/logo-android.png"}
                      width={29}
                      height={29}
                    />
                    <p className="text-xl md:text-2xl font-inter">ANDROID</p>
                  </button>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="">
              <h2 className="uppercase leading-relaxed font-phudu text-3xl md:text-[49px] font-semibold py-5 md:py-10">
                More shows <br /> based on your taste
              </h2>
            </div>
          </section>
          {/* Download section end */}
          <hr className="my-5 md:my-9 text-white/40" />
          {/* related events section start */}
          <section className="md:pl-10 md:pb-10 px-4 md:px-0">
            <h3 className="font-inter font-semibold text-lg mb-7">
              Related Events
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
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
      </div>
      {/* footer start */}
      <footer className="w-full bg-black/40 bg-event-footer-bg">
        <div className=" max-w-[1440px] mx-auto py-10 md:py-[61px] md:pl-11 px-4 md:px-0">
          {/* top */}
          <div className="flex flex-col md:flex-row justify-between items-start md:pl-14">
            {/* left */}
            <div className="w-full md:w-3/12  ">
              <div className="">
                <Image alt="sonik" src={"/sonik.png"} width={97} height={28} />
              </div>
              <p className="my-3 md:my-11 text-base">
                Faucibus ornare suspendisse sed nisigittis volutpat odio
                facilisis mauris amet massa velit scelerisque.
              </p>
              <div className="">
                <h5 className="font-bold text-base">Join Our Newsletter</h5>
                <div className="mt-3 md:mt-6 flex flex-col md:flex-row gap-2 md:gap-1">
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
            <div className="w-full md:w-3/12 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between">
              {/* site Menu */}
              <div className="flex flex-col mt-8 md:mt-0 gap-2 md:gap-3 md:items-start">
                <h5 className="font-bold text-base text-center md:text-start">
                  Site Menu
                </h5>
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
              <div className="flex flex-col mt-5 md:mt-0 gap-2 md:gap-3 md:items-start">
                <h5 className="font-bold text-base text-center md:text-start">
                  Information
                </h5>
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
            <div className="w-full md:w-3/12 flex flex-col gap-8 md:gap-16 ">
              {/* Contact US */}
              <div className="flex flex-col gap-3 md:items-start mt-8 md:mt-0">
                <h5 className="font-bold text-base text-center md:text-start">
                  Contact US
                </h5>
                <p className=" text-[#898989]">Phone: (+63) 555 1212</p>
                <p className=" text-[#898989]">Fax: (+63) 555 0100</p>
                <p className=" text-[#898989]">Contact us at: info@mail.com</p>
              </div>
              {/* social icons */}
              <div>
                <h5 className="font-bold text-base text-center md:text-start mb-3">
                  Social Icons
                </h5>
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
          <div className="flex flex-col md:flex-row items-center md:justify-between text-[#585858] pt-10 px-16 text-base font-inter">
            <div className="">Copyright &copy; 2023 - WordPress</div>
            <div className="pr-4">
              <a href="#" className="underline">
                Terms & Conditions
              </a>
              |
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventPage;
