import { useEffect, useState } from "react";
import weightService from "../services/weightService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/index.css";
import "../styles/weight.css";

const Weights = () => {
  const [weights, setWeights] = useState([]);
  const [sortOrder, setSortOrder] = useState("descend");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    weightService.getWeights(auth).then((data) => {
      // Sort dates
      sortWeights(data, "descend"); // Initial sort, user can change it
    });
  }, [auth]);

  const formatDate = (dateString) => {
    const date = new Date(dateString + "T00:00:00");
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  // Sort weights based on sortOrder
  const sortWeights = (data, order) => {
    const sorted = data.sort((a, b) => {
      return order === "descend"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    setWeights(sorted);
  };

  // Toggle the sorting order
  const toggleSortOrder = () => {
    const newOrder = sortOrder === "descend" ? "ascend" : "descend";
    setSortOrder(newOrder);
    sortWeights(weights, newOrder);
  };

  // Add the user's new submitted weight
  const addNewWeight = () => {
    console.log("Button clicked for add");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-light mb-4">Welcome, {auth.username}</h2>
      <div className="card shadow-sm bg-dark text-light border-0 weight-card">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">Weight History</h5>
            <div className="d-flex align-items-center btns-div gap-2">
              <button
                className="btn btn-sm btn-outline-light btn-sort"
                onClick={toggleSortOrder}
              >
                <i
                  className={
                    sortOrder === "descend"
                      ? "bi bi-sort-down"
                      : "bi bi-sort-up-alt"
                  }
                ></i>
              </button>
              <button
                className="btn btn-sm btn-outline-light btn-add-weight"
                onClick={addNewWeight}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            {weights.map((weight, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center bg-transparent text-light border-secondary"
              >
                <span className="fw-bold">{formatDate(weight.date)}</span>
                <span
                  className="badge bg-primary rounded-pill"
                  id="weight-badge"
                >
                  {weight.weight} lbs
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weights;
