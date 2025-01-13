'use client';
import Link from 'next/link';
import styles from './Sidebar.module.scss';

export default function Sidebar({isShowing}: {isShowing: boolean}) {
  // let history = useHistory();
  // const { isShowing } = useContext(SidebarContext);
  // const [isShowing, setIsShowing] = useState(true);

  const handleBrandClick = (brandId) => {
    //   history.push(`/by-brand/${brandId}`);
  };
  return (
    <div
      className={
        isShowing === false
          ? `${styles['hide-sidebar']} ${styles['sidebar']}`
          : `${styles['sidebar']}`
      }
    >
      <ul>
        <li>
          <Link href="/products">전체상품</Link>
        </li>

        <li>
          <Link href="/products/by-brand/babolat">Babolat</Link>
        </li>
        <li>
          <Link href="/products/by-brand/wilson">Wilson</Link>
        </li>
        <li>
          <Link href="/products/by-brand/head">Head</Link>
        </li>
        <li>
          <Link href="/products/by-brand/yonex">Yonex</Link>
        </li>
        <li>
          <Link href="/products/by-brand/dunlop">Dunlop</Link>
        </li>
        <li>
          <Link href="/products/by-brand/tecnifibre">TecniFibre</Link>
        </li>
        <li>
          <Link href="/board/announcement">
            <small>공지사항</small>
          </Link>
        </li>
        <li>
          <Link href="/board/qna">
            <small>상품QnA</small>
          </Link>
        </li>
        {/* <li onClick={() => handleBrandClick(7)}>TecniFibre</li>
          <li onClick={() => handleBrandClick(8)}>ProKennex</li> */}
      </ul>
    </div>
  );
}
