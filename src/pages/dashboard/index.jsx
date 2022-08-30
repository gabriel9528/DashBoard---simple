import useFetch from '@hooks/useFetch';
import endPoints from '@service/api';
import { Chart } from '@common/chart';

const PRODUCT_LIMIT = 5;
const PRODUCT_OFFSET = 5;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));

  const categoryName = products?.map((product) => product.category);
  const categoryCount = categoryName?.map((category) => category.name);
  console.log(categoryCount);

  const countOccurences = (Arr) => Arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };
  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
