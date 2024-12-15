import { TheoremInfo } from '@/app/types/types';
import "../../globals.css";
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import ProofView from '@/app/components/proofcard';
import Script from 'next/script';

export default async function View() {
    const section = 'Orthogonality';
    const theorem: TheoremInfo[] = await getProofs(section);
    
    return (
        <>
        {/* Google Analytics Script */}
        <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WXRPDT3LXF"
        />
        <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WXRPDT3LXF');
            `,
        }}
        />
        <ProofView proofInfo={theorem} />
        </>
    );
}
