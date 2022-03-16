import React from 'react';
import 'twin.macro';

import { ContainerHeader } from './styles';

const SideBar: React.FC = () => {
  return (
    <ContainerHeader>
      <div tw="flex items-center justify-center mt-8">
        <div tw="flex items-center">
          <span tw="text-gray-800 dark:text-white text-2xl font-semibold">
            Dashboard
          </span>
        </div>
      </div>

      <nav tw="flex flex-col mt-10 px-4 text-center">
        <a
          href="/"
          tw="py-2 text-sm text-gray-700 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 rounded"
        >
          Overview
        </a>
      </nav>
    </ContainerHeader>
  );
};

export default SideBar;
