import React, { useState, Suspense, lazy, useEffect } from 'react';
import { Heart, Home, MapPin, Moon, Sun, LucideIcon, Heart as FilledHeart } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { DateIdea, dateIdeas } from './arrays/dateIdeas';
import { moods } from './arrays/moods';
import { locationMaps } from './arrays/locationMaps';



function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<'home' | 'outside' | ''>('');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [wishlist, setWishlist] = useState<DateIdea[]>(() => {
    // Load wishlist from local storage
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    // Save wishlist to local storage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const filteredDates = dateIdeas.filter(date => 
    (!selectedMood || date.mood === selectedMood) &&
    (!selectedLocation || date.location === selectedLocation)
  );

  const isDark = theme === 'dark';

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const toggleWishlist = (dateIdea: DateIdea) => {
    if (wishlist.includes(dateIdea)) {
      setWishlist(wishlist.filter(item => item !== dateIdea));
    } else {
      setWishlist([...wishlist, dateIdea]);
    }
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-200 ${
      isDark ? 'bg-[#1C1C23] text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`rounded-2xl p-4 mb-8 flex items-center justify-between transition-colors duration-200 ${
          isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
        }`}>
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-purple-500" />
            <h1 className="text-2xl font-bold">DateMood</h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark 
                ? 'hover:bg-white/10' 
                : 'hover:bg-gray-100'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12 ">
          <h2 className="text-xl md:text-5xl font-bold mb-6 md:leading-tight">
            Discover perfect date ideas<br/>based on your mood
          </h2>
         
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12  border-b border-gray-200 pb-12">
          {/* Moods */}
          <div className={`p-6 rounded-xl transition-colors duration-200 ${
            isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
          }`}>
            <h3 className="text-xl font-semibold mb-1">Select Your Mood</h3>
            <p className={`text-lg mb-3 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>How are you feeling today?</p>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => setSelectedMood(mood.name === selectedMood ? '' : mood.name)}
                  className={`
                    flex items-center gap-2 p-3 rounded-xl border
                    transition-all duration-200 w-full sm:w-auto
                    ${selectedMood === mood.name 
                      ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white' 
                      : `border-purple-500/20 hover:border-purple-500/50 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        } hover:scale-105`
                    }
                  `}
                >
                  <span className="text-xl md:text-2xl">{mood.emoji}</span>
                  <span className="font-medium text-sm md:text-lg">{mood.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className={`p-6 rounded-xl transition-colors duration-200  ${
            isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Choose Location</h3>
            <div className="grid grid-cols-2 gap-3">
              {locationMaps.map(({ name, icon }) => (
                <button
                  key={name}
                  onClick={() => setSelectedLocation(selectedLocation === name ? '' : name)}
                  className={`
                    flex items-center justify-center gap-2 p-3 rounded-xl border
                    transition-all duration-200 hover:scale-105
                    ${selectedLocation === name
                      ? 'bg-gradient-to-r from-purple-400 to-purple-600 text-white'
                      : `border-purple-500/20 hover:border-purple-500/50 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`
                    }
                  `}
                >
                  {React.createElement(icon, { className: 'w-5 h-5' })}
                  <span className="font-medium  text-sm md:text-lg">{name.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Wishlist Section */}
        <div className="mb-12 flex flex-col  border-b border-gray-200 pb-12 ">
          <h2 className="text-xl md:text-5xl font-bold mb-6 leading-tight">Your Wishlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((date, index) => (
              <div key={index} className={`card rounded-xl overflow-hidden group hover:scale-[1.02] ${isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'}`}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{date.title}</h3>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{date.description}</p>
                  <button onClick={() => toggleWishlist(date)} className="mt-4">
                    <FilledHeart className={`w-5 h-5 ${wishlist.includes(date) ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date Ideas Grid */}
        <div className="mb-12"> <h2 className="text-xl md:text-5xl font-bold mb-6 leading-tight">Date Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  border-b border-gray-200 pb-12">
          
          {filteredDates.slice(0, visibleCount).map((date, index) => (
            <div
              key={index}
              className={`card rounded-xl overflow-hidden group hover:scale-[1.02] ${
                isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
              }`}
            >
              <div className="relative h-auto">
                
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark 
                    ? 'from-[#1C1C23]' 
                    : 'from-white'
                } to-transparent opacity-60`} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{date.title}</h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{date.description}</p>
                <div className="flex gap-2">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    {date.mood}
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    {date.location.toUpperCase()}
                  </span>
                </div>
                <button onClick={() => toggleWishlist(date)} className="mt-4">
                  <Heart className={`w-5 h-5 ${wishlist.includes(date) ? 'text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
        {/* Load More Button */}
        {visibleCount < filteredDates.length && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className={`button px-6 py-3 rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50`}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <footer className="text-center mt-12 flex flex-row justify-center items-center gap-2 ">
        <p className="text-lg text-gray-500">Made by <a className=" underline" target="_blank" href="https://karatitsyn.com/">Kiril</a> </p>

        
      </footer>
    </div>
  );
}

export default App;