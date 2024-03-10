import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import ProductList from './ProductList'
import TodoList from './TodoList';
import Datafetch from './Datafetch';
import FetchRegistrations from './FetchRegistrations'
import ContactForm from './ContactForm';
import { Link } from '@mui/material';

const Home = () => {

  const products = [
    { name: 'Mobile Phone', price: 10 },
    { name: 'Soundbar', price: 15 },
    { name: 'Adapter', price: 20 },
  ];
  const todoItems = [
    { title: 'Complete React project', completed: false },
    { title: 'Read a book', completed: true },
    { title: 'Complete WorkBook', completed: true },
    
    // Add more todo items as needed
  ];
 
  return (
    
    <div >
      <ContactForm/>
      {/* <MyComponent/> */}
      {/* <FCounter/> */}
      
        {/* <Datafetch/> */}
    {/* <Hello name='Nitish' id='20'/>
    <Greet name='Kola' id='30'/> */}
    {/* <Hello products={products}/>
    <ProductList/>
    <h1>My Todo App</h1>
      <TodoList todos={todoItems} /> 
    <ProductList products={products} />
    <Message/> */}
     <Counter/> 
     <Link href="/ContactForm" variant='body2'>contact us</Link> 
    </div>
  )
}

export default Home