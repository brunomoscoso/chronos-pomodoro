//A funcão tem que ter o nome em PascalCase
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Oi');
  return (
    <>
      <Heading/>
      <p>
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Placeat quod omnis
        deserunt pariatur voluptatum, maxime odio
        molestias deleniti. Veniam recusandae,
        natus modi deserunt eos sunt aperiam cum
        reiciendis! Vel, ea.
      </p>
    </>
  );
}
