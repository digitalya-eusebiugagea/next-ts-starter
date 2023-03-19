import type { ReactNode } from 'react';

import TopBar from '../TopBar';

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = (props: IMainProps) => (
  <div>
    {props.meta}
    <TopBar />
    <main>{props.children}</main>
    <footer></footer>
  </div>
);

export default Main;
