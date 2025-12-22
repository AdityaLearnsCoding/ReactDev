import './App.css';
// eslint-disable-next-line
import ButtonExercise from './components/lesson1/ButtonExercise';
// eslint-disable-next-line
import ParaExercise from './components/lesson1/ParaExercise';
// eslint-disable-next-line
import SampleDesign from './components/lesson1/SampleDesign';
// eslint-disable-next-line
import JSSumOneD from './components/lesson1/JSSumOneD';
// eslint-disable-next-line
import DisplayDateOneG from './components/lesson1/DisplayDateOneG';
// eslint-disable-next-line
import DisplayDateInParaOneH from './components/lesson1/DisplayDateInParaOneH';
// eslint-disable-next-line
import DisplayTimeOneI from './components/lesson1/DisplayTimeOneI';

// eslint-disable-next-line
import SampleText2A from './components/lesson2/SampleText2A';
// eslint-disable-next-line
import Solution2B from './components/lesson2/Solution2B';
// eslint-disable-next-line
import Solution2C from './components/lesson2/Solution2C';
// eslint-disable-next-line
import ProductDetails from './components/lesson2/ecommerce_site/ProductDetails';
// eslint-disable-next-line
import cottonSocksPng from "./components/lesson2/ecommerce_site/assets/cotton-socks.png"; 
// eslint-disable-next-line
import plainTShirt from "./components/lesson2/ecommerce_site/assets/plain-t-shirt.png"; 
// eslint-disable-next-line
import tennisBalls from "./components/lesson2/ecommerce_site/assets/tennis-balls.png"; 
import HomePage from './components/ecomm_site/pages/HomePage';

/**
 * Exercises from Lesson 1
 */
// function App() {
//   return (
//     <>
//       <ButtonExercise /><hr/>
//       <ParaExercise /><hr/>
//       <SampleDesign /><hr/>
//       <JSSumOneD /><hr/>
//       <DisplayDateOneG /><hr/>
//       <DisplayDateInParaOneH /> <hr/>
//       <DisplayTimeOneI /><hr/>
//     </>
//   );
// }

/**
 * Exercises from Lesson 2
 */
// function App() {
//   return (
//     <>
//       {/* <LoginForm /><hr/> */}
//       <ProductDetails
//         imageSrc={ cottonSocksPng }
//         productName="Cotton Socks"
//         price={10.9}
//         discountedPrice={5.45}
//       />
//       <ProductDetails
//         imageSrc={ plainTShirt }
//         productName="Plain T-Shirt"
//         price={7.99}
//         discountedPrice={5.45}
//       />
//       <ProductDetails
//         imageSrc={ tennisBalls }
//         productName="Tennis Balls"
//         price={6.0}
//       />
//     </>
//   );
// }

/**
 * Exercises from Lesson 3
 */
// import Solution3A from './components/lesson3/Solution3A';
// import Solution3B from './components/lesson3/Solution3B';
// import Solution3C from './components/lesson3/Solution3C';
// import Solution3G3H from './components/lesson3/Solution3G3H';
// import { useState } from 'react';
// function App() {
//   const [count, setCount] = useState(0);
//   const updateCount = () => {
//     setCount(count + 1);
//   }
//   const resetCount = () => {
//     setCount(0);
//   }
//   return (
//     <>
//       <Solution3A />
//       <hr/>
//       <Solution3B count={count} updateCount={updateCount} />
//       <Solution3C count={count} updateCount={updateCount} />
//       <button onClick={resetCount} >Reset Count</button>
//       <hr/>
//       <Solution3G3H />
//     </>
//   );
// }
/**
 * Excercises from Lesson 5
 */
function App() {
  return (
    <>
      <HomePage />
    </>
  );
}
export default App;
