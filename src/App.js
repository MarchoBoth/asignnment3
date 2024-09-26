import './App.css';
import ExpenseItem from './componen/ExpenseItem';
import { TugasKoding } from './componen/TugasKoding';
import { TugasKoding2 } from './componen/TugasKoding2';
import gclass from './asset/gclass.jpg';
import benz from './asset/benz.jpg';
import { CarCard } from './componen/CarCard';
function App() {
  const productList = [
    {
      title: 'GL Class',
      description: 'This is our product description GL Class',
      year: 2020,
      image: benz,
    },
    {
      title: 'G Class',
      description: 'This is our product description G Class',
      year: 2021,
      image: gclass,
    },
  ];
  return (
    <div className="App">
      <TugasKoding />
      <TugasKoding2 />
      <ExpenseItem />
      <div className="flex justify-center flex-wrap">
        {productList.map((product, index) => (
          <CarCard
            key={index}
            title={product.title}
            description={product.description}
            year={product.year}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
