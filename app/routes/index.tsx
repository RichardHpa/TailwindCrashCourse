// import { ButtonBase } from '~/components/Button';
import { Link } from '@remix-run/react';
import { Element } from '~/components/Element';

export default function Index() {
  const handleOnClick = () => {
    console.log('click');
  };
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      {/* <ButtonBase onClick={handleOnClick} className="mr-2">
        Standard Button
      </ButtonBase>
      <ButtonBase disabled className="mr-2">
        Disabled Button
      </ButtonBase>
      <ButtonBase as="a" href="https://github.com/" target="_blank" className="mr-2">
        Anchor
      </ButtonBase>
      <ButtonBase as={Link} to="/test">
        Remix Link
      </ButtonBase>

      <form action="get" method="get" className="mt-2">
        <input name="test" defaultValue="test" className="border-2 p-2 mr-2" />
        <ButtonBase type="submit">Form Link</ButtonBase>
      </form> */}

      <Element onClick={handleOnClick}>Hello World</Element>
      <Element as="a" href="fdsafds">
        Hello World
      </Element>
      <Element as={Link} to="/">
        Hello World
      </Element>
      <Link to="/">Hello World</Link>

      <Element as="br">Hello World</Element>
      <Element as="br" />
      <Element as="br" />
    </div>
  );
}
