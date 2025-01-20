// import React, { useContext, useEffect } from 'react';
// import { CartContext } from '../Context/CartContext';
// import { Link } from 'react-router-dom';
// import Header from './Header'; // Assuming Header is in Components folder
// import Footer from './Footer'; // Assuming Footer is in Components folder

// const CartPage = () => {
//   const { cart, removeFromCart, setCart } = useContext(CartContext);

//   // Ensure cart data persists after refresh
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart)); // Set cart from localStorage
//     }
//   }, [setCart]);

//   useEffect(() => {
//     if (cart.length > 0) {
//       localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
//     }
//   }, [cart]);

//   // Calculate the total price of all products in the cart
//   const totalPrice = cart.reduce((acc, item) => {
//     const itemPrice = parseFloat(item.price); // Price from backend
//     const itemQuantity = parseInt(item.quantity, 10); // Quantity from cart
//     if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
//       return acc + itemPrice * itemQuantity; // Calculate total for each item
//     }
//     return acc;
//   }, 0).toFixed(2); // Get total price and format to 2 decimal places

//   return (
//     <div className="bg-gradient-to-r from-teal-300 via-pink-300 to-purple-300 text-white relative overflow-hidden">
//       {/* Background Abstract Lines */}
//       <Header />
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
//         <div className="absolute top-10 left-10 w-full h-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-30 transform rotate-12"></div>
//         <div className="absolute top-20 left-20 w-full h-full bg-gradient-to-l from-transparent via-blue-500 to-transparent opacity-25 transform rotate-6"></div>
//       </div>

//       <div className="p-8 z-10 relative">
//         <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//         {cart.length > 0 ? (
//           <div>
//             {/* Product Listing */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {cart.map((item) => (
//                 <div key={item.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-lg">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-48 object-cover rounded-md mb-4"
//                   />
//                   <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
//                   <p className="text-gray-700 mb-4">{`Price: $${item.price}`}</p>
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600">Quantity: {item.quantity}</span>
//                     <button
//                       className="text-red-600 hover:text-red-800"
//                       onClick={() => removeFromCart(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Price Calculation */}
//             <div className="mt-6 flex justify-between items-center text-xl font-semibold">
//               <span>Total Price:</span>
//               <span>${totalPrice}</span> {/* Display the total price */}
//             </div>

//             {/* Checkout Button */}
//             <div className="mt-6 text-center">
//               <Link
//                 to="/checkout"
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg shadow-lg transition duration-300"
//               >
//                 Proceed to Checkout
//               </Link>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-500">Your cart is empty.</p>
//         )}

//         <div className="mt-6 text-center">
//           <Link to="/" className="text-blue-600 hover:underline">
//             Continue Shopping
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CartPage;
