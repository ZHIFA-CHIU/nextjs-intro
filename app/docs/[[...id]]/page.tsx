type Props = {
  id?: string[];
};

const DocPage = ({ params }: { params: Props }) => {
    
  return (
    <div>
      <h1>Doc Page: {params.id}</h1>
    </div>
  );
};

export default DocPage;
