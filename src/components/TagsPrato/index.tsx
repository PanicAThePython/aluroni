import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

export default function TagsPrato(props: Prato){
  return(
    <div className={styles.item__tags}>
      <div className={classNames({
        [styles.item__tipo]: true,
        [styles[`item__tipo__${props.category.label.toLowerCase()}`]]:true,
      })}>
        {props.category.label}
      </div>
      <div className={styles.item__porcao}>
        {props.size}
      </div>
      <div className={styles.item__qtdpessoas}>
        Serve {props.serving} pessoa{props.serving===1?'':'s'}
      </div>
      <div className={styles.item__valor}>
        R$ {props.price.toFixed(2)}
      </div>
    </div>
  );
}