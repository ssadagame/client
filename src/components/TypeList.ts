// 카카오 소셜 로그인 타입 설정 법
// declare global {
//     interface Window {
//       kakao: any;
//     }
//   }
namespace TypeList {
  export interface TypeGameList {
    id: number;
    name: string;
    screenshop: string;
    original_price: string;
    final_price: string;
    discount: string;
  }
  export interface TypeProps {
    gameList: TypeGameList;
  }
}
export default TypeList;
