export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Please add your Packing List 🎒 here 😎</em>
      </p>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const unpackedItems = totalItems - packedItems;
  const percentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ! Ready to go 👋🚗"
          : `Out of  ${totalItems} items, you have ${unpackedItems} unpacked item and ${packedItems} packed item on your list. You’re almost done—${percentage} %  packed 😊!`}
      </em>
    </footer>
  );
}
