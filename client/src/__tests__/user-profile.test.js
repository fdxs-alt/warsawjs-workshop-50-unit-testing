import { render, fireEvent } from "@testing-library/react";

import UserProfileName from "../components/user-profile-name";

const user = {
  isVip: true,
  name: "Me",
};

it("should render component", () => {
  const { getByText } = render(<UserProfileName user={user} />);
  const nameElement = getByText("Me");

  expect(nameElement).toBeInTheDocument();
});

it("should trigger event", () => {
  const { getByTestId } = render(<UserProfileName user={user} />);

  const icon = getByTestId("profile-icon");

  expect(icon).toHaveTextContent("🚀");
  
  fireEvent.click(icon);

  expect(icon).toHaveTextContent("🛸");
});
