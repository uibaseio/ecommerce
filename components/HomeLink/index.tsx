import Link from 'next/link';
import { IoLogoApple } from 'react-icons/io5';

const HomeLink = () => (
  <div className="flex justify-center lg:justify-start">
    <Link href="/">
      <a>
        <IoLogoApple size={24} />
      </a>
    </Link>
  </div>
);

export default HomeLink;
