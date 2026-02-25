"use client";
import {ProofViewProps, TheoremInfo } from '@/app/types/types';
import getProofs from '@/app/services/theoremServices';
import 'katex/dist/katex.min.css';
import DisplayProof  from '@/app/components/theoremsection';
import { usePathname, useRouter } from 'next/navigation';

const ProofView = ({proofInfo}: ProofViewProps ): JSX.Element => {
    const sectionRoutes = {
        "/fundamental-concepts-linear-algebra/":[
          "row-reductions-and-echelon-forms",
          "vector-equations",
          "matrix-equation-axb",
          "solution-sets-of-linear-systems",
          "linear-independence",
          "matrix-of-a-linear-transformation"
        ],
        "/matrices-determinants/":[
          "matrix-operations",
          "inverse-of-a-matrix",
          "characterizations-of-invertible-matrices",
          "properties-of-determinants",
          "cramers-rules-volume-and-linear-transformations"
        ],
        "/orthogonality-least-squares-symmetric-matrices/":[
            "diagonalization-of-symmetric-matrices",
            "gram-schmidt-process",
            "least-squares",
            "orthogonality"
        ],
        "/vector-spaces-eigenvalues-eigenvectors/": [
          "vector-spaces-and-sub-spaces",
          "null-spaces-column-spaces-and-linear-transformations",
          "linearly-independent-sets-bases",
          "coordinate-systems",
          "the-dimension-of-a-vector-space",
          "rank",
          "eigenvectors-and-eigenvalues",
          "the-characteristic-equation",
          "diagonalization"
        ]
      };

    const pathname = usePathname();
    const router = useRouter();

    const currentSection = Object.keys(sectionRoutes).find(section =>
    pathname.startsWith(section)
    ) as keyof typeof sectionRoutes | undefined;

    const pagesInSection = currentSection ? sectionRoutes[currentSection] : [];
    
    const currentPage = pathname.split('/').pop();
    const currentIndex = pagesInSection.indexOf(currentPage!);

    const handleBack = () => {
        if (currentIndex > 0) {
          // Navigate to the previous page in the section
          router.push(`${currentSection}${pagesInSection[currentIndex - 1]}`);
        }
      };
    
      const handleForward = () => {
        if (currentIndex < pagesInSection.length - 1) {
          // Navigate to the next page in the section
          router.push(`${currentSection}${pagesInSection[currentIndex + 1]}`);
        }
      };

    return (
        <div className="proof_container">
            <div className="proof_card">
                {proofInfo.map((proof, index) => (
                    <DisplayProof
                    key = {index}
                    theorem = {proof.theorem}
                    proof_content = {proof.proof_content}
                    theorem_name={proof.theorem_name}
                    />
                ))}
            <footer className="button-sec">
                    <button className='sec_btn' onClick={handleBack}>Previous</button>
                    <button className='sec_btn2' onClick={handleForward}>Next</button>
            </footer>
            </div>
        </div>
    );
}
export default ProofView;
