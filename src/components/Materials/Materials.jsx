import React from 'react';

export default function Materials({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>Название: {item.title}</p>
          <p>Ссылка: {item.link}</p>
          <button type="button" onClick={() => onDelete(item.id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
