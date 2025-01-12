// // import { Redirect, Route } from "react-router-dom";

const AdminOnlyRoute = ({ component: Component, ...restOfProps }) => {
    // 마이그레이션 중 오류 발생으로 인한 임시 사용 중지
//   const isAdmins = JSON.parse(
//     atob(localStorage.getItem("accessToken").split(".")[1])
//   ).isAdmin;

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAdmins === 1 ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
return(<></>)
};

export default AdminOnlyRoute;
