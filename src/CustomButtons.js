import React from "react";
import Button from "react-bootstrap/Button";

const CustomButtons = ({ lucky, numberOfTickets }) => {
  return (
    <div className="d-flex">
      {numberOfTickets === "2" ? (
        <div className="d-flex flex-center">
          <div>
            {lucky[0]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[1]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ) : numberOfTickets === "3" ? (
        <div className="d-flex flex-center">
          <div>
            {lucky[0]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[1]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[2]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ) : numberOfTickets === "4" ? (
        <div className="d-flex flex-center">
          <div>
            {lucky[0]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[1]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[2]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[3]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ) : numberOfTickets === "5" ? (
        <div className="d-flex flex-center">
          <div>
            {lucky[0]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[1]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[2]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[3]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
          <div>
            {lucky[4]?.map((item, index) => {
              return (
                <div key={index} className="d-flex">
                  <Button className="custom-btn" variant="warning">
                    {item}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="d-flex">
          {lucky[0]?.map((item, index) => {
            return (
              <div key={index} className="d-flex">
                <Button className="custom-btn" variant="warning">
                  {item}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default CustomButtons;
