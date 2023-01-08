import { memo, useMemo } from 'react';

const ContadorHijo = ({contador, sumar, restar}) => {
  // let superNumero = 0;

  // for(let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  const superNumero = useMemo(() => {
    let superNumero = 0;

    for(let i = 0; i < 1000000000; i++) {
      superNumero++;
    }

    return superNumero;
  }, []);

  console.log('  Me volví a generar :(  ');

  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
