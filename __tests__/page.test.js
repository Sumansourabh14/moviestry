import Home from "@/app/page";
import { GlobalContextProvider } from "@/services/globalContext";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock useEmblaCarousel from embla-carousel-react
jest.mock("embla-carousel-react", () => ({
  __esModule: true,
  default: jest.fn(() => [
    null,
    {
      canScrollPrev: jest.fn(() => false), // Mock canScrollPrev
      canScrollNext: jest.fn(() => false), // Mock canScrollNext
      scrollPrev: jest.fn(), // Mock scrollPrev
      scrollNext: jest.fn(), // Mock scrollNext
      on: jest.fn(), // Mock the 'on' event listener
      off: jest.fn(), // Mock the 'off' event listener
    },
  ]),
  useEmblaCarousel: jest.fn(() => [
    null,
    {
      canScrollPrev: jest.fn(() => false),
      canScrollNext: jest.fn(() => false),
      scrollPrev: jest.fn(),
      scrollNext: jest.fn(),
      on: jest.fn(), // Add the 'on' method for event handling
      off: jest.fn(), // Add the 'off' method for detaching events
    },
  ]),
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
        <Home />
      </GlobalContextProvider>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
