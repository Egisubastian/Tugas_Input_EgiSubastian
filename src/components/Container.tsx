import React from 'react';

type ContainerProps = {
  styles: React.CSSProperties;
  onClick?: () => void; // Menambahkan properti onClick opsional
};

const Container = (props: ContainerProps) => {
  return (
    <div style={props.styles} onClick={props.onClick}>
      Text Goes Here
    </div>
  );
};

export default Container;
