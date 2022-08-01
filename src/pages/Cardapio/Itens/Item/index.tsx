import styles from './Item.module.scss';
import {Prato} from 'types/Prato';
import TagsPrato from 'components/TagsPrato';

export default function Item(props: Prato) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={props.photo} alt={props.title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}