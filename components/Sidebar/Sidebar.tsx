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
    <div className={isShowing === false ? `${styles['hide-sidebar']} ${styles['sidebar']}` : `${styles['sidebar']}`}>
      <ul>
        <li onClick={() => {}}>전체보기</li>
        <li onClick={() => handleBrandClick(1)}>Babolat</li>
        <li onClick={() => handleBrandClick(2)}>Wilson</li>
        <li onClick={() => handleBrandClick(3)}>Head</li>
        <li onClick={() => handleBrandClick(4)}>Yonex</li>
        <li onClick={() => handleBrandClick(5)}>Dunlop</li>
        <li onClick={() => handleBrandClick(6)}>Tecnifibre</li>
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
