import { ButtonBase } from '~/components/Button';

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

      <ButtonBase onClick={handleOnClick}>Standard Button</ButtonBase>
      <ButtonBase as="a" href="https://github.com/" target="_blank">
        Anchor
      </ButtonBase>
    </div>
  );
}
