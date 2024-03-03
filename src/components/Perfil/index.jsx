import styles from'./Perfil.module.css';

const perfil = ({ address }) => {  
  return (
    <header className={styles.header}>      
      <img className={styles.img} src={address} />
    </header>
  )
}

export default perfil;