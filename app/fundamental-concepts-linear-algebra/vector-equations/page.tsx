import { TheoremInfo } from '@/app/types/types';
import './page.module.css';
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import DisplayProof  from '@/app/components/theoremsection';

export default async function View() {
    const section = 'Vector Equations';
    const theorem: TheoremInfo[] = await getProofs(section);
    
    return (
        <div className={"proof_container"}>
            <div className={"proof_card"}>
                {theorem.map((proof, index) => (
                    <DisplayProof
                    key = {index}
                    theorem = {proof.theorem}
                    proof_content = {proof.proof_content}
                    theorem_name={proof.theorem_name}
                    />
                ))}
            </div>
        </div>
    );
}
