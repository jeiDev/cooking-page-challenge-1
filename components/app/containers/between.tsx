import { ContainerPropsI } from "~/interfaces/components/app/containers/containers.interface";
import containerStyles from "~/styles/components/app/Container.module.css";
import styles from "~/styles/components/app/containers/Container.module.css";
import betweenStyles from "~/styles/components/app/containers/Between.module.css";


const ContainerBetween = ({title, subTitle, children} : ContainerPropsI) => {

    return (
        <div className={`${containerStyles.container} ${styles.container}`}>
            <div className={`${styles.header} ${betweenStyles.between}`}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={styles.paragraph}>{typeof subTitle == "function" ? subTitle() : subTitle}</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ContainerBetween;