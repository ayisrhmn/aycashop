import Image from 'next/image';
import FooterLink from './footer-link';

const Footer = () => {
  const sitemap = [
    {
      href: '/',
      title: 'Beranda',
      target: false,
    },
    {
      href: '/kategori',
      title: 'Kategori',
      target: false,
    },
    {
      href: 'https://wa.me/6285882042680?text=Hai%20Kak%20Cantik,%20Apakah%20produk%20masih%20ada',
      title: 'Kontak Kami',
      target: true,
    },
    {
      href: 'https://shopee.co.id/aycashop.id?smtt=0.0.9',
      title: `Let's Shopping`,
      target: true,
    },
  ];

  const sosMed = [
    {
      href: 'https://instagram.com/aycashop.id',
      title: 'Instagram',
      target: true,
    },
    {
      href: 'https://vt.tiktok.com/ZSeuRUJDS/',
      title: 'TikTok',
      target: true,
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="py-4">
              <Image
                src={'/img/logo.svg'}
                className={'ayca-logo-footer'}
                width={180}
                height={80}
              />
              <p className="pt-4">&copy; 2021. Aycashop.id</p>
            </div>
          </div>
          <div className="col-2">
            <p className="font-weight-bold mt-4">Sitemap</p>
            <ul>
              {sitemap.map((sitemap: any, i: number) => (
                <FooterLink
                  key={i}
                  href={sitemap.href}
                  title={sitemap.title}
                  target={sitemap.target}
                />
              ))}
            </ul>
          </div>
          <div className="col-lg-2 col-sm-12">
            <p className="font-weight-bold mt-4">Sosial Media</p>
            <ul>
              {sosMed.map((sitemap: any, i: number) => (
                <FooterLink
                  key={i}
                  href={sitemap.href}
                  title={sitemap.title}
                  target={sitemap.target}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
