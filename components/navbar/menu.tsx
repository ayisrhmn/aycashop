import Link from 'next/link';
import cx from 'classnames';

interface Props {
  href?: string;
  title: string;
  active?: boolean;
  target?: boolean;
}

const Menu = (props: Props) => {
  const {href = '/', title, active, target} = props;

  const classActive = cx({
    'nav-item': true,
    active,
  });

  return (
    <li className={classActive}>
      {!target ? (
        <Link href={href}>
          <a className="nav-link">{title}</a>
        </Link>
      ) : (
        <a className="nav-link" href={href} target="_blank">
          {title}
        </a>
      )}
    </li>
  );
};

export default Menu;
