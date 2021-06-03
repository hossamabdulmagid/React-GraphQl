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
            if (loading) { return <div> <Spinner />Loading...</div> }
            if (error) { return <div>Error :</div> }
            return data && data.getCollectionsByTitle.items.map((singleProduact, index) => (
                <>
                    <Jacket
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
export default Jackets;
