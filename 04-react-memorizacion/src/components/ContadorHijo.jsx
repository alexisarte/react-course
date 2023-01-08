import { memo } from 'react';

const ContadorHijo = () => {
  console.log('  Me volví a generar :(  ');

  return (
    <div style={{ border: 'thin solid #000', margin: '1rem', padding: '1rem' }}>
      <h2>Contador Hijo</h2>
    </div>
  );
};

export default memo(ContadorHijo);
