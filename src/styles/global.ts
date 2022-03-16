import { createGlobalStyle } from 'styled-components';

const StylesBase = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
:root {
  --white: #ffffff;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-700: #323238;
  --gray-800: #29292e;
  --gray-900: #121214;
  --gray-850: #1f2729;
  --cyan-500: #61dafb;
  --yellow-500: #eba417;
}

body {
  background: var(--white);
  color: var(--gray-900);
}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: initial;
  text-decoration: none;
}
`;

export default StylesBase;
