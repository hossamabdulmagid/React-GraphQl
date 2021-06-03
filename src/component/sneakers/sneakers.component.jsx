import { Query } from "react-apollo";
import gql from "graphql-tag";
import Spinner from 'react-bootstrap/Spinner'
import Sneaker from './sneaker.component'
const Sneakers = () => (
    <Query
        query={gql`
      {
        getCollectionsByTitle(title:"Sneakers"){
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
            return data && data.getCollectionsByTitle.items.map((singleProduact) => (
                <>
                    <Sneaker
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
export default Sneakers;
