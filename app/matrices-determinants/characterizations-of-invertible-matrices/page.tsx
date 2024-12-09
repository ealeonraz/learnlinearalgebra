import { TheoremInfo } from '@/app/types/types';
import "../../globals.css";
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import DisplayProof  from '@/app/components/theoremsection';

export default async function View() {
    const section = 'Characterizations of Invertible Matrices';
    const theorem: TheoremInfo[] = await getProofs(section);
    
    return (
        <div className="proof_container">
            <div className="proof_card">
                {theorem.map((proof, index) => (
                    <DisplayProof
                    key = {index}
                    theorem = {proof.theorem}
                    proof_content = {proof.proof_content}
                    theorem_name={proof.theorem_name}
                    />
                ))}
            <footer className="button-sec">
                    <button className='sec_btn'>Previous</button>
                    <button className='sec_btn2'>Next</button>
            </footer>
            </div>
        </div>
    );
}
