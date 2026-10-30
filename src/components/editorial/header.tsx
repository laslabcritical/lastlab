"use client";
import Link from 'next/link';
import {useState,useEffect} from 'react';
import {NAV_ORDER,getLocalizedPath,type Locale,type PageKey} from '@/lib/i18n';
import {withBasePath} from '@/lib/base-path';
export function EditorialHeader({locale,pageKey,labels}:{locale:Locale;pageKey:PageKey;labels:Record<PageKey,string>}){
 const[open,setOpen]=useState(false);
 useEffect(()=>{document.documentElement.lang=locale;},[locale]);
 return <header><a className="skip" href="#main">{locale==='es'?'Ir al contenido':'Skip to content'}</a><div className="header-inner"><Link href={getLocalizedPath(locale,'home')} className="brand"><picture><source media="(max-width: 480px)" srcSet={withBasePath('/brand/lastlab-simbolo-negro.svg')}/><img src={withBasePath('/brand/lastlab-logo-negro.svg')} width="1200" height="360" alt="LASTLab — For Critical AI &amp; Digital Technologies"/></picture></Link><button className="menu" aria-label={locale==='es'?'Abrir menú':'Open menu'} aria-controls="editorial-nav" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button><nav id="editorial-nav" className={open?'open':''} aria-label={locale==='es'?'Navegación principal':'Main navigation'}>{NAV_ORDER.map(k=><Link key={k} href={getLocalizedPath(locale,k)} className={pageKey===k?'active':''} aria-current={pageKey===k?'page':undefined} onClick={()=>setOpen(false)}>{labels[k]}</Link>)}</nav><div className="languages">{(['es','en'] as const).map((l,i)=><span key={l}>{i>0?' | ':''}<Link href={getLocalizedPath(l,pageKey)} hrefLang={l} lang={l} aria-label={l==='es'?'Ver en español':'View in English'} className={locale===l?'selected':''}>{l.toUpperCase()}</Link></span>)}</div></div></header>
}
