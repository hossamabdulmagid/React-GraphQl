import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner } from 'react-bootstrap'
import Jacket from './jacket.component'
const Jackets = () => (
    <Query
        query={gql`
      {
        getCollectionsByTitle(title:"Jackets"){
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
            if (loading) return <p> <Spinner />Loading...</p>
            if (error) return <p>Error :</p>
            return data && data.getCollectionsByTitle.items.map((singleProduact) => (
                <>
                    <Jacket
                        key={singleProduact.id}
                        name={singleProduact.name}
                        imageUrl={singleProduact.imageUrl}
                        price={singleProduact.price}
                    />
                </>
            ))
        }}
    </Query>
);
export default Jackets;
