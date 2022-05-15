import React from "react";

// Use types for apps
// Use interfaces when building libraries
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : "Please log in"}
      </h3>
    </div>
  );
}

export default Greet;
