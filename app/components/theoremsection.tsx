import Latex from "react-latex-next";
import 'katex/dist/katex.min.css';
import { DisplayProofProps } from "../types/types";

const DisplayProof = (theorem: DisplayProofProps): JSX.Element => {
    return (
        <div className="proof">
            <h1 className="proof_name"><Latex>{theorem.theorem_name}</Latex></h1>
            <div className="theorem">
                <Latex>{theorem.theorem}</Latex>
            </div>
            <div className="proof_content">
                <Latex>{theorem.proof_content}</Latex>
            </div>
        </div>
    );
};

export default DisplayProof;
 