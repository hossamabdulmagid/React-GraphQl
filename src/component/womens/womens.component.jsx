import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner } from 'react-bootstrap'
import Women from './women.component'
const Womens = () => (
    <Query
        query={gql`
      {
        getCollectionsByTitle(title:"Womens"){
          title
          id
            items{
                id
                name
                price
               imageUrl
            }
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) { return <div className="container text-center" style={{ marginTop: '100px' }}><Spinner animation="border" size='lg' /></div> }
            if (error) { return <div>Error :</div> }
            return data && data.getCollectionsByTitle.items.map((singleProduact, index) => (
                <>
                    <Women
                        key={index}
                        name={singleProduact.name}
                        imageUrl={singleProduact.imageUrl}
                        price={singleProduact.price}
                    />
                </>
            ))
        }}
    </Query>
);
export default Womens;
