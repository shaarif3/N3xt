import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href='/news/my-name-is-shaarif'>My Name Is Shaarif</Link>
        </li>
        <li>
          <Link href='/news/my-name-is-shahid'>My Name Is Shahid</Link>
        </li>
        <li>
          <Link href='/news/my-name-is-Github'>My Name Is GIthub</Link>
        </li>
      </ul>
    </>
  );
};
export default HomePage;
