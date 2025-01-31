'use client';
import Button from '../../../components/Button/Button';
import Table from '../../../components/Table/Table';
import styles from './users.module.scss';

const dummyUsers = [
  {
    name: '김철수',
    username: 'kim',
    email: 'kjzon@hotmail.com',
    isAdmin: 1,
    address1: '서울시 강남구',
    address2: '역삼동',
  },
  {
    name: '김영희',
    username: 'kim',
    email: 'kjzon@naver.com',
    isAdmin: 0,
    address1: '서울시 강남구',
    address2: '역삼동',
  },
];

export default function page() {
  const columns = [
    {key: 'name', header: '이름'},
    {key: 'username', header: '아이디'},
    {key: 'email', header: '이메일'},
    {key: 'isAdmin', header: '권한'},
    {key: 'address1', header: '주소'},
    {key: 'address2', header: '상세주소'},
  ];

  return (
    <section className={styles['user-list']}>
      <div className="user-grid">
        <Table columns={columns} data={dummyUsers} />

      </div>
      {/* <button onClick={handleClick}>테스트</button> */}
      {/* <Button text={'홈으로 돌아가기'} handleBtnClick={() => {}} /> */}
    </section>
  );
}
