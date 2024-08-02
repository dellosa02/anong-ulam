import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import adoboImage from './adobo.jpg'; // Import the adobo image
import sinigangImage from './sinigang.jpg';
import kareKareImage from './karekare.jpg';
import lechonImage from './lechon.jpeg';
import pancitImage from './pancit.jpg';
import bicolExpressImage from './bicol-express.jpg';
import tinolaImage from './tinola.jpg';
import laingImage from './laing.jpg';
import sisigImage from './sisig.jpg';
import dinuguanImage from './dinuguan.jpg';
import bulaloImage from './bulalo.jpg';
import kalderetaImage from './kaldereta.jpg';
import longanissaImage from './longanissa.jpg';
import paksiwImage from './paksiw.jpg';
import munggoImage from './ginisang-munggo.jpg';
import tokwatBaboyImage from './tokwat-baboy.jpg';
import kilawinImage from './kilawin.jpg';
import tortangTalongImage from './tortang-talong.jpg';
import bopisImage from './bopis.jpg';
import cornedBeefSilogImage from './cornedbeef-silog.jpeg';
import tapaImage from './tapa.jpg';
import tinapaImage from './tinapa.jpg';
import inasalImage from './inasal.jpg';
import adobongPusitImage from './adobong-pusit.jpg';
import inihawNaLiempoImage from './inihaw-liempo.jpg';
import bistekImage from './bistek.jpg';
import afritadaImage from './arfitada.jpg';
import mechadoImage from './mechado.jpg';
import nilagaImage from './nilaga.jpg';
import pocheroImage from './pochero.jpg';
import igadoImage from './igado.jpg';
import bagnetImage from './bagnet.jpg';
import pigarPigarImage from './pigar-pigar.jpg';
import pancitMalabonImage from './pancit-malabotn.jpg';
import pancitHabhabImage from './pancit-habhab.jpg';
import pancitLomiImage from './pork-lomi.jpg';
import pancitBihonImage from './pancit-bihon.jpg';
import pancitCantonImage from './pancit-canton.jpg';
import lumpiangShanghaiImage from './lumpiang-shanghai.jpg';
import lumpiangUbodImage from './lumpiang-ubod.jpg';
import ginataangKuholImage from './ginataangg-kuhol.jpg';
import betuteTugakImage from './betute-tugak.jpeg';


interface Ulam {
  name: string;
  recipe: string;
  imageUrl: string;
}

