'use client'
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Table from "../../../components/Table/Table";

// const participateColumns = [
//     {key: 'rankings', header: '순위'},
//     {key: 'name', header: '이름'},
//     {key: 'participation', header: '참여'},
//   ];

const dummyTableData = [
    {merchant_uid: '1234', name: '홍길동', amount: '10000', status: '결제완료'},
    {merchant_uid: '1235', name: '김철수', amount: '20000', status: '결제완료'},
    {merchant_uid: '1236', name: '이영희', amount: '30000', status: '결제완료'},
]

export default function page(){
    const [allTransaction, setAlltransaction] = useState([]);
    const [transactionItem, setTransactionItem] = useState([]);
    const [instance, setInstance] = useState("");
    const [targetId, setTargetId] = useState("");
    // const [modalOpen, openModal, closeModal] = useModal();
  
    const columns = [
        { key: "merchant_uid", header: "주문번호" },
        { key: "name", header: "주문자" },
        { key: "amount", header: "금액" },
        { key: "status", header: "상태" },
    ]

    return (
        <main className="manage-order" style={{ margin: "0 auto" }}>
        <div className="order-grid">
            <Table 
                columns={columns}
                data={dummyTableData}
            />
          {/* <Grid
            ref={gridRef}
            data={allTransaction}
            columns={columns}
            // rowHeight={25}
            // bodyHeight={100}
            heightResizable={true}
            rowHeaders={["checkbox"]}
            width={600}
            columnOptions={{ resizable: true }}
            onCheck={() => {
              instance.getCheckedRows();
            }}
            onClick={(e) => {
              if (e.columnName === "merchant_uid") {
                setTargetId(instance.getValue(e.rowKey, "id"));
                openModal();
              }
            }}
          /> */}
        </div>
        <Button text={"주문현황 변경"} handleBtnClick={()=>{}} />
        {/* <Modal open={modalOpen} close={closeModal} header="주문관리">
          <ManageOrderModal
            targetId={targetId}
            allTransaction={allTransaction}
            transactionItem={transactionItem}
          />
        </Modal> */}
      </main>
    )
    }