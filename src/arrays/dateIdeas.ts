export interface DateIdea {
  title: string;
  description: string;
  mood: string;
  location: 'home' | 'outside';
  imageUrl: string;
}

export const dateIdeas: DateIdea[] = [
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
      imageUrl: ''
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
    },

    {
      title: 'Stargazing Night',
      description: 'Find a quiet spot away from city lights and enjoy the stars.',
      mood: 'ROMANTIC',
      location: 'outside',
      imageUrl: ''
    },
    {
      title: 'Wine Tasting',
      description: 'Visit a local vineyard and enjoy tasting different wines.',
      mood: 'LOVING',
      location: 'outside',
      imageUrl: ''
    },
    {
      title: 'Spa Day at Home',
      description: 'Create a relaxing spa experience with massages and facials.',
      mood: 'RELAXED',
      location: 'home',
      imageUrl: 'https://images.unsplash.com/photo-1589927986089-3581237890b0?auto=format&fit=crop&q=80'
    },
    {
      title: 'Visit a Farmers Market',
      description: 'Explore local produce and enjoy fresh snacks together.',
      mood: 'CHEERFUL',
      location: 'outside',
      imageUrl: ''
    }
]; 