import React from "react";

import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";
import ImageThree from "../images/egg-3.jpg";
import ImageFour from "../images/egg-4.jpg";
import ImageFive from "../images/egg-5.jpg";
import ImageSix from "../images/egg-6.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2 ">Egg Muffins</h2>
          <p className="mb-2 leading-10">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2 leading-10">
            Yammy, Flavorful, and Mouth-watering
          </p>
          <span>$18</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageThree}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Cuttlet</h2>
          <p className="mb-2 leading-10">Scrambled, Healthy, and Tasty</p>
          <span>$21</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFive}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Special</h2>
          <p className="mb-2 leading-10">Fried, Elegant, and Proteinfull</p>
          <span>$28</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFour}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Plain</h2>
          <p className="mb-2 leading-10">Yammy, Scrambled, and Tasty</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageSix}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Fried Rice</h2>
          <p className="mb-2 leading-10">Rice, Fried, and Watery</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2 ">Egg Muffins</h2>
          <p className="mb-2 leading-10">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2 leading-10">
            Yammy, Flavorful, and Mouth-watering
          </p>
          <span>$18</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageThree}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Cuttlet</h2>
          <p className="mb-2 leading-10">Scrambled, Healthy, and Tasty</p>
          <span>$21</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFive}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Special</h2>
          <p className="mb-2 leading-10">Fried, Elegant, and Proteinfull</p>
          <span>$28</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFour}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Plain</h2>
          <p className="mb-2 leading-10">Yammy, Scrambled, and Tasty</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageSix}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Fried Rice</h2>
          <p className="mb-2 leading-10">Rice, Fried, and Watery</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2 ">Egg Muffins</h2>
          <p className="mb-2 leading-10">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2 leading-10">
            Yammy, Flavorful, and Mouth-watering
          </p>
          <span>$18</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageThree}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Cuttlet</h2>
          <p className="mb-2 leading-10">Scrambled, Healthy, and Tasty</p>
          <span>$21</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFive}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Special</h2>
          <p className="mb-2 leading-10">Fried, Elegant, and Proteinfull</p>
          <span>$28</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFour}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Plain</h2>
          <p className="mb-2 leading-10">Yammy, Scrambled, and Tasty</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageSix}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Fried Rice</h2>
          <p className="mb-2 leading-10">Rice, Fried, and Watery</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2 ">Egg Muffins</h2>
          <p className="mb-2 leading-10">Cripsy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2 leading-10">
            Yammy, Flavorful, and Mouth-watering
          </p>
          <span>$18</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageThree}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Cuttlet</h2>
          <p className="mb-2 leading-10">Scrambled, Healthy, and Tasty</p>
          <span>$21</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFive}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Special</h2>
          <p className="mb-2 leading-10">Fried, Elegant, and Proteinfull</p>
          <span>$28</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-black hover:text-yellow-500 transition duration-300 ease-in-out  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageFour}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Plain</h2>
          <p className="mb-2 leading-10">Yammy, Scrambled, and Tasty</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageSix}
          alt="egg"
          className="h-72 w-48 rounded-xl mb-10 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Fried Rice</h2>
          <p className="mb-2 leading-10">Rice, Fried, and Watery</p>
          <span>$48</span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/"
            className="bg-yellow-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default Content;
