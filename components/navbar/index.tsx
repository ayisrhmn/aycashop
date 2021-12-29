import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';
import ToggleMenu from './toggle-menu';

interface Props {
  active: string;
}

const Navbar = (props: Props) => {
  const {active} = props;

  const listMenu = [
    {
      href: '/',
      title: 'Beranda',
      active: 'beranda',
    },
    {
      href: '/kategori',
      title: 'Kategori',
      active: 'kategori',
    },
    {
      href: 'https://wa.me/6285882042680?text=Hai%20Kak%20Cantik,%20Apakah%20produk%20masih%20ada?',
      title: 'Kontak Kami',
      active: 'kontak',
    },
  ];

  return (
    <nav
      className="
        navbar navbar-expand-lg navbar-light navbar-store
        fixed-top
        navbar-fixed-top
      "
      data-aos="fade-down">
      <div className="container">
        <Link href={'/'}>
          <a className="navbar-brand">
            <Image
              src={'/img/logo.svg'}
              className={'ayca-logo'}
              width={130}
              height={60}
            />
          </a>
        </Link>
        <ToggleMenu />
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {listMenu.map((menu: any, i: number) => (
              <Menu
                key={i}
                href={menu.href}
                title={menu.title}
                active={menu.active === active}
                target={menu.active === 'kontak'}
              />
            ))}
            <li className="nav-item">
              <a
                className="btn btn-success nav-link px-4 text-white"
                target="_blank"
                href="https://shopee.co.id/aycashop.id?smtt=0.0.9">
                Let's Shopping
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
