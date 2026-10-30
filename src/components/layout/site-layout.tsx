import type {ReactNode} from 'react';
import Link from 'next/link';
import type {LocaleContent} from '@/content/schema';
import {getLocalizedPath,type Locale,type PageKey} from '@/lib/i18n';
import {withBasePath} from '@/lib/base-path';
import {EditorialHeader} from '@/components/editorial/header';
import '@/components/editorial/editorial.css';
export function SiteLayout({locale,pageKey,content,children}:{locale:Locale;pageKey:PageKey;content:LocaleContent;children:ReactNode}) {
 if(pageKey==='khipuxQuito')return <main className="min-h-screen">{children}</main>;
 return <div className="editorial-site" lang={locale}><EditorialHeader locale={locale} pageKey={pageKey} labels={content.navLabels}/><main id="main">{children}</main><footer><div className="foot-top"><div><Link className="footer-brand" href={getLocalizedPath(locale,'home')}><img src={withBasePath('/brand/lastlab-logo-marfil.svg')} width="1200" height="360" alt="LASTLab — For Critical AI &amp; Digital Technologies"/></Link><p>{locale==='es'?'Investigación crítica desde América Latina.':'Critical research from Latin America.'}</p></div><nav aria-label={locale==='es'?'Enlaces del pie':'Footer links'}>{content.footerLinks.map(k=><Link key={k} href={getLocalizedPath(locale,k)}>{content.navLabels[k]}</Link>)}</nav></div><div className="foot-bottom"><span>{content.siteSubtitle}</span><span>{locale==='es'?'Red autónoma y multinodal · América Latina y el Sur Global':'An autonomous multinodal network · Latin America and the Global South'}</span></div></footer></div>;
}
