import SignUp from "@/app/signup/page";
import { GlobalContextProvider } from "@/services/globalContext";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sign up page render", () => {
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

  describe("Behaviour", () => {
    it("type something on email, pwd, name", async () => {
      render(
        <GlobalContextProvider>
          <SignUp />
        </GlobalContextProvider>
      );

      await userEvent.type(screen.getByPlaceholderText("Name"), "Hero");
      await userEvent.type(screen.getByPlaceholderText("Email"), "a@g.com");
      await userEvent.type(screen.getByPlaceholderText("Password"), "some1");
    });

    it("should click on the sign up button", async () => {
      render(
        <GlobalContextProvider>
          <SignUp />
        </GlobalContextProvider>
      );

      const button = screen.getByRole("button", { name: "Sign Up" });
      await userEvent.click(button);
    });
  });
});
