import React from "react";
import Card from "react-bootstrap/Card";

const cardViewer = (props) => {
  if (props.cardData)
    return (
      <Card style={{ width: "100%", height: "100%", maxHeight: "450px" }}>
        <Card.Img
          style={{ cursor: "pointer" }}
          onClick={() =>
            props.onCardImgClick(props.cardData["card_images"][0].image_url)
          }
          variant="top"
          src={props.cardData["card_images"][0].image_url}
        />
        <Card.Body style={{ padding: "5px", position: "relative" }}>
          <div style={{ overflowY: "auto", height: "46px" }}>
            <h6 className={"text-center"}>{props.cardData["name"]}</h6>
          </div>
          <div>
            <i>Description:</i>
          </div>
          <div style={{ overflowY: "auto", height: "88px" }}>
            <p style={{ fontSize: "10px" }}>{props.cardData["desc"]}</p>
          </div>
          <div
            style={{
              fontSize: "14px",
              position: "absolute",
              bottom: "2px",
              maxHeight: "63px",
              overflowY: "auto",
            }}
          >
            {props.cardData["atk"] ? (
              <span>
                {" "}
                <strong>ATK:</strong> {" " + props.cardData["atk"]}{" "}
              </span>
            ) : null}
            {props.cardData["def"] ? (
              <span>
                {" "}
                <strong>DEF:</strong> {" " + props.cardData["def"]}{" "}
              </span>
            ) : null}
            {props.cardData["race"] ? (
              <span>
                {" "}
                <strong>
                  {" "}
                  {props.cardData["race"] + " " + props.cardData["type"]}{" "}
                </strong>{" "}
              </span>
            ) : null}
          </div>
        </Card.Body>
      </Card>
    );
  else return null;
};

export default cardViewer;
