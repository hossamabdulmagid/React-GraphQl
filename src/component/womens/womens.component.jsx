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
            if (loading) return <p> <Spinner />Loading...</p>
            if (error) return <p>Error :</p>
            return data && data.getCollectionsByTitle.items.map((singleProduact) => (
                <>
                    <div className="container"
                        key={singleProduact.id}>
                        <div className="row">
                            <div className="col-sm-12">
                                <Women
                                    name={singleProduact.name}
                                    imageUrl={singleProduact.imageUrl}
                                    price={singleProduact.price}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ))
        }}
    </Query>
);
export default Womens;
