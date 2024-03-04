import Link from 'next/link';

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <div>
          <p>PLANTS <span>☘</span></p>
        </div>
      </Link>
      <div>
        <span>🛒</span>
        <p>$0.00</p>
      </div>
    </nav>
  );
};

export default Header;
