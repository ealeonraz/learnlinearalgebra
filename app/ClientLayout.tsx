"use client"; // This marks the component as client-side

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ClientLayout } from "./types/types";
import './globals.css'

export default function Client({ children }: ClientLayout) {

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
    "orthogonality-least-squares-symmetric-matrices":[],
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

  const pagesInSection = currentSection ? sectionRoutes[currentSection] : [];  // Check if we are inside "fundamental-concepts-linear-algebra"

  const currentPage = pathname.split('/').pop();
  const currentIndex = pagesInSection.indexOf(currentPage!);

  const isInFundamentalConcepts = pathname.startsWith("/fundamental-concepts-linear-algebra/");
  const isInMatricesDeterminants = pathname.startsWith("/matrices-determinants/");
  const isInOrthogonality = pathname.startsWith("/orthogonality-least-squares-symmetric-matrices/");
  const isInVectorSpaces = pathname.startsWith("/vector-spaces-eigenvalues-eigenvectors/");


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
    <>
      <header className="header-sec">
        <div className="title-sec">
          <a className="nav-link nav-home" href="/">
            Learn Linear Algebra
          </a>
        </div>
        {(isInFundamentalConcepts || isInMatricesDeterminants || isInOrthogonality || isInVectorSpaces) && (
            <div className="page-sec">
            <button onClick={handleBack} className="back-arrow">
            <svg width="60px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 9.02615L9.50135 8.9811C9.50045 8.9961 9.5 9.01113 9.5 9.02615H10.25ZM9.71578 8.10177L9.38104 8.77293L9.38104 8.77293L9.71578 8.10177ZM8.656 8.23115L8.16963 7.66024C8.16481 7.66434 8.16005 7.6685 8.15534 7.67273L8.656 8.23115ZM5.35 11.1952L4.84934 10.6367L4.84814 10.6378L5.35 11.1952ZM5 11.9902L5.75008 11.9964L5.74997 11.9839L5 11.9902ZM5.35 12.7852L4.84813 13.3425L4.84943 13.3437L5.35 12.7852ZM8.656 15.7482L8.15543 16.3067C8.16011 16.3109 8.16484 16.315 8.16963 16.3191L8.656 15.7482ZM9.71578 15.8775L9.38104 15.2064V15.2064L9.71578 15.8775ZM10.25 14.9532H9.5C9.5 14.9682 9.50045 14.9832 9.50135 14.9982L10.25 14.9532ZM10.25 11.2402C9.83579 11.2402 9.5 11.5759 9.5 11.9902C9.5 12.4044 9.83579 12.7402 10.25 12.7402V11.2402ZM19 12.7402C19.4142 12.7402 19.75 12.4044 19.75 11.9902C19.75 11.5759 19.4142 11.2402 19 11.2402V12.7402ZM11 11.9902V9.02615H9.5V11.9902L11 11.9902ZM10.9986 9.0712C11.04 8.38373 10.6668 7.738 10.0505 7.43061L9.38104 8.77293C9.45925 8.81193 9.5066 8.89387 9.50135 8.9811L10.9986 9.0712ZM10.0505 7.43061C9.4342 7.12323 8.69388 7.21361 8.16963 7.66024L9.14237 8.80206C9.2089 8.74539 9.30284 8.73392 9.38104 8.77293L10.0505 7.43061ZM8.15534 7.67273L4.84934 10.6367L5.85066 11.7536L9.15666 8.78958L8.15534 7.67273ZM4.84814 10.6378C4.46349 10.9842 4.24573 11.4788 4.25003 11.9964L5.74997 11.9839C5.74924 11.8958 5.78634 11.8115 5.85186 11.7525L4.84814 10.6378ZM4.25003 11.9839C4.24573 12.5015 4.46349 12.9961 4.84814 13.3425L5.85186 12.2278C5.78634 12.1688 5.74924 12.0845 5.74997 11.9964L4.25003 11.9839ZM4.84943 13.3437L8.15543 16.3067L9.15656 15.1896L5.85056 12.2266L4.84943 13.3437ZM8.16963 16.3191C8.69389 16.7657 9.4342 16.8561 10.0505 16.5487L9.38104 15.2064C9.30284 15.2454 9.2089 15.2339 9.14237 15.1772L8.16963 16.3191ZM10.0505 16.5487C10.6668 16.2413 11.04 15.5956 10.9986 14.9081L9.50135 14.9982C9.5066 15.0854 9.45925 15.1674 9.38104 15.2064L10.0505 16.5487ZM11 14.9532V11.9902L9.5 11.9902V14.9532L11 14.9532ZM10.25 12.7402H19V11.2402H10.25V12.7402Z" fill="#E9ECEF"/>
            </svg>
            </button>
            <button onClick={handleForward} className="forward-arrow">
              <svg width="60px" height="50px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 9.0251H14.5C14.5 9.01035 14.4996 8.9956 14.4987 8.98087L13.75 9.0251ZM14.2847 8.10156L13.9503 7.43023L14.2847 8.10156ZM15.344 8.2311L15.8446 7.67259C15.8399 7.66838 15.8351 7.66424 15.8303 7.66015L15.344 
              8.2311ZM18.65 11.1941L19.1569 10.6413L19.1506 10.6356L18.65 11.1941ZM18.65 12.7831L19.1507 13.3416L19.1569 13.3359L18.65 12.7831ZM15.344 15.7471L15.8303 16.3181C15.8352 16.3139 15.8399 16.3098 15.8447 16.3055L15.344 15.7471ZM14.2847 15.8767L14.6191 15.2053L14.6191 15.2053L14.2847 15.8767ZM13.75 14.9531L14.4987 14.9973C14.4996 14.9826 14.5 14.9679 14.5 14.9531H13.75ZM13.75 12.7391C14.1642 12.7391 14.5 12.4033 14.5 11.9891C14.5 11.5749 14.1642 11.2391 13.75 11.2391V12.7391ZM5 11.2391C4.58579 11.2391 4.25 11.5749 4.25 11.9891C4.25 12.4033 4.58579 12.7391 5 12.7391V11.2391ZM14.5 11.9891V9.0251H13V11.9891H14.5ZM14.4987 8.98087C14.4935 8.89368 14.5409 8.81182 14.6191 8.77288L13.9503 7.43023C13.3342 7.73714 12.9607 8.38219 13.0013 9.06934L14.4987 8.98087ZM14.6191 8.77288C14.6973 8.73394 14.7912 8.74542 14.8577 8.80206L15.8303 7.66015C15.3063 7.2138 14.5665 7.12332 13.9503 7.43023L14.6191 8.77288ZM14.8434 8.78961L18.1494 11.7526L19.1506 10.6356L15.8446 7.67259L14.8434 8.78961ZM18.1431 11.7469C18.2108 11.809 18.2494 11.8967 18.2494 11.9886H19.7494C19.7494 11.4763 19.5345 10.9876 19.1569 10.6413L18.1431 11.7469ZM18.2494 11.9886C18.2494 12.0805 18.2108 12.1682 18.1431 12.2303L19.1569 13.3359C19.5345 12.9896 19.7494 12.5009 19.7494 11.9886H18.2494ZM18.1493 12.2247L14.8433 15.1887L15.8447 16.3055L19.1507 13.3415L18.1493 12.2247ZM14.8577 15.1762C14.7912 15.2328 14.6973 15.2443 14.6191 15.2053L13.9503 16.548C14.5665 16.8549 15.3063 16.7644 15.8303 16.3181L14.8577 15.1762ZM14.6191 15.2053C14.5409 15.1664 14.4935 15.0845 14.4987 14.9973L13.0013 14.9089C12.9607 15.596 13.3342 16.2411 13.9503 16.548L14.6191 15.2053ZM14.5 14.9531V11.9891H13V14.9531H14.5ZM13.75 11.2391H5V12.7391H13.75V11.2391Z" fill="#E9ECEF"/>
              </svg>
            </button>
            </div>
      )}
      </header>

      {children}
    </>
  );
}