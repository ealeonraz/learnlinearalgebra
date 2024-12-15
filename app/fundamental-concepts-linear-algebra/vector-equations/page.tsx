import { TheoremInfo } from '@/app/types/types';
import './page.module.css';
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import DisplayProof  from '@/app/components/theoremsection';
import ProofView from '@/app/components/proofcard';

export default async function View() {
    const section = 'Vector Equations';
    const theorem: TheoremInfo[] = await getProofs(section);
    const sectionRoutes = {
        "/fundamental-concepts-linear-algebra/":[
          "row-reductions-and-echelon-forms",
          "vector-equations",
          "matrix-equation-axb",
          "solution-sets-of-linear-systems",
          "linear-independence",
          "matrix-of-a-linear-transformation"
        ]
    }

    return (
        <ProofView proofInfo={theorem} />
    );
}
