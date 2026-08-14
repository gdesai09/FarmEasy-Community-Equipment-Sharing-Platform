import {
  LocationEditIcon,
  SearchIcon,
  CalendarDays,
  MapPin,
  Tractor,
} from "lucide-react";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f5EDE1] px-6 py-16 flex flex-col items-center text-center">
        {/* Location Badge */}
        <div className="flex items-center justify-center gap-2 rounded-xl w-45 text-sm text-slate-800 bg-[#5C8C5E]">
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
    </>
  );
};

export default Homepage;
