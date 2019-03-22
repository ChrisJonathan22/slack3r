import React from "react";

const Instructions = () => (
  <div className="Instructions-area">
    <div className="Instructions">
      <span>1. Log in to the slack group you want to get details from</span>
      <span>
        2. Then go to this link:
        <a href="https://api.slack.com/custom-integrations/legacy-tokens">
          Generate a token
        </a>
      </span>
      <span>3. Scroll down to the Legacy Token Generators</span>
      <span>4. Select generate token for desired slack group</span>
      <span>
        5. Place the token below, it will only be used for generating the CSV
      </span>
    </div>
  </div>
);

export default Instructions;