const mockData: Ulam[] = [
  {
    name: 'Adobo',
    recipe:
      'Ingredients: Chicken, Soy Sauce, Vinegar, Garlic, Bay Leaves, Peppercorns. Steps: 1. Marinate chicken. 2. Cook garlic, add chicken and marinade. 3. Simmer until tender.',
    imageUrl: adoboImage,
  },
  {
    name: 'Sinigang',
    recipe:
      'Ingredients: Pork, Tamarind, Tomatoes, Radish, String Beans, Water Spinach. Steps: 1. Boil pork. 2. Add tamarind and vegetables. 3. Simmer until cooked.',
    imageUrl: sinigangImage,
  },
  {
    name: 'Kare-Kare',
    recipe:
      'Ingredients: Oxtail, Peanut Butter, Banana Flower, Eggplant, Bok Choy. Steps: 1. Cook oxtail. 2. Add peanut butter and vegetables. 3. Simmer until tender.',
    imageUrl: kareKareImage,
  },
  {
    name: 'Lechon',
    recipe:
      'Ingredients: Whole Pig, Salt, Pepper, Lemongrass, Garlic. Steps: 1. Stuff pig with spices. 2. Roast over charcoal. 3. Serve with liver sauce.',
    imageUrl: lechonImage,
  },
  {
    name: 'Pancit',
    recipe:
      'Ingredients: Rice Noodles, Chicken, Shrimp, Vegetables. Steps: 1. Sauté ingredients. 2. Add noodles. 3. Cook until done.',
    imageUrl: pancitImage,
  },
  {
    name: 'Bicol Express',
    recipe:
      'Ingredients: Pork, Coconut Milk, Chilies, Shrimp Paste. Steps: 1. Sauté pork. 2. Add coconut milk and chilies. 3. Simmer until tender.',
    imageUrl: bicolExpressImage,
  },
  {
    name: 'Tinola',
    recipe:
      'Ingredients: Chicken, Papaya, Ginger, Spinach. Steps: 1. Sauté ginger. 2. Add chicken and cook. 3. Add papaya and spinach. 4. Simmer until done.',
    imageUrl: tinolaImage,
  },
  {
    name: 'Laing',
    recipe:
      'Ingredients: Taro Leaves, Coconut Milk, Chilies, Shrimp Paste. Steps: 1. Cook taro leaves. 2. Add coconut milk and chilies. 3. Simmer until tender.',
    imageUrl: laingImage,
  },
  {
    name: 'Sisig',
    recipe:
      'Ingredients: Pork Face, Onion, Chilies, Mayonnaise. Steps: 1. Boil and grill pork. 2. Chop finely. 3. Sauté with onions and chilies. 4. Serve with mayonnaise.',
    imageUrl: sisigImage,
  },
  {
    name: 'Dinuguan',
    recipe:
      'Ingredients: Pork, Pig Blood, Vinegar, Garlic, Chili. Steps: 1. Cook pork. 2. Add blood and vinegar. 3. Simmer with garlic and chili.',
    imageUrl: dinuguanImage,
  },
  {
    name: 'Bulalo',
    recipe:
      'Ingredients: Beef Shank, Corn, Cabbage, Potatoes. Steps: 1. Boil beef shank. 2. Add vegetables. 3. Simmer until tender.',
    imageUrl: bulaloImage,
  },
  {
    name: 'Kaldereta',
    recipe:
      'Ingredients: Beef, Tomato Sauce, Liver Spread, Bell Peppers. Steps: 1. Cook beef. 2. Add tomato sauce and liver spread. 3. Simmer with bell peppers.',
    imageUrl: kalderetaImage,
  },
  {
    name: 'Longganisa',
    recipe:
      'Ingredients: Ground Pork, Garlic, Vinegar, Sugar. Steps: 1. Mix ingredients. 2. Form into sausages. 3. Cook until done.',
    imageUrl: longanissaImage,
  },
  {
    name: 'Paksiw',
    recipe:
      'Ingredients: Fish, Vinegar, Garlic, Ginger. Steps: 1. Cook fish with vinegar and spices. 2. Simmer until done.',
    imageUrl: paksiwImage,
  },
  {
    name: 'Ginisang Munggo',
    recipe:
      'Ingredients: Mung Beans, Pork, Spinach, Tomatoes. Steps: 1. Cook mung beans. 2. Sauté pork and tomatoes. 3. Add beans and spinach. 4. Simmer until done.',
    imageUrl: munggoImage,
  },
  {
    name: "Tokwa't Baboy",
    recipe:
      'Ingredients: Tofu, Pork, Soy Sauce, Vinegar, Garlic. Steps: 1. Fry tofu and pork. 2. Serve with sauce.',
    imageUrl: tokwatBaboyImage,
  },
  {
    name: 'Kilawin',
    recipe:
      'Ingredients: Raw Fish, Vinegar, Onion, Chili. Steps: 1. Marinate fish in vinegar and spices. 2. Serve fresh.',
    imageUrl: kilawinImage,
  },
  {
    name: 'Tortang Talong',
    recipe:
      'Ingredients: Eggplant, Eggs, Ground Meat. Steps: 1. Grill eggplant. 2. Coat with egg and meat mixture. 3. Fry until golden.',
    imageUrl: tortangTalongImage,
  },
  {
    name: 'Bopis',
    recipe:
      'Ingredients: Pork Lungs, Vinegar, Chili. Steps: 1. Cook lungs with vinegar and spices. 2. Serve hot.',
    imageUrl: bopisImage,
  },
  {
    name: 'Corned Beef Silog',
    recipe:
      'Ingredients: Corned Beef, Garlic Rice, Egg. Steps: 1. Cook corned beef. 2. Serve with garlic rice and egg.',
    imageUrl: cornedBeefSilogImage,
  },
  {
    name: 'Tapa',
    recipe:
      'Ingredients: Beef, Soy Sauce, Vinegar, Garlic. Steps: 1. Marinate beef. 2. Fry until done.',
    imageUrl: tapaImage,
  },
  {
    name: 'Tinapa',
    recipe:
      'Ingredients: Fish, Salt, Smoke. Steps: 1. Salt fish. 2. Smoke until dry.',
    imageUrl: tinapaImage,
  },
  {
    name: 'Inasal',
    recipe:
      'Ingredients: Chicken, Vinegar, Annatto, Lemongrass. Steps: 1. Marinate chicken. 2. Grill until done.',
    imageUrl: inasalImage,
  },
  {
    name: 'Adobong Pusit',
    recipe:
      'Ingredients: Squid, Soy Sauce, Vinegar, Garlic. Steps: 1. Cook squid with soy sauce and vinegar. 2. Simmer until tender.',
    imageUrl: adobongPusitImage,
  },
  {
    name: 'Inihaw na Liempo',
    recipe:
      'Ingredients: Pork Belly, Soy Sauce, Vinegar, Garlic. Steps: 1. Marinate pork. 2. Grill until done.',
    imageUrl: inihawNaLiempoImage,
  },
  {
    name: 'Bistek',
    recipe:
      'Ingredients: Beef, Soy Sauce, Lemon, Onions. Steps: 1. Marinate beef. 2. Fry with onions.',
    imageUrl: bistekImage,
  },
  {
    name: 'Afritada',
    recipe:
      'Ingredients: Chicken, Tomato Sauce, Potatoes, Carrots. Steps: 1. Cook chicken. 2. Add tomato sauce and vegetables. 3. Simmer until done.',
    imageUrl: afritadaImage,
  },
  {
    name: 'Mechado',
    recipe:
      'Ingredients: Beef, Soy Sauce, Tomato Sauce, Onions. Steps: 1. Cook beef. 2. Add soy sauce and tomato sauce. 3. Simmer until tender.',
    imageUrl: mechadoImage,
  },
  {
    name: 'Nilaga',
    recipe:
      'Ingredients: Beef, Potatoes, Cabbage, Peppercorns. Steps: 1. Boil beef. 2. Add vegetables and simmer.',
    imageUrl: nilagaImage,
  },
  {
    name: 'Pochero',
    recipe:
      'Ingredients: Pork, Chickpeas, Plantains, Tomato Sauce. Steps: 1. Cook pork. 2. Add tomato sauce and chickpeas. 3. Simmer with plantains.',
    imageUrl: pocheroImage,
  },
  {
    name: 'Igado',
    recipe:
      'Ingredients: Pork Liver, Pork Belly, Bell Peppers. Steps: 1. Cook pork belly. 2. Add liver and bell peppers. 3. Simmer until done.',
    imageUrl: igadoImage,
  },
  {
    name: 'Bagnet',
    recipe:
      'Ingredients: Pork Belly, Salt, Oil. Steps: 1. Boil and dry pork belly. 2. Deep fry until crispy.',
    imageUrl: bagnetImage,
  },
  {
    name: 'Pigar-Pigar',
    recipe:
      'Ingredients: Beef, Onions, Cabbage. Steps: 1. Sauté beef with onions. 2. Add cabbage and cook.',
    imageUrl: pigarPigarImage,
  },
  {
    name: 'Pancit Malabon',
    recipe:
      'Ingredients: Thick Noodles, Shrimp, Squid, Eggs. Steps: 1. Cook noodles. 2. Top with seafood and eggs.',
    imageUrl: pancitMalabonImage,
  },
  {
    name: 'Pancit Habhab',
    recipe:
      'Ingredients: Noodles, Pork, Vegetables. Steps: 1. Sauté pork and vegetables. 2. Add noodles and cook.',
    imageUrl: pancitHabhabImage,
  },
  {
    name: 'Pancit Lomi',
    recipe:
      'Ingredients: Thick Egg Noodles, Chicken, Vegetables. Steps: 1. Cook chicken and vegetables. 2. Add noodles and broth.',
    imageUrl: pancitLomiImage,
  },
  {
    name: 'Pancit Bihon',
    recipe:
      'Ingredients: Rice Noodles, Pork, Shrimp, Vegetables. Steps: 1. Sauté pork and shrimp. 2. Add vegetables and noodles.',
    imageUrl: pancitBihonImage,
  },
  {
    name: 'Pancit Canton',
    recipe:
      'Ingredients: Egg Noodles, Pork, Shrimp, Vegetables. Steps: 1. Sauté pork and shrimp. 2. Add vegetables and noodles.',
    imageUrl: pancitCantonImage,
  },
  {
    name: 'Lumpiang Shanghai',
    recipe:
      'Ingredients: Ground Pork, Carrots, Spring Roll Wrapper. Steps: 1. Mix pork and carrots. 2. Wrap and fry.',
    imageUrl: lumpiangShanghaiImage,
  },
  {
    name: 'Lumpiang Ubod',
    recipe:
      'Ingredients: Heart of Palm, Pork, Shrimp. Steps: 1. Cook pork and shrimp. 2. Add heart of palm. 3. Wrap in spring roll.',
    imageUrl: lumpiangUbodImage,
  },
  {
    name: 'Ginataang Kuhol',
    recipe:
      'Ingredients: Snails, Coconut Milk, Chili. Steps: 1. Cook snails with coconut milk and chili. 2. Simmer until done.',
    imageUrl: ginataangKuholImage,
  },
  {
    name: 'Betute Tugak',
    recipe:
      'Ingredients: Frogs, Ground Meat, Spices. Steps: 1. Stuff frogs with meat. 2. Fry until done.',
    imageUrl: betuteTugakImage,
  },
];

