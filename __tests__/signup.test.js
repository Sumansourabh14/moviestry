import SignUp from "@/app/signup/page";
import { GlobalContextProvider } from "@/services/globalContext";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      pathname: "/",
      push: jest.fn(),
      query: {},
    });
  });

  it("renders a heading", () => {
    render(
      <GlobalContextProvider>
        <SignUp />
      </GlobalContextProvider>
    );

    const heading = screen.getByRole("heading", { level: 1, name: "Sign Up" });
    expect(heading).toBeInTheDocument();
  });

  it("renders a button with sign up text", () => {
    render(
      <GlobalContextProvider>
        <SignUp />
      </GlobalContextProvider>
    );

    const button = screen.getByRole("button", { name: "Sign Up" });
    expect(button).toBeInTheDocument();
  });

  it("renders a input field with name placeholder", () => {
    render(
      <GlobalContextProvider>
        <SignUp />
      </GlobalContextProvider>
    );

    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
  });

  it("renders a input field with email placeholder", () => {
    render(
      <GlobalContextProvider>
        <SignUp />
      </GlobalContextProvider>
    );

    const input = screen.getByPlaceholderText("Email");
    expect(input).toBeInTheDocument();
  });

  it("renders a input field with password placeholder", () => {
    render(
      <GlobalContextProvider>
        <SignUp />
      </GlobalContextProvider>
    );

    const input = screen.getByPlaceholderText("Password");
    expect(input).toBeInTheDocument();
  });
});
