import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormProduct from '@components/FormProduct';
import axios from 'axios';
import endPoints from '@service/api';

export default function Edit() {
  const [product, setProduct] = useState({});
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    console.log(id);
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
