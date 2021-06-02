import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner } from 'react-bootstrap'
import Hat from './hat.component'
const Hats = () => (
    <Query
        query={gql`
      {
        getCollectionsByTitle(title:"Hats"){
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
                    <Hat
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
export default Hats;
