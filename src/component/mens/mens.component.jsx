import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner } from 'react-bootstrap'
import Men from './men.component'
const Mens = () => (
  <Query
    query={gql`
      {
        getCollectionsByTitle(title:"mens"){
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
          <Men
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
export default Mens;
