import { TheoremInfo } from '@/app/types/types';
import "../../globals.css";
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import ProofView from '@/app/components/proofcard';

export default async function View() {
    const section = 'Properties of Determinants';
    const theorem: TheoremInfo[] = await getProofs(section);
    
    return (
        <ProofView proofInfo={theorem} />
    );
}
