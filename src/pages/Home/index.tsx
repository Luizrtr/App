import React from 'react';
import 'twin.macro';

import { IoIosLogOut } from 'react-icons/io';

import { ContainerHome } from './styles';
import SideBar from '../../components/SideBar';

export const Home: React.FC = () => {
  return (
    <ContainerHome>
      <SideBar />
      <div tw="flex-1 flex flex-col overflow-hidden">
        <header tw="flex justify-between items-center p-6">
          <div tw="flex items-center space-x-4 lg:space-x-0">
            <button tw="text-gray-500 dark:text-gray-300 focus:outline-none lg:hidden">
              <svg
                tw="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <div>
              <h1 tw="text-2xl font-medium text-gray-800 dark:text-white">
                Overview
              </h1>
            </div>
          </div>

          <div tw="flex items-center space-x-4">
            <button tw="flex text-gray-600 dark:text-gray-300 focus:outline-none">
              <IoIosLogOut tw="h-5 w-5" size={25} />
            </button>

            <div tw="relative">
              <button tw="flex items-center space-x-2 relative focus:outline-none">
                <h2 tw="text-gray-700 dark:text-gray-300 text-sm hidden sm:block">
                  Jones Ferdinand
                </h2>
                <img
                  tw="h-9 w-9 rounded-full border-2 border-purple-500 object-cover"
                  src="https://www.pinpng.com/pngs/m/53-531868_person-icon-png-transparent-png.png"
                  alt="Your avatar"
                />
              </button>
            </div>
          </div>
        </header>

        <section tw="flex-1 overflow-x-hidden overflow-y-auto">
          <div tw="container mx-auto px-6 py-8">
            <div tw="grid place-items-center h-96 text-gray-500 dark:text-gray-300 text-xl border-4 border-gray-300 border-dashed">
              Content
            </div>
          </div>
        </section>
      </div>
    </ContainerHome>
  );
};

export default Home;
