function ObjectList() {
  const items: { id: number; name: string }[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
 return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ObjectList;