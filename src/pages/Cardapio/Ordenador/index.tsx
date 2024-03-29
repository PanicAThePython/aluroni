import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState, memo } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface Props {
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}


function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}>
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      }
      )}>
        {opcoes.map((op) => (
          <div className={styles.ordenador__option} key={op.value} onClick={() => setOrdenador(op.value)}>
            {op.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);