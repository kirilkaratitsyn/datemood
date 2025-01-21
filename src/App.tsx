import React, { useState } from 'react';
import { Heart, Home, MapPin, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface DateIdea {
  title: string;
  description: string;
  mood: string;
  location: 'home' | 'outside';
  imageUrl: string;
}

const moods = [
  { emoji: '😊', name: 'CHEERFUL' },
  { emoji: '🤔', name: 'REFLECTIVE' },
  { emoji: '🥰', name: 'ROMANTIC' },
  { emoji: '🤣', name: 'HUMOROUS' },
  { emoji: '😎', name: 'CHILL' },
  { emoji: '🤗', name: 'PLAYFUL' }
];

const dateIdeas: DateIdea[] = [
  {
    title: 'Cozy Movie Marathon',
    description: 'Pick your favorite movies, prepare snacks, and spend quality time together.',
    mood: 'CHILL',
    location: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80'
  },
  {
    title: 'Cooking Adventure',
    description: 'Choose a new recipe and create a delicious meal together.',
    mood: 'CHEERFUL',
    location: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sunset Picnic',
    description: 'Pack some treats and find a beautiful spot to watch the sunset.',
    mood: 'ROMANTIC',
    location: 'outside',
    imageUrl: 'https://images.unsplash.com/photo-1596662100219-a19b9d0e3c78?auto=format&fit=crop&q=80'
  },
  {
    title: 'Board Game Night',
    description: 'Challenge each other with your favorite board games.',
    mood: 'PLAYFUL',
    location: 'home',
    imageUrl: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80'
  },
  {
    title: 'Art Gallery Visit',
    description: 'Explore local exhibitions and discuss art together.',
    mood: 'REFLECTIVE',
    location: 'outside',
    imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80'
  },
  {
    title: 'Comedy Show',
    description: 'Share laughs at a local comedy club or watch stand-up specials.',
    mood: 'HUMOROUS',
    location: 'outside',
    imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&q=80'
  }
];

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<'home' | 'outside' | ''>('');

  const filteredDates = dateIdeas.filter(date => 
    (!selectedMood || date.mood === selectedMood) &&
    (!selectedLocation || date.location === selectedLocation)
  );

  const isDark = theme === 'dark';

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
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Discover perfect date ideas<br />based on your mood
          </h2>
          <p className={`text-2xl mb-12 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>How are you feeling today?</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Moods */}
          <div className={`p-6 rounded-xl transition-colors duration-200 ${
            isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Select Your Mood</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {moods.map((mood) => (
                <button
                  key={mood.name}
                  onClick={() => setSelectedMood(mood.name === selectedMood ? '' : mood.name)}
                  className={`
                    flex items-center gap-2 p-3 rounded-xl border
                    transition-all duration-200
                    ${selectedMood === mood.name 
                      ? 'bg-purple-500/10 border-purple-500 text-purple-500' 
                      : `border-purple-500/20 hover:border-purple-500/50 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`
                    }
                  `}
                >
                  <span className="text-xl">{mood.emoji}</span>
                  <span className="font-medium">{mood.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className={`p-6 rounded-xl transition-colors duration-200 ${
            isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
          }`}>
            <h3 className="text-xl font-semibold mb-4">Choose Location</h3>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedLocation(selectedLocation === 'home' ? '' : 'home')}
                className={`
                  flex items-center justify-center gap-2 p-3 rounded-xl border
                  transition-all duration-200
                  ${selectedLocation === 'home'
                    ? 'bg-purple-500/10 border-purple-500 text-purple-500'
                    : `border-purple-500/20 hover:border-purple-500/50 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`
                  }
                `}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">HOME</span>
              </button>
              <button
                onClick={() => setSelectedLocation(selectedLocation === 'outside' ? '' : 'outside')}
                className={`
                  flex items-center justify-center gap-2 p-3 rounded-xl border
                  transition-all duration-200
                  ${selectedLocation === 'outside'
                    ? 'bg-purple-500/10 border-purple-500 text-purple-500'
                    : `border-purple-500/20 hover:border-purple-500/50 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`
                  }
                `}
              >
                <MapPin className="w-5 h-5" />
                <span className="font-medium">OUTSIDE</span>
              </button>
            </div>
          </div>
        </div>

        {/* Date Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDates.map((date, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden group hover:scale-[1.02] transition-all duration-200 ${
                isDark ? 'bg-[#25252D]' : 'bg-white shadow-sm'
              }`}
            >
              <div className="relative h-48">
                <img
                  src={date.imageUrl}
                  alt={date.title}
                  className="w-full h-full object-cover"
                />
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
                  <span className="bg-purple-500/20 text-purple-500 text-sm px-3 py-1 rounded-full">
                    {date.mood}
                  </span>
                  <span className="bg-purple-500/20 text-purple-500 text-sm px-3 py-1 rounded-full">
                    {date.location.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;