import { h, FunctionComponent } from 'preact';
import styles from './Section.module.scss';

interface SectionProps {
  header: string;
  anchor: string;
}

export const Section: FunctionComponent<SectionProps> = ({
  children,
  header,
}) => (
  <div className={styles.container}>
    <h1 className={styles.header}>{header}</h1>
    <div className={styles.body}>{children}</div>
  </div>
);
