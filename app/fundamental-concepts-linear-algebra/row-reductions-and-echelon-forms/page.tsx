import { TheoremInfo } from '@/app/types/types';
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import DisplayProof  from '@/app/components/theoremsection';
import "../../globals.css";
import ProofView from '@/app/components/proofcard';

export default async function View() {
    const section = 'Row Reduction and Echelon Forms';
    const theorem: TheoremInfo[] = await getProofs(section);
    
    return (
        <ProofView proofInfo={theorem} />
    );
}