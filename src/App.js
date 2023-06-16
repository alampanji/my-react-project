import './App.css';
import MyButton from './components/MyButton'
import { useState } from "react";


function App() {
  const [greeting, setGreeting] = useState("")


  const handleClickMyButton = () => {
    alert('button onclick my button')
  }

  const productList = [
    {label: 'Product 1', description: 'Desc 1'},
    {label: 'Product 2', description: 'Desc 2'},
    {label: 'Product 3', description: 'Desc 3'},
    {label: 'Product 4', description: 'Desc 4'},
  ]

  const renderProduct = () => {
    return (
      <>
        { productList.map((product, item) => {
          return (<ProductCard key={item} label={product.label} description={product.description} />)
          })
        }
      </>
    )
  }

  return (
    <div className="app-container">

      <div>Hello My First React App!</div>

      {renderProduct}

      {/* <ProductCard label={'Product 1'} description={'Desc 1'} />
      <ProductCard label={'Product 2'} description={'Desc 2'} />
      <ProductCard label={'Product 3'} description={'Desc 3'} />
      <ProductCard label={'Product 4'} description={'Desc 4'} />
      <ProductCard label={'Product 5'} description={'Desc 5'} /> */}

      <Button onClick={() => setGreeting('hello my react component!')}>Click Here</Button>

      <div>
        <MyButton onClick={handleClickMyButton}>My Button</MyButton>
      </div>

      <div>
        {greeting}
      </div>
    </div>
  );
}

const Button = ({ onClick, children }) => {
  
  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#3498db',
    borderRadius: '4px',
    border: '1px solid #fff',
    width: '200px',
    height: '32px'
  }

  return (
    <button type="button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

const ProductCard = ({ label, description }) => {
  return (
    <div className='product-card'>
      <div className='product-card__label'>{label}</div>
      <div className='product-card__description'>{description}</div>
    </div>
  )
}

export default App;
