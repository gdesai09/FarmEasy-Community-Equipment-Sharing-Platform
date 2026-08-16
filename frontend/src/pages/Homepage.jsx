import {
  LocationEditIcon,
  SearchIcon,
  CalendarDays,
  MapPin,
  Tractor,
  ArrowLeftIcon,
  ArrowRightIcon,
  MessagesSquareIcon,
  Calendar1Icon,
  StarIcon,
} from "lucide-react";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f5EDE1] px-6 py-16 flex flex-col items-center text-center">
        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 rounded-xl w-45 text-sm text-slate-800 bg-[#deeddf]">
          <LocationEditIcon className="h-4 w-4" />
          <p>Now Live in 42 Districts</p>
        </div>

        {/* Main Heading */}
        <p className="mt-7 font-bold text-5xl md:text-6xl leading-tight text-green-950">
          Share Equipment. Share
          <br />
          Strength.
        </p>

        {/* Highlight Heading */}
        <h1 className="mt-2 text-4xl md:text-5xl font-bold text-[#D4A017]">
          Grow Together.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-slate-500 text-base leading-relaxed">
          Borrow a tractor for a day, find a hand for the harvest — the
          <br />
          community marketplace built for farmers, by farmers.
        </p>

        {/* Search Box */}
        <div className="bg-white flex items-center p-2 rounded-2xl mt-8 w-full max-w-[650px] shadow-sm">
          {/* Looking For */}
          <div className="flex flex-row gap-2 items-center text-left px-4 py-2">
            <Tractor className="h-4 w-4 text-slate-500" />

            <div className=" mt-1">
              <p className="text-xs font-semibold text-slate-400 uppercase">
                Looking For
              </p>
              <p className="text-sm text-slate-700">Equipment or Labour</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-slate-200" />

          {/* Location */}
          <div className="flex flex-row gap-2 items-center text-left px-4 py-2">
            <MapPin className="h-10 w-5 text-slate-500" />

            <div className="mt-1">
              <p className="text-xs font-semibold text-slate-400 uppercase">
                Near
              </p>
              <p className="text-sm text-slate-700">Nashik, Maharashtra</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-10 bg-slate-200" />

          {/* Date */}
          <div className="flex flex-row gap-2 text-left px-4 py-2">
            <CalendarDays className="h-10 w-5 text-slate-500" />

            <div className="mt-1">
              <p className="text-xs font-semibold text-slate-400 uppercase">
                When
              </p>

              <p className="text-sm text-slate-500">Add dates</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-xl px-5 py-3 transition hidden md:block">
            <SearchIcon className="h-4 w-4" />
            <span>Search</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-5">
          <button className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-xl transition">
            <MapPin className="h-4 w-4" />
            Browse Nearby
          </button>

          <button className="border border-slate-300 hover:border-green-700 text-slate-600 hover:text-green-800 px-6 py-3 rounded-xl transition">
            List Your Equipment
          </button>
        </div>

        {/* Statistics */}
        <div className="flex items-center justify-center gap-14 mt-14">
          {/* Equipment */}
          <div>
            <p className="text-2xl font-bold text-green-900">3,400+</p>
            <p className="text-xs text-slate-500 mt-1">Equipment Listed</p>
          </div>

          {/* Farmers */}
          <div>
            <p className="text-2xl font-bold text-green-900">1,900+</p>
            <p className="text-xs text-slate-500 mt-1">Verified Farmers</p>
          </div>

          {/* Rentals */}
          <div>
            <p className="text-2xl font-bold text-green-900">12,000+</p>
            <p className="text-xs text-slate-500 mt-1">Successful Rentals</p>
          </div>

          {/* Rating */}
          <div className="hidden md:block">
            <p className="text-2xl font-bold text-green-900">4.8★</p>
            <p className="text-xs text-slate-500 mt-1">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Equipments */}

      <div>
        <div className="flex justify-between p-2">
          <div>
            <h4 className="font-bold text-[#D4A017] p-3">FEATURED THIS WEEK</h4>
            <h2 className="font-bold text-4xl text-green-900 p-2">
              Equipment Near You
            </h2>
          </div>
          <button className="border rounded border-green-900  text-[#2E4F3A] hover:bg-[#2E4F3A] hover:text-white hover:font-bold px-2 h-10 mt-8 text-sm flex items-center gap-2">
            View All
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* How Farmeasy Work */}

      <div className="bg-[#F5EDE1] px-6 md:px-16 py-16">
        {/* Section Heading */}
        <div>
          <h4 className="font-bold text-[#D4A017] text-sm tracking-wider">
            SIMPLE BY DESIGN
          </h4>

          <h2 className="font-bold text-4xl text-green-900 mt-2">
            How FarmEasy Works
          </h2>

          <p className="text-sm text-slate-500 mt-3">
            Four steps between an idle tractor and a finished field.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-[#D4A017] font-bold text-lg">01</h4>

            <div className="rounded-xl bg-[#deeddf] h-12 w-12 p-2.5 mt-5">
              <SearchIcon className="text-[#2E4F3A] w-full h-full" />
            </div>

            <h4 className="text-[#2E4F3A] font-bold text-lg mt-5">
              Search Nearby
            </h4>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Find equipment or labor within your radius, filtered by type,
              price and date.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-[#D4A017] font-bold text-lg">02</h4>

            <div className="rounded-xl bg-[#deeddf] h-12 w-12 p-2.5 mt-5">
              <MessagesSquareIcon className="text-[#2E4F3A] w-full h-full" />
            </div>

            <h4 className="text-[#2E4F3A] font-bold text-lg mt-5">
              Message the owner
            </h4>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Ask questions, confirm condition, and agree on pickup or delivery.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-[#D4A017] font-bold text-lg">03</h4>

            <div className="rounded-xl bg-[#deeddf] h-12 w-12 p-2.5 mt-5">
              <Calendar1Icon className="text-[#2E4F3A] w-full h-full" />
            </div>

            <h4 className="text-[#2E4F3A] font-bold text-lg mt-5">
              Book your dates
            </h4>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Reserve on the calendar and pay securely through FarmEasy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h4 className="text-[#D4A017] font-bold text-lg">04</h4>

            <div className="rounded-xl bg-[#deeddf] h-12 w-12 p-2.5 mt-5">
              <StarIcon className="text-[#2E4F3A] w-full h-full" />
            </div>

            <h4 className="text-[#2E4F3A] font-bold text-lg mt-5">
              Return & rate
            </h4>

            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Hand it back, leave a review, and build trust in your community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
