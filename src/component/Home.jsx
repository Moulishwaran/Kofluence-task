import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const Home = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let Data = await axios.get(
          `https://64d90fabe947d30a2609e057.mockapi.io/participant`
        );
        setUserData(Data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h3 className="h3 mb-0 text-gray-800 ml-5">User Details</h3>y
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>EmailId</th>
                <th>Mobile Number</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((list, index) => {
                return (
                  <tr>
                    <td>{list.name}</td>
                    <td>{list.emailId}</td>
                    <td>{list.mobileNumber}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
