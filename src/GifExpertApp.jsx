import { useState } from "react";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']); // Se recomienda establecer un estado inicial

  const onAddCategory = (newCategory) => {
    // categories.push('Naruto'); // no funciona
    // setCategories(cat => [...cat, 'Naruto']); // Otra forma de hacerlo
    if (categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ]);
  }

  const onDeleteCategory = (category) => {
    setCategories([...categories].filter(x => x !== category));
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ onAddCategory }
      />

      {
        categories.map(category => (
          <GifGrid
            key={ category }
            category={ category }
            onClickDelete={ onDeleteCategory }
          />
        ))
      }
    </>
  )
}
