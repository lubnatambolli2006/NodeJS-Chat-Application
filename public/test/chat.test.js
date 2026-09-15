const { expect } = require("chai");

describe("Chat Application", function () {

  it("should correctly create a chat message", function () {
    const message = {
      username: "User1",
      message: "Hello"
    };

    expect(message).to.have.property("username");
    expect(message).to.have.property("message");
    expect(message.username).to.equal("User1");
    expect(message.message).to.equal("Hello");
  });

  it("should not allow an empty message", function () {
    const message = "";

    expect(message).to.equal("");
  });

});
