import React, { useEffect, useState } from 'react';

const useDebounce = (value) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};

const Test = () => {
  const [input, setInput] = useState('');

  const debounce = useDebounce(input);

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${input}`
    );
    const { products } = await response.json();
    console.log(products);
  };

  useEffect(() => {
    if (input) fetchProducts();
  }, [debounce]);

  return (
    <div>
      <input
        type='text'
        placeholder='search'
        className='border m-5 outline-none p-2 rounded'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Test;