const colors = [
  '#FF6347',
  '#FFD700',
  '#ADFF2F',
  '#20B2AA',
  '#FF69B4',
  '#87CEEB',
  '#8A2BE2',
];

const App = () => {
  const [ulam, setUlam] = useState<Ulam | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(adoboImage);
  const [counter, setCounter] = useState(3); // Set initial counter to 3 seconds
  const [borderColor, setBorderColor] = useState(colors[0]);
  const [initialLoad, setInitialLoad] = useState(true); // Track first load

  useEffect(() => {
    let borderInterval: NodeJS.Timeout;
    let flickerInterval: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    if (loading) {
      flickerInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * mockData.length);
        setCurrentImage(mockData[randomIndex].imageUrl);
      }, 100); // Change image every 100ms

      borderInterval = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBorderColor(randomColor);
      }, 100); // Change border color every 100ms

      countdownInterval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            clearInterval(countdownInterval);
            return prevCounter;
          }
        });
      }, 1000); // Update counter every second

      setTimeout(() => {
        clearInterval(flickerInterval);
        clearInterval(borderInterval);
        const selectedUlam =
          mockData[Math.floor(Math.random() * mockData.length)];
        setUlam(selectedUlam);
        setCurrentImage(selectedUlam.imageUrl);
        setLoading(false);
      }, 3000); // Flicker for 3 seconds
    }

    return () => {
      clearInterval(flickerInterval);
      clearInterval(borderInterval);
      clearInterval(countdownInterval);
    };
  }, [loading]);

  const fetchUlam = () => {
    setCounter(3);
    setLoading(true);
    setInitialLoad(false); // Set initialLoad to false after first click
  };

  return (
    <div className='container'>
      <h1 className='header'>ANONG ULAM?</h1>
      <div className='content'>
        {loading && <div className='countdown-text'>{counter}</div>}
        {initialLoad ? (
          <div className='flicker-container'>
            <div className='question-mark'>?</div>
          </div>
        ) : (
          <div
            className='flicker-container'
            style={{ borderColor: borderColor }}
          >
            {/* {loading && <div className='countdown-text'>{counter}</div>} */}
            <motion.img
              src={currentImage}
              alt='Current Ulam'
              className='flicker-image'
              animate={loading ? { opacity: [1, 0.2, 1] } : {}}
              transition={{ repeat: loading ? Infinity : 0, duration: 0.2 }} // Flicker only while loading
            />
          </div>
        )}
        {/* {loading && (
          <div className='countdown-text'>{counter}</div>
        )} */}
        <button className='button' onClick={fetchUlam} disabled={loading}>
          {loading ? 'Loading...' : 'KAHIT ANO!!'}
        </button>
        {ulam && !loading && (
          <div className='recipeContainer'>
            <h2 className='ulamName'>{ulam.name}</h2>
            <p className='recipe'>{ulam.recipe}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
