import type {LocaleContent} from '@/content/schema';
import type {Locale,PageKey} from '@/lib/i18n';
import {EditorialPage} from '@/components/editorial/page';
import {KhipuxQuitoPage} from '@/components/pages/khipux-quito-page';
export function PageContent({locale,pageKey,content}:{locale:Locale;pageKey:PageKey;content:LocaleContent}) {
 return pageKey==='khipuxQuito'?<KhipuxQuitoPage locale={locale} page={content.pages.khipuxQuito}/>:<EditorialPage locale={locale} pageKey={pageKey} content={content}/>;
}
