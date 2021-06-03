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
            if (loading){ return <div> <Spinner />Loading...</div>}
            if (error) {return <div>Error :</div>}
            return data && data.getCollectionsByTitle.items.map((singleProduact, index) => (
                <>
                    <Hat
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
export default Hats;
