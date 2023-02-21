import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export function Navbar({className}: NavbarProps) {
	return (
		<div className={classNames(styles.navbar)}>
			<div className={styles.linksList}>
				<AppLink
					to={'/'}
					theme={AppLinkTheme.SECONDARY}
					className={styles.link}
				>
					Main
				</AppLink>
				<AppLink
					to={'/about'}
					theme={AppLinkTheme.SECONDARY}
					className={styles.link}
				>
					About
				</AppLink>
			</div>
		</div>
	);
}
