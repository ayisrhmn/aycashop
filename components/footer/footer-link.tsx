import Link from 'next/link';

interface Props {
  href?: string;
  title: string;
  target?: boolean;
}

const FooterLink = (props: Props) => {
  const {href = '/', title, target} = props;

  return (
    <li>
      {!target ? (
        <Link href={href}>
          <a>{title}</a>
        </Link>
      ) : (
        <a href={href} target="_blank">
          {title}
        </a>
      )}
    </li>
  );
};

export default FooterLink;
