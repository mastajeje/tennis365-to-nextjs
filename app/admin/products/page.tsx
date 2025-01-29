'use client'

import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import {dummyCartItems} from '../../dummyData';
import PostItemModal from '../_PageSections/PostItemModal/PostItemModal';
import styles from './products.module.scss';



export default function page() {
    const [isPostItemModalOpen, setIsPostItemModalOpen] = useState(false);

    const togglePostItemModal = () => {
        setIsPostItemModalOpen(!isPostItemModalOpen);
    }

    

  return (
    <section className={styles['item-list']}>
      <>
      <button onClick={togglePostItemModal}>상품 추가 +</button>
        <table id={styles['item-list__table']}>
          <thead>
            <tr>
              <th>id</th>
              <th>이미지</th>
              <th>상품명</th>
            </tr>
          </thead>
          <tbody>
            {dummyCartItems &&
              dummyCartItems.map((item) => {
                return (
                  <tr
                    //   onClick={(e) => onClickModal(e)}
                    className={styles['item']}
                    key={item.id}
                    //   id={item.id}
                  >
                    <td className={styles['item-id']}>{item.id}</td>
                    <td className={styles['item-img']}>
                      <img src={item.imgURL} alt={item.product_name} />
                    </td>
                    <td className={styles['item-name']}>{item.product_name}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* <Modal open={modalOpen} close={closeModal} header="상품수정">
        <ItemListEdit
          itemId={itemId}
          closeModal={closeModal}
          filterItemList={filterItemList}
        />
      </Modal> */}
      <Modal open={isPostItemModalOpen} close={togglePostItemModal} header="상품수정">
        <PostItemModal
              handleInputChange={()=>{}}
              handleItemSubmit={()=>{}}
              handleFiles={()=>{}}
              handleCoverImg={()=>{}}
        />
        </Modal>
      </>{' '}
    </section>
  );
}
