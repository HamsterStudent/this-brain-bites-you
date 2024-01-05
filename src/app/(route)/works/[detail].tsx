// ItemDetail 컴포넌트에서
import { useRouter } from "next/router";

const ItemDetail = () => {
  const router = useRouter();
  const { detail } = router.query; // detail 값은 동적으로 전달된 값
  console.log("hsmta");

  // detail 값을 기반으로 모의 상품 데이터 생성 (예시)
  const itemData = {
    detail,
    name: "상품 이름",
    price: 10000,
    // 다른 상품 정보들...
  };

  return <div>detail</div>;
};

export default ItemDetail;
