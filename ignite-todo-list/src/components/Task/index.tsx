import styles from "./Task.module.css";


export function Task() {
  return (
    <section className={styles.task}>
      <div className={styles.taskCompleted}>
        <strong>Tarefas criadas</strong>
        <span>0</span>
      </div>
      <div className={styles.taskProgress}>
        <strong>Concluídas</strong>
        <span>0</span>
      </div>
    </section>
  );
}
