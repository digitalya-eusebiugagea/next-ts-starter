import type { ReactNode } from 'react';

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = (props: IMainProps) => (
  <div>
    {props.meta}
    <header></header>
    <main>{props.children}</main>
    <footer></footer>
  </div>
);

export default Main;
