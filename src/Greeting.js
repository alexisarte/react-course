export function Greeting({ tittle, name = 'user' }) {
  return (
    <h1>
      {tittle}, dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet}) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💲{amount}</p>
      <p>{married ? 'Married' : 'Single'}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>State: {address.state}</li>
      </ul>
    </div>
  );
}
