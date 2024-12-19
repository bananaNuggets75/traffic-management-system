'use client';


export default function NotFound() {
    return <h1>404 - Not Found</h1>;
  }
  
  export const getServerSideProps = () => {
    return { props: {} }; // Skip prerendering
  };
  
  export const dynamic = 'error';
